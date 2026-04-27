"use client";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`top${scrolled ? " scrolled" : ""}`} id="topnav">
      <div className="row">
        <a className="brand" href="#top" aria-label="Home">
          <span className="glyph">CL</span>
          <span>charlie liu</span>
          <span className="slash">/</span>
          <span className="role">senior software engineer</span>
        </a>
        <div className="nav-links">
          <a href="#work">
            <span className="num">01</span>Work
          </a>
          <a href="#about">
            <span className="num">02</span>About
          </a>
          <a href="#projects">
            <span className="num">03</span>Projects
          </a>
          <a href="#contact">
            <span className="num">04</span>Contact
          </a>
        </div>
        <span className="status">
          <span className="dot" />
          Open to senior IC roles
        </span>
      </div>
    </nav>
  );
}
