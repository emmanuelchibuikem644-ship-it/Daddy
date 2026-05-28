"use client";
import { useCounter } from "./hooks";

export default function StatCard({ count, suffix = "", label }) {
  const { count: animated, ref } = useCounter(count, 2000);
  return (
    <div ref={ref} className="text-center py-7 px-4"
      style={{ background: "rgba(255,255,255,.03)" }}>
      <div className="stat-counter">
        {animated}{suffix}
      </div>
      <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,.45)" }}>{label}</p>
    </div>
  );
}
