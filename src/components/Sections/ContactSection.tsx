"use client";
import { useState } from "react";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  INSTAGRAM,
  RESUME_URL,
} from "@/common/links";

const EMAIL = "info@itscharlieliu.com";

export default function ContactSection() {
  const [copyText, setCopyText] = useState("click to copy");
  const [copyAccent, setCopyAccent] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    navigator.clipboard
      ?.writeText(EMAIL)
      .then(() => {
        setCopyText("copied ✓");
        setCopyAccent(true);
        setTimeout(() => {
          setCopyText("click to copy");
          setCopyAccent(false);
        }, 1600);
      })
      .catch(() => {
        window.location.href = `mailto:${EMAIL}`;
      });
  };

  return (
    <section className="shell contact" id="contact">
      <div className="contact-grid">
        <div className="reveal">
          <span className="section-label">
            <span className="section-num">04</span> Get in touch
          </span>
          <h2>
            Hiring for something <em>serious?</em> Let&apos;s talk.
          </h2>
          <a
            className="email-link"
            href={`mailto:${EMAIL}`}
            onClick={handleEmailClick}
          >
            <span>{EMAIL}</span>
            <span className="arrow">→</span>
            <span
              className="copy-hint"
              style={copyAccent ? { color: "var(--accent)" } : undefined}
            >
              {copyText}
            </span>
          </a>
        </div>

        <nav
          className="links reveal"
          style={{ "--rd": "120ms" } as React.CSSProperties}
          aria-label="External links"
        >
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <span className="lnum">/01</span>
            <span>GitHub</span>
            <span className="lhandle">@itscharlieliu</span>
            <span className="larr">↗</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <span className="lnum">/02</span>
            <span>LinkedIn</span>
            <span className="lhandle">in/itscharlieliu</span>
            <span className="larr">↗</span>
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <span className="lnum">/03</span>
            <span>Instagram</span>
            <span className="lhandle">@charlieliuphoto</span>
            <span className="larr">↗</span>
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span className="lnum">/04</span>
            <span>Résumé</span>
            <span className="lhandle">PDF · 2026</span>
            <span className="larr">↓</span>
          </a>
          <a href={`mailto:${EMAIL}`}>
            <span className="lnum">/05</span>
            <span>Email</span>
            <span className="lhandle">{EMAIL}</span>
            <span className="larr">↗</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
