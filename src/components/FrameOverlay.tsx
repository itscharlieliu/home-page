"use client";
import { useEffect, useState } from "react";

function fmtTime() {
  const d = new Date();
  const opts: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Los_Angeles",
  };
  return new Intl.DateTimeFormat("en-US", opts).format(d) + " PST";
}

export default function FrameOverlay() {
  const [time, setTime] = useState("-- : -- PST");

  useEffect(() => {
    setTime(fmtTime());
    const id = setInterval(() => setTime(fmtTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="frame" aria-hidden="true">
      <span className="tick tl">CL · 47.6062°N 122.3321°W</span>
      <span className="tick tr">v.2026.04 / index</span>
      <span className="tick bl">© Charlie Liu — All rights reserved</span>
      <span className="tick br">{time}</span>
    </div>
  );
}
