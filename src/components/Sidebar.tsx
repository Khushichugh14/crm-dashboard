import React from "react";
import { MdDashboard, MdPeople, MdMessage, MdBarChart, MdCalendarToday, MdAttachMoney, MdSwapHoriz } from "react-icons/md";

export default function Sidebar() {
  const menu = [
    { label: "Dashboard", icon: <MdDashboard size={20} /> },
    { label: "Squad", icon: <MdPeople size={20} /> },
    { label: "Messenger", icon: <MdMessage size={20} /> },
    { label: "Statistic", icon: <MdBarChart size={20} /> },
    { label: "Calendar", icon: <MdCalendarToday size={20} /> },
    { label: "Finance", icon: <MdAttachMoney size={20} /> },
    { label: "Transfers", icon: <MdSwapHoriz size={20} /> },
  ];

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
        {menu.map((it, idx) => (
          <button key={it.label}
            className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-150 text-slate-700 hover:bg-white/10 ${idx===0 ? "bg-emerald-600/10 text-emerald-700" : ""}`}>
            <span className="text-emerald-600">{it.icon}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 text-xs text-slate-600">Version 1.0 · last sync 2m ago</div>
    </div>
  );
}
