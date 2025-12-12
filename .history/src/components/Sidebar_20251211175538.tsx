import React from "react";
import type { THEME as TTYPE } from "../pages/Dashboard";
type Theme = any;

export default function Sidebar({ theme }: { theme: Theme }) {
  return (
    <div
      className="h-full rounded-2xl p-6"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.12))",
        borderRight: "1px solid rgba(255,255,255,0.22)",
        boxShadow: "0 8px 24px rgba(14,30,37,0.06)",
      }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold"
             style={{ background: "linear-gradient(135deg,#0ea5a9,#06b6d4)" }}>
          CP
        </div>
        <div>
          <div className="text-slate-800 font-semibold">CoachPro</div>
          <div className="text-xs text-slate-600">Admin Dashboard</div>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {["Dashboard", "Employees", "Teams", "Reports", "Calendar", "Settings"].map(it => (
          <button key={it}
            className={`text-left py-2 px-3 rounded-lg transition-all duration-150 text-slate-700 hover:bg-white/10 ${it === "Dashboard" ? "bg-emerald-600/10 text-emerald-700" : ""}`}>
            {it}
          </button>
        ))}
      </nav>

      <div className="mt-8 text-xs text-slate-600">Version 1.0 · last sync 2m ago</div>
    </div>
  );
}
