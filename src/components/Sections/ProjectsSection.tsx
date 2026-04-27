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
        <a className="proj" href="#">
          <div className="proj-head">
            <span className="proj-tag">PROJECT · [LANG]</span>
            <span className="proj-status">
              <span className="pdot" />
              Active
            </span>
          </div>
          <h3>[Project name]</h3>
          <p>
            [Short description of what it does and why you built it. One or two
            sentences.]
          </p>
          <div className="proj-foot">
            <span>github.com/itscharlieliu/[repo]</span>
            <span className="arr">→</span>
          </div>
        </a>

        <a className="proj" href="#">
          <div className="proj-head">
            <span className="proj-tag">PROJECT · [LANG]</span>
            <span className="proj-status">
              <span className="pdot" />
              Active
            </span>
          </div>
          <h3>[Project name]</h3>
          <p>
            [Short description of what it does and why you built it. One or two
            sentences.]
          </p>
          <div className="proj-foot">
            <span>github.com/itscharlieliu/[repo]</span>
            <span className="arr">→</span>
          </div>
        </a>

        <a className="proj" href="#">
          <div className="proj-head">
            <span className="proj-tag">WRITING</span>
            <span className="proj-status archived">
              <span className="pdot" />
              Notes
            </span>
          </div>
          <h3>Field notes</h3>
          <p>
            Occasional, narrowly-scoped writing on experimentation, AI product
            surfaces, and the unglamorous parts of shipping at scale.
          </p>
          <div className="proj-foot">
            <span>charlieliu.dev/notes</span>
            <span className="arr">→</span>
          </div>
        </a>
      </div>
    </section>
  );
}
