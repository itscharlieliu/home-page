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
            2023 — <span className="now">Now</span>
          </div>
          <div className="lead">
            <h3 className="role">
              Senior Software Engineer · <span className="co">Meta</span>{" "}
              <span className="surface">— Facebook Marketplace</span>
            </h3>
            <p className="impact">
              Led Marketplace&apos;s first generative AI launches on listing
              detail pages — Product Insights and Vehicle Insights — reaching
              39.4% adoption and 51.9% 14-day retention. Drove 300K+ incremental
              daily sessions and ~$7M annualized revenue impact across 200+
              experiments. Launched Screenshot to Share, scaling to ~1.5M daily
              uses.
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
              Owned core feature-flagging and rollout infrastructure handling
              40M requests per second across a large portion of Dropbox&apos;s
              product surface. Led migration from REST to gRPC. Authored the
              experiment-expiration system that reduced high-severity incidents
              by 50%, and a new creation workflow cutting setup time by 30%.
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
              Built full-stack and embedded software for connected-device and
              Class II medical-device products. Owned deployment pipelines and
              backend integrations for OTA updates and data workflows across
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
        ↳ Full history and shipped work available on request.
      </p>
    </section>
  );
}
