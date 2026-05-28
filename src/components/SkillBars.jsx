"use client";
import { useSkillBars } from "./hooks";

const skills = [
  { name: "Software Development",      pct: 92 },
  { name: "Web Design & Development",  pct: 95 },
  { name: "Graphics Design & UI/UX",   pct: 90 },
  { name: "Cybersecurity",             pct: 85 },
  { name: "SEO & Google Ads",          pct: 88 },
  { name: "Cloud Solutions (AWS)",     pct: 80 },
];

export default function SkillBars({ subset }) {
  const { ref, ready } = useSkillBars();
  const list = subset ? skills.slice(0, subset) : skills;

  return (
    <div ref={ref} className="flex flex-col gap-5">
      {list.map(({ name, pct }) => (
        <div key={name}>
          <div className="flex justify-between text-sm mb-2"
            style={{ color: "rgba(255,255,255,.7)" }}>
            <span>{name}</span>
            <span style={{ color: "var(--cyan)" }}>{pct}%</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,.08)" }}>
            <div
              className="skill-fill"
              style={{ width: ready ? `${pct}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
