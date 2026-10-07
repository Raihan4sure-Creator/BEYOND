import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { Label } from '@/components/Label';
import { Picture } from '@/components/Picture';
import { delay } from '@/components/delay';
import { images } from '@/content/images';
import { updated, work, workPage } from '@/content/site';

export const metadata: Metadata = pageMeta({
  title: 'Work',
  description:
    'Beyond Edits, YouTube for Will Barron and Salesman.com, real estate edits for Ray White agents, and the AI tools we use inside the team.',
  path: '/work/',
});

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="label" data-reveal>
            Work
          </p>
          <h1 className="h1-page" data-reveal style={delay(80)}>
            {workPage.title}
          </h1>
          <p className="lead" data-reveal style={delay(160)}>
            {workPage.lead}
          </p>
          <p className="label mt-40" data-reveal style={delay(220)}>
            Updated {updated}
          </p>
        </div>
      </section>

      {workPage.groups.map((g, gi) => {
        const items = work.filter((w) => w.kind === g.kind);
        return (
          <section className="band-tight rule-top" key={g.kind}>
            <div className="wrap case">
              <div className="case-head">
                <Label n={gi + 1}>{g.label}</Label>
                <p className="body mt-16" data-reveal>
                  {g.note}
                </p>
              </div>
              <div className="case-body">
                {items.map((item, i) => (
                  <article className="case-item" key={item.title} data-reveal style={delay(i * 80)}>
                    {item.kind === 'Company' && (
                      <div className="frame zoom">
                        <Picture img={images.desk} sizes="(max-width: 960px) 94vw, 56vw" />
                      </div>
                    )}
                    <h2 className="row-title">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                      {item.href && (
                        <span className="muted" aria-hidden="true">
                          <ArrowUpRight size={18} />
                        </span>
                      )}
                    </h2>
                    <p className="body">{item.body}</p>
                    <dl>
                      <div>
                        <dt>Role</dt>
                        <dd>{item.role}</dd>
                      </div>
                      <div>
                        <dt>Type</dt>
                        <dd>{item.tags.join(' / ')}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="band-tight rule-top">
        <div className="wrap grid split" style={{ alignItems: 'end' }}>
          <p className="statement" data-reveal>
            {workPage.close}
          </p>
          <div className="hero-ctas" data-reveal style={delay(100)}>
            <Link href="/contact/#enquiry" className="btn btn-primary">
              Talk about a project <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
