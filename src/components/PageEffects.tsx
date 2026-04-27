"use client";
import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Stat counter animation
    function animateCounter(el: Element, target: number, decimals = 0, dur = 1400) {
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      function step(now: number) {
        const t = Math.min(1, (now - start) / dur);
        const v = target * ease(t);
        (el as HTMLElement).textContent = decimals
          ? v.toFixed(decimals)
          : Math.floor(v).toString();
        if (t < 1) requestAnimationFrame(step);
        else
          (el as HTMLElement).textContent = decimals
            ? target.toFixed(decimals)
            : target.toString();
      }
      requestAnimationFrame(step);
    }
    const statIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const root = e.target as HTMLElement;
          const valueNode = root.querySelector(".counter") || root;
          const target = parseFloat(root.getAttribute("data-count") || "0");
          const decimals = parseInt(root.getAttribute("data-decimals") || "0", 10);
          if (!Number.isNaN(target)) animateCounter(valueNode, target, decimals);
          statIO.unobserve(root);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => statIO.observe(el));

    // Cursor glow
    const glow = document.getElementById("cursorGlow");
    let gx = window.innerWidth / 2,
      gy = window.innerHeight / 2;
    let tx = gx,
      ty = gy;
    let glowOn = false;
    let animId: number;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (glow && isFinePointer) {
      const onMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if (!glowOn) {
          glow.style.opacity = "1";
          glowOn = true;
        }
      };
      const onLeave = () => {
        if (glow) {
          glow.style.opacity = "0";
          glowOn = false;
        }
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseleave", onLeave);
      function loop() {
        gx += (tx - gx) * 0.12;
        gy += (ty - gy) * 0.12;
        if (glow)
          glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
        animId = requestAnimationFrame(loop);
      }
      loop();
      return () => {
        io.disconnect();
        statIO.disconnect();
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseleave", onLeave);
        cancelAnimationFrame(animId);
      };
    } else if (glow) {
      glow.style.display = "none";
    }

    return () => {
      io.disconnect();
      statIO.disconnect();
    };
  }, []);

  return null;
}
