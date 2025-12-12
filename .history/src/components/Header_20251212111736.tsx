import React from "react";
type Theme = any;

export default function Header({ query, setQuery }: { query: string; setQuery: (v: string) => void; theme: Theme; }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <div className="text-slate-500 text-sm">Welcome back, <span className="font-semibold">Andrea</span> 👋</div>
        <h1 className="text-3xl font-extrabold text-slate-800">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search employees or role..."
          className="px-4 py-2 rounded-full border border-white/40 bg-white/60 backdrop-blur-sm"
          style={{ outline: "none" }}
        />
        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-700">Andrea Pirlo</div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-400 text-white flex items-center justify-center">AP</div>
        </div>
      </div>
    </header>
  );
}
