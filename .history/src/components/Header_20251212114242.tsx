import React from "react";
type Theme = any;

export default function Header({ query, setQuery,theme }: { query: string; setQuery: (v: string) => void; theme: Theme; }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <div className="text-slate-500 text-sm">Welcome back, <span className="font-semibold">Andrea</span> 👋</div>
        <h1 className="text-3xl font-extrabold text-slate-800">Dashboard</h1>
      </div>

     
    </header>
  );
}
