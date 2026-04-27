import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="shell hero">
      <div className="hero-grid">
        <div>
          <div className="hero-meta reveal">
            <span>Seattle, WA</span>
            <span className="sep">·</span>
            <span>[Currently @ Meta — Facebook Marketplace]</span>
          </div>

          <h1 className="hero-title">
            <span
              className="name reveal"
              style={{ "--rd": "60ms" } as React.CSSProperties}
            >
              Charlie Liu.
            </span>
            <span
              className="tag reveal"
              style={{ "--rd": "160ms" } as React.CSSProperties}
            >
              Senior software engineer
              <br />
              building <span className="accent">consumer products</span> at
              scale.
            </span>
          </h1>

          <p
            className="hero-lede reveal"
            style={{ "--rd": "280ms" } as React.CSSProperties}
          >
            I work on AI-powered features, experimentation, and the platform
            systems underneath them. Years shipping product software that has to
            be both measurable and reliable.
          </p>

          <div
            className="hero-ctas reveal"
            style={{ "--rd": "380ms" } as React.CSSProperties}
          >
            <a className="btn primary" href="#work">
              <span>View work</span>
              <span className="arrow">→</span>
            </a>
            <a className="btn ghost" href="#contact">
              <span>Resume / Contact</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <aside
          className="hero-side reveal"
          style={{ "--rd": "200ms" } as React.CSSProperties}
        >
          <div className="photo-frame">
            <span className="photo-label">PORTRAIT · 4:5</span>
            <Image
              src="https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/DSC05054-2.jpg"
              alt="Charlie Liu"
              fill
              style={{ objectFit: "cover" }}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="photo-meta">
              <div>
                <b>Charlie Liu</b>
                SEA · 2026
              </div>
              <div>F/2.8 · 50mm</div>
            </div>
          </div>
        </aside>
      </div>

      <div
        className="hero-stats reveal"
        style={{ "--rd": "520ms" } as React.CSSProperties}
      >
        <div className="stat">
          <div className="label">Years shipping</div>
          <div className="value" data-count="6">
            <span className="counter">0</span>
            <span className="unit">+</span>
          </div>
        </div>
        <div className="stat">
          <div className="label">Experiments shipped</div>
          <div className="value" data-count="200">
            <span className="counter">0</span>
            <span className="unit">+</span>
          </div>
        </div>
        <div className="stat">
          <div className="label">Annualized rev. impact</div>
          <div className="value" data-count="7">
            <span style={{ color: "var(--fg-2)", fontSize: "18px" }}>$</span>
            <span className="counter">0</span>
            <span className="unit">M+</span>
          </div>
        </div>
        <div className="stat">
          <div className="label">Avg. on-call P0s</div>
          <div className="value" data-count="0">
            <span className="counter">0</span>
            <span className="unit"> / qtr</span>
          </div>
        </div>
      </div>
    </section>
  );
}
