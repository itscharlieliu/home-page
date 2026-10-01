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
          A bit more than what fits on a résumé.
        </div>
      </div>

      <div className="about-grid">
        <div className="about-prose reveal">
          <p>
            I&apos;ve been a software engineer for about six years, at Meta,
            Dropbox, and Promenade. At Meta I led the first generative AI
            features on Marketplace listings. At Dropbox I owned the
            feature-flag service, which handled around 40 million requests per
            second. Promenade was a small company, so I did a bit of
            everything there, including embedded work on medical devices.
          </p>
          <p>
            Most of my work has involved <strong>A/B testing</strong> in some
            way. I like to plan the experiment and the rollout while I&apos;m
            still writing the code, so everyone agrees on what we&apos;re
            measuring before launch. My favorite projects have usually needed a
            lot of back-and-forth with PMs, designers, data scientists, and
            sometimes legal, and I&apos;m comfortable being the engineer who
            keeps that moving.
          </p>
          <p>
            I also care about the less visible parts of the job: good tests,
            keeping latency down, and on-call docs that someone else can
            actually follow.
          </p>
        </div>

        <div
          className="skills reveal"
          style={{ "--rd": "120ms" } as React.CSSProperties}
        >
          <div className="group">
            <div className="k">Strengths</div>
            <div className="v">
              Consumer product work, A/B testing, AI features, backend
              platforms, reliability, working across teams.
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
              Local-first apps, and better ways to test LLM agents.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
