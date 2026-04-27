export default function AboutSection() {
  return (
    <section className="shell about" id="about">
      <div className="section-head">
        <div>
          <span className="section-label">
            <span className="section-num">02</span> About
          </span>
          <h2>How I work.</h2>
        </div>
        <div className="right">
          Short version: I treat code, product, and metrics as one system, and
          I default to clarity.
        </div>
      </div>

      <div className="about-grid">
        <div className="about-prose reveal">
          <p>
            I&apos;m a <strong>product-minded engineer</strong> with 6+ years
            at Meta, Dropbox, and Promenade. I&apos;ve shipped AI product
            launches, run hundreds of experiments, and owned platform
            infrastructure that handles tens of millions of requests per
            second. The through-line is the same: move a real metric, reliably,
            at scale.
          </p>
          <p>
            I read dashboards before standup. I write the rollout plan before
            the diff. I treat{" "}
            <strong>
              experimentation as a first-class part of engineering
            </strong>
            , not a thing data scientists do at the end. The work I&apos;m
            proudest of is almost always cross-functional — it shipped because
            someone made the PM, design, data science, and legal conversations
            easier, not harder.
          </p>
          <p>
            I care about craft — the tests pass, the latency budget is
            respected, the on-call runbook actually runs — but I have no
            patience for craft-as-aesthetic. The bar is whether the thing
            works, for real users, at the scale it claims to.
          </p>
        </div>

        <div
          className="skills reveal"
          style={{ "--rd": "120ms" } as React.CSSProperties}
        >
          <div className="group">
            <div className="k">Strengths</div>
            <div className="v">
              Consumer product engineering, experimentation &amp; growth, AI
              product features, platform &amp; infra systems, reliability,
              cross-functional execution.
            </div>
          </div>
          <div className="group">
            <div className="k">Languages</div>
            <div className="v">
              TypeScript, JavaScript, Python, Go, Hack/PHP, C++
            </div>
          </div>
          <div className="group">
            <div className="k">Frontend</div>
            <div className="v">
              React, React Native, Relay, GraphQL, Redux, Swift
            </div>
          </div>
          <div className="group">
            <div className="k">Backend</div>
            <div className="v">
              gRPC, REST, feature flags, experimentation systems, AWS, Docker,
              CI/CD, Django
            </div>
          </div>
          <div className="group">
            <div className="k">Currently</div>
            <div className="v">
              Local-first runtimes, structured eval harnesses for agentic
              systems.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
