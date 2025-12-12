import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-lg bg-emerald-600/80 flex items-center justify-center text-white font-bold">CP</div>
        <div>
          <div className="text-slate-800 font-semibold">CoachPro</div>
          <div className="text-xs text-slate-600">Admin Dashboard</div>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {["Dashboard","Employees","Teams","Reports","Calendar","Settings"].map(it => (
          <button key={it} className="text-left py-2 px-3 rounded-lg hover:bg-white/20">{it}</button>
        ))}
      </nav>

      <div className="mt-8 text-xs text-slate-600">Version 1.0 · last sync 2m ago</div>
    </div>
  );
}
