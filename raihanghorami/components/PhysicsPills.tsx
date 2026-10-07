'use client';

import { useEffect, useRef, useState } from 'react';

type Pill = { t: string; bg: string; fg?: string };

/**
 * Pills that drop into a box when it scrolls into view. Drag them with a mouse,
 * tap or click one to flick it. Falls back to a static wrap for reduced motion.
 */
export function PhysicsPills({ items }: { items: readonly Pill[] }) {
  const box = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let stop = () => {};
    let started = false;

    const start = async () => {
      started = true;
      const Matter = (await import('matter-js')).default;
      const { Engine, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;

      const pills = Array.from(el.querySelectorAll<HTMLElement>('.pill'));
      const sizes = pills.map((p) => ({ w: p.offsetWidth, h: p.offsetHeight }));
      const W = el.clientWidth;
      const H = el.clientHeight;

      const engine = Engine.create({ enableSleeping: true });
      engine.gravity.y = 1;

      const wall = { isStatic: true, render: { visible: false } };
      Composite.add(engine.world, [
        Bodies.rectangle(W / 2, H + 50, W * 2, 100, wall),
        Bodies.rectangle(-50, H / 2, 100, H * 4, wall),
        Bodies.rectangle(W + 50, H / 2, 100, H * 4, wall),
      ]);

      const bodies = sizes.map(({ w, h }, i) => {
        const x = Math.min(W - w / 2 - 8, Math.max(w / 2 + 8, ((i * 0.37) % 1) * W));
        const y = -h - i * 70;
        return Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: h / 2 - 1 },
          restitution: 0.35,
          friction: 0.3,
          frictionAir: 0.012,
          angle: (((i * 7) % 11) - 5) * 0.06,
        });
      });
      Composite.add(engine.world, bodies);

      const cleanups: (() => void)[] = [];

      // Drag with a mouse only; never hijack page scroll or touch.
      if (window.matchMedia('(hover: hover)').matches) {
        const mouse = Mouse.create(el);
        const m = mouse as unknown as Record<string, EventListener>;
        el.removeEventListener('wheel', m.mousewheel);
        el.removeEventListener('touchmove', m.mousemove);
        el.removeEventListener('touchstart', m.mousedown);
        el.removeEventListener('touchend', m.mouseup);
        const mc = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.18, damping: 0.1 } });
        Composite.add(engine.world, mc);
        const wake = () => bodies.forEach((b) => Matter.Sleeping.set(b, false));
        Events.on(mc, 'startdrag', wake);
      }

      // Tap / click flick.
      pills.forEach((p, i) => {
        const flick = () => {
          const b = bodies[i];
          Matter.Sleeping.set(b, false);
          Body.setVelocity(b, { x: (Math.random() - 0.5) * 8, y: -14 });
          Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.3);
        };
        p.addEventListener('click', flick);
        cleanups.push(() => p.removeEventListener('click', flick));
      });

      setLive(true);

      let raf = 0;
      let visible = true;
      const tick = () => {
        Engine.update(engine, 1000 / 60);
        bodies.forEach((b, i) => {
          const { w, h } = sizes[i];
          pills[i].style.transform = `translate(${b.position.x - w / 2}px, ${b.position.y - h / 2}px) rotate(${b.angle}rad)`;
        });
        if (visible) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      const vis = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(tick);
        }
      });
      vis.observe(el);

      stop = () => {
        cancelAnimationFrame(raf);
        vis.disconnect();
        cleanups.forEach((c) => c());
        Engine.clear(engine);
      };
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  return (
    <div ref={box} className={`pills${live ? '' : ' static'}`}>
      <p className="kicker pills-hint">{live ? 'Things I care about. Drag them around.' : 'Things I care about'}</p>
      {items.map((p, i) => (
        <span
          key={p.t}
          className="pill"
          style={{
            background: p.bg,
            color: p.fg ?? '#131313',
            boxShadow: p.bg === '#ffffff' ? 'inset 0 0 0 1px rgba(19,19,19,.15)' : undefined,
            ['--r' as string]: `${((i * 5) % 9) - 4}deg`,
            transform: live ? 'translate(-999px, -999px)' : undefined,
          }}
        >
          {p.t}
        </span>
      ))}
    </div>
  );
}
