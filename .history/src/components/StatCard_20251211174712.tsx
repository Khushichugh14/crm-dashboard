import React from "react";

export default function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle?: string; }) {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 shadow-md border border-white/30">
      <div className="text-sm text-slate-600">{title}</div>
      <div className="text-2xl font-bold text-slate-800 mt-1">{value}</div>
      {subtitle && <div className="text-xs text-slate-500 mt-1">{subtitle}</div>}
    </div>
  );
}
