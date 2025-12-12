import React from "react";
type Theme = any;

export default function MiniCard({ label, value, theme }: { label: string; value: string; theme: Theme; }) {
  return (
    <div
      className="rounded-lg p-3"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.60), rgba(255,255,255,0.48))",
        border: `1px solid rgba(255,255,255,0.6)`,
        boxShadow: "0 8px 20px rgba(14,30,37,0.05)",
      }}
    >
      <div className="text-xs text-slate-600">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
