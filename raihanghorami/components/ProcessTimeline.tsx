/** A quiet editing timeline behind the Process heading. Decorative only; no playhead. */

type Clip = [left: number, width: number];
type Track = { name: string; c: string; audio?: boolean; clips: Clip[] };

// Positions are in % of one loop; the strip repeats twice so it can scroll forever.
const tracks: Track[] = [
  { name: 'V1', c: '176, 172, 246', clips: [[4, 16], [24, 9], [52, 22], [78, 14]] },
  { name: 'V2', c: '112, 214, 206', clips: [[0, 7], [12, 18], [40, 20], [66, 6], [86, 11]] },
  { name: 'V3', c: '232, 200, 104', clips: [[10, 14], [30, 16], [56, 8], [70, 20]] },
  { name: 'A1', c: '116, 208, 144', audio: true, clips: [[0, 36], [46, 30], [82, 15]] },
  { name: 'A2', c: '192, 168, 244', audio: true, clips: [[8, 30], [50, 18], [72, 22]] },
  { name: 'A3', c: '116, 208, 144', audio: true, clips: [[18, 26], [54, 14], [74, 24]] },
];

export function ProcessTimeline() {
  return (
    <div className="ptl" aria-hidden="true">
      {tracks.map((t) => (
        <div className="ptl-row" key={t.name}>
          <span className="ptl-name">{t.name}</span>
          <div className="ptl-lane">
            <div className="ptl-strip">
              {[0, 50].flatMap((offset) =>
                t.clips.map(([left, width]) => (
                  <i
                    key={`${offset}-${left}`}
                    className={t.audio ? 'ptl-clip is-audio' : 'ptl-clip'}
                    style={{ left: `${offset + left / 2}%`, width: `${width / 2}%`, ['--c' as string]: t.c }}
                  />
                )),
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
