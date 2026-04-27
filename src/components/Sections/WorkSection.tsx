export default function WorkSection() {
  return (
    <section className="shell work" id="work">
      <div className="section-head">
        <div>
          <span className="section-label">
            <span className="section-num">01</span> Selected work
          </span>
          <h2>Things I&apos;ve shipped that moved a number.</h2>
        </div>
        <div className="right">
          A curated subset, ordered most recent first. Roles span product
          engineering, platform, and experimentation infra.
        </div>
      </div>

      <div className="timeline">
        <article className="row reveal">
          <div className="yr">
            2024 — <span className="now">Now</span>
          </div>
          <div className="lead">
            <h3 className="role">
              Senior Software Engineer ·{" "}
              <span className="co">[Company]</span>{" "}
              <span className="surface">— [Team]</span>
            </h3>
            <p className="impact">
              [Lead engineer role description — replace with real impact and
              scope. What did you own, what did you ship, what moved?]
            </p>
            <div className="meta-tags">
              <span className="tag">typescript</span>
              <span className="tag">react</span>
              <span className="tag">node</span>
              <span className="tag">a/b testing</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">[Key metric]</div>
            <div className="m-value">[+X%]</div>
            <div className="m-sub">[context / scope]</div>
          </div>
          <div className="arrow-cell">→</div>
        </article>

        <article className="row reveal">
          <div className="yr">2023 — 2024</div>
          <div className="lead">
            <h3 className="role">
              Software Engineer ·{" "}
              <span className="co">[Company]</span>{" "}
              <span className="surface">— [Team]</span>
            </h3>
            <p className="impact">
              [Role description — replace with real details. What problem did
              you solve, what was the before/after?]
            </p>
            <div className="meta-tags">
              <span className="tag">python</span>
              <span className="tag">go</span>
              <span className="tag">graphql</span>
              <span className="tag">data infra</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">[Metric]</div>
            <div className="m-value">[−X%]</div>
            <div className="m-sub">[context]</div>
          </div>
          <div className="arrow-cell">→</div>
        </article>

        <article className="row reveal">
          <div className="yr">2021 — 2023</div>
          <div className="lead">
            <h3 className="role">
              Software Engineer ·{" "}
              <span className="co">[Company]</span>{" "}
              <span className="surface">— [Team]</span>
            </h3>
            <p className="impact">
              [Role description — replace with real details and impact numbers.]
            </p>
            <div className="meta-tags">
              <span className="tag">go / python</span>
              <span className="tag">stats</span>
              <span className="tag">platform</span>
              <span className="tag">internal tooling</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">[Metric]</div>
            <div className="m-value">[−X%]</div>
            <div className="m-sub">[context]</div>
          </div>
          <div className="arrow-cell">→</div>
        </article>

        <article className="row reveal">
          <div className="yr">2019 — 2021</div>
          <div className="lead">
            <h3 className="role">
              Software Engineer ·{" "}
              <span className="co">[Company]</span>{" "}
              <span className="surface">— [Team]</span>
            </h3>
            <p className="impact">
              [Role description — replace with real details and impact numbers.]
            </p>
            <div className="meta-tags">
              <span className="tag">node / react</span>
              <span className="tag">postgres</span>
              <span className="tag">reliability</span>
              <span className="tag">observability</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">[Metric]</div>
            <div className="m-value">[−X%]</div>
            <div className="m-sub">[context]</div>
          </div>
          <div className="arrow-cell">→</div>
        </article>
      </div>

      <p
        className="mono"
        style={{ color: "var(--fg-3)", fontSize: "12px", margin: "0 0 8px" }}
      >
        ↳ Older roles and a longer list of shipped work available on request.
      </p>
    </section>
  );
}
