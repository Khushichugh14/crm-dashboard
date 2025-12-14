import React from "react";
import { THEME } from ".";

type Theme = typeof THEME;

type HeaderProps = {
  query: string;
  setQuery: (v: string) => void;
  theme: Theme;
};

export default function Header({ query, setQuery, theme }: HeaderProps) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <div className="text-slate-500 text-sm">
          Welcome back, <span className="font-semibold">Andrea</span> 👋
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 pr-10 rounded-full bg-white shadow-sm border border-gray-200 focus:outline-none focus:border-emerald-400 transition"
            style={{ width: "200px" }}
          />
        </div>
      </div>
    </header>
  );
}
