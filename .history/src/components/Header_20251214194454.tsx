import React from "react";
type Theme = unknown;

export default function Header(theme: Theme ) {
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

      {/* RIGHT SIDE — SEARCH + PROFILE */}
      <div className="flex items-center gap-5">

        {/* SEARCH BAR */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pr-10 rounded-full bg-white shadow-sm border border-gray-200 focus:outline-none focus:border-emerald-400 transition"
            style={{ width: "200px" }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 absolute right-3 top-2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.65 5.65a7.5 7.5 0 0010.6 10.6z"
            />
          </svg>
        </div>

        {/* NOTIFICATION ICON */}
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.243A4.5 4.5 0 015.143 17.243m9.714 0A5.985 5.985 0 0018 12V9a6 6 0 10-12 0v3a5.985 5.985 0 003.143 5.243m9.714 0H5.143"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
            3
          </span>
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-700">Andrea Pirlo</div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-400 text-white flex items-center justify-center font-semibold">
            AP
          </div>
        </div>
      </div>
    </header>
  );
}
