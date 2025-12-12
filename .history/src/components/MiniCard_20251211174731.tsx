import React from "react";

export default function MiniCard({ label, value }: { label: string; value: string; }) {
  return (
    <div className="bg-white/30 rounded-lg p-3 border border-white/20">
      <div className="text-xs text-slate-600">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
