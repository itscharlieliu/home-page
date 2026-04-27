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
            I&apos;m a <strong>product-minded engineer</strong>. I like
            ambiguous problems where the spec is half-written and the right
            answer is something between a design call, a systems decision, and a
            data question. I&apos;d rather ship a small, correct thing this week
            than the perfect thing next quarter.
          </p>
          <p>
            I read dashboards before standup. I write the rollout plan before
            the diff. I treat{" "}
            <strong>
              experimentation as a first-class part of engineering
            </strong>
            , not a thing data scientists do at the end. The work I&apos;m
            proudest of is almost always cross-functional — it shipped because
            someone made the PM, design, and data conversations easier, not
            harder.
          </p>
          <p>
            I care about craft — the tests pass, the latency budget is
            respected, the on-call runbook actually runs — but I have no
            patience for craft-as-aesthetic. The bar is whether the thing works,
            for real users, at the scale it claims to.
          </p>
        </div>

        <div
          className="skills reveal"
          style={{ "--rd": "120ms" } as React.CSSProperties}
        >
          <div className="group">
            <div className="k">Strengths</div>
            <div className="v">
              Product engineering, backend &amp; platform systems,
              experimentation &amp; growth, AI product features, reliability
              &amp; eng. quality, cross-functional execution.
            </div>
          </div>
          <div className="group">
            <div className="k">Languages</div>
            <div className="v">
              TypeScript, Python, Go, Rust, C++ <em>(read)</em>.
            </div>
          </div>
          <div className="group">
            <div className="k">Stack</div>
            <div className="v">
              React, Node, GraphQL, Postgres, Kafka, Spark, Kubernetes.
            </div>
          </div>
          <div className="group">
            <div className="k">Comfortable with</div>
            <div className="v">
              LLM eval pipelines, online + sequential A/B testing, SLO
              programs, profiling &amp; perf work, large-codebase refactors.
            </div>
          </div>
          <div className="group">
            <div className="k">Currently learning</div>
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
