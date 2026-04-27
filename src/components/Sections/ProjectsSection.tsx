export default function ProjectsSection() {
  return (
    <section className="shell projects" id="projects">
      <div className="section-head">
        <div>
          <span className="section-label">
            <span className="section-num">03</span> Open source &amp; side
            projects
          </span>
          <h2>Things I build outside of work.</h2>
        </div>
        <div className="right">
          Small, opinionated, and almost always shipped. A subset.
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
            Full-stack workout planning and logging app with reusable templates,
            history tracking, CSV import/export, and SQLite-backed persistence.
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
            Swift iOS app for location tracking, route visualization, and trip
            export/import. Built for personal use and shared openly.
          </p>
          <div className="proj-foot">
            <span>App store link</span>
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
            <span className="proj-tag">OPEN SOURCE · SWIFT</span>
            <span className="proj-status">
              <span className="pdot" />
              Contributor
            </span>
          </div>
          <h3>Easy Move + Resize</h3>
          <p>
            macOS utility enabling Linux-style window dragging and resizing from
            anywhere on the window. Open-source collaborator.
          </p>
          <div className="proj-foot">
            <span>https://github.com/dmarcotte/easy-move-resize</span>
            <span className="arr">→</span>
          </div>
        </a>
      </div>
    </section>
  );
}
