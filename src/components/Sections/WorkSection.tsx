export default function WorkSection() {
  return (
    <section className="shell work" id="work">
      <div className="section-head">
        <div>
          <span className="section-label">
            <span className="section-num">01</span> Selected work
          </span>
          <h2>Where I&apos;ve worked.</h2>
        </div>
        <div className="right">
          Most recent first. Product engineering, platform work, and
          experimentation infrastructure.
        </div>
      </div>

      <div className="timeline">
        <article className="row reveal">
          <div className="yr">
            2023 — <span className="now">Now</span>
          </div>
          <div className="lead">
            <h3 className="role">
              Senior Software Engineer · <span className="co">Meta</span>{" "}
              <span className="surface">— Facebook Marketplace</span>
            </h3>
            <p className="impact">
              Led the first generative AI features on Marketplace listing pages
              (Product Insights and Vehicle Insights), which reached 39.4%
              adoption and 51.9% 14-day retention. Ran 200+ experiments that
              together added 300K+ daily sessions and about $7M in annualized
              revenue. Also launched Screenshot to Share, which grew to about
              1.5M uses a day.
            </p>
            <div className="meta-tags">
              <span className="tag">typescript</span>
              <span className="tag">react / relay</span>
              <span className="tag">hack / php</span>
              <span className="tag">graphql</span>
              <span className="tag">a/b testing</span>
              <span className="tag">llm pipelines</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">Revenue impact</div>
            <div className="m-value">$7M+</div>
            <div className="m-sub">annualized, 200+ exps</div>
          </div>
        </article>

        <article className="row reveal">
          <div className="yr">2021 — 2023</div>
          <div className="lead">
            <h3 className="role">
              Software Engineer · <span className="co">Dropbox</span>{" "}
              <span className="surface">— Experimentation Platform</span>
            </h3>
            <p className="impact">
              Owned the feature-flag and rollout service, which handled 40M
              requests per second across a large part of Dropbox. Led the move
              from REST to gRPC. Built a system to expire old experiments, which
              cut high-severity incidents in half, and a new experiment setup
              flow that made setup 30% faster.
            </p>
            <div className="meta-tags">
              <span className="tag">go</span>
              <span className="tag">python</span>
              <span className="tag">grpc</span>
              <span className="tag">feature flags</span>
              <span className="tag">experimentation</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">P2+ incident rate</div>
            <div className="m-value">−50%</div>
            <div className="m-sub">via expiration system</div>
          </div>
        </article>

        <article className="row reveal">
          <div className="yr">2019 — 2021</div>
          <div className="lead">
            <h3 className="role">
              Software Engineer · <span className="co">Promenade</span>{" "}
              <span className="surface">— Platform &amp; Devices</span>
            </h3>
            <p className="impact">
              Built full-stack and embedded software for connected devices,
              including Class II medical devices. Owned the deployment pipeline
              and the backend for over-the-air updates and device data, using
              AWS, Django, S3, DynamoDB, Docker, and Yocto.
            </p>
            <div className="meta-tags">
              <span className="tag">python / django</span>
              <span className="tag">aws</span>
              <span className="tag">docker</span>
              <span className="tag">embedded / yocto</span>
              <span className="tag">ota updates</span>
            </div>
          </div>
          <div className="metric">
            <div className="m-label">Device class</div>
            <div className="m-value">FDA II</div>
            <div className="m-sub">medical &amp; IoT</div>
          </div>
        </article>
      </div>

      <p
        className="mono"
        style={{ color: "var(--fg-3)", fontSize: "12px", margin: "0 0 8px" }}
      >
        ↳ More detail in my résumé, or just ask.
      </p>
    </section>
  );
}
