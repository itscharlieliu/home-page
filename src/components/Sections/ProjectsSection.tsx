export default function ProjectsSection() {
  return (
    <section className="shell projects" id="projects">
      <div className="section-head">
        <div>
          <span className="section-label">
            <span className="section-num">03</span> Open source &amp; side
            projects
          </span>
          <h2>Side projects.</h2>
        </div>
        <div className="right">
          Apps I made for myself, plus an open-source tool I contribute to.
        </div>
      </div>

      <div className="proj-grid reveal">
        <a
          className="proj"
          href="https://github.com/itscharlieliu/workouts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="proj-head">
            <span className="proj-tag">APP · TS / REACT</span>
            <span className="proj-status">
              <span className="pdot" />
              Active
            </span>
          </div>
          <h3>Workouts</h3>
          <p>
            A full-stack app for planning and logging workouts. It has reusable
            templates, workout history, and CSV import/export, and stores
            everything in SQLite.
          </p>
          <div className="proj-foot">
            <span>github.com/itscharlieliu/workouts</span>
            <span className="arr">→</span>
          </div>
        </a>

        <a
          className="proj"
          href="https://apps.apple.com/us/app/whereabout-location-log/id6760775197"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="proj-head">
            <span className="proj-tag">IOS · SWIFT</span>
            <span className="proj-status">
              <span className="pdot" />
              Active
            </span>
          </div>
          <h3>Whereabout</h3>
          <p>
            An iOS app that logs where you&apos;ve been, draws your routes on a
            map, and lets you export and import trips. I built it for myself
            and put it on the App Store.
          </p>
          <div className="proj-foot">
            <span>App Store</span>
            <span className="arr">→</span>
          </div>
        </a>

        <a
          className="proj"
          href="https://github.com/dmarcotte/easy-move-resize"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="proj-head">
            <span className="proj-tag">OPEN SOURCE · Objective C</span>
            <span className="proj-status">
              <span className="pdot" />
              Contributor
            </span>
          </div>
          <h3>Easy Move + Resize</h3>
          <p>
            A macOS utility that lets you move and resize a window by grabbing
            it anywhere, the way you can on Linux. I contribute to it.
          </p>
          <div className="proj-foot">
            <span>github.com/dmarcotte/easy-move-resize</span>
            <span className="arr">→</span>
          </div>
        </a>
      </div>
    </section>
  );
}
