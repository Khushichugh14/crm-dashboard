// src/pages/Dashboard.tsx
import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import TrainingBanner from "../components/TrainingBanner";
import MiniCard from "../components/MiniCard";
import EmployeeTable from "../components/EmployeeTable";
import { sampleEmployees } from "../data/sampleEmployees";

/** Theme tokens unchanged... */
export const THEME = {
  cardBg: "linear-gradient(180deg, rgba(255,255,255,0.66), rgba(255,255,255,0.52))",
  cardBorder: "rgba(255,255,255,0.65)",
  glassShadow: "0 12px 30px rgba(14,30,37,0.10)",
  cardRadius: 18,
};

export default function Dashboard() {
  const [employees] = useState(sampleEmployees);
  const totalSalary = useMemo(() => employees.reduce((s, e) => s + e.salary, 0), [employees]);
  const avgPerf = useMemo(() => (employees.reduce((s, e) => s + e.performance, 0) / employees.length).toFixed(1), [employees]);

  function onEdit(e:any){ /*...*/ }
  function onDelete(id:string){ /*...*/ }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-emerald-50 to-violet-50 font-sans">
      <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="col-span-9">
          <header className="flex items-center justify-between mb-6">
            <div>
              <div className="text-slate-500 text-sm">Welcome back, <span className="font-semibold">Andrea</span> 👋</div>
              <h1 className="text-3xl font-extrabold text-slate-800">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-700">Andrea Pirlo</div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-400 text-white flex items-center justify-center">AP</div>
            </div>
          </header>

          {/* Top stat cards */}
          <section className="grid grid-cols-3 gap-4 my-6">
            <div style={{ background: THEME.cardBg, border: `1px solid ${THEME.cardBorder}`, borderRadius: THEME.cardRadius, boxShadow: THEME.glassShadow, padding: 16 }}>
              <div className="text-sm text-slate-600">Employees</div>
              <div className="text-2xl font-bold text-slate-800 mt-1">{employees.length}</div>
            </div>

            <div style={{ background: THEME.cardBg, border: `1px solid ${THEME.cardBorder}`, borderRadius: THEME.cardRadius, boxShadow: THEME.glassShadow, padding: 16 }}>
              <div className="text-sm text-slate-600">Average Score</div>
              <div className="text-2xl font-bold text-slate-800 mt-1">{avgPerf}</div>
            </div>

            <div style={{ background: THEME.cardBg, border: `1px solid ${THEME.cardBorder}`, borderRadius: THEME.cardRadius, boxShadow: THEME.glassShadow, padding: 16 }}>
              <div className="text-sm text-slate-600">Payroll</div>
              <div className="text-2xl font-bold text-slate-800 mt-1">${(totalSalary/1000).toFixed(1)}k</div>
            </div>
          </section>

          {/* Main grid: left = table, right = stats + banner */}
          <section className="grid grid-cols-2 gap-4">
            {/* LEFT: table panel with constrained height and internal scroll */}
            <div
              className="rounded-2xl p-4"
              style={{ background: THEME.cardBg, border: `1px solid ${THEME.cardBorder}`, boxShadow: THEME.glassShadow }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-800">Employee Directory</h2>
              </div>

              {/* Make the table scrollable so it won't push other content */}
              <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 250px)" }}>
                <EmployeeTable employees={employees} onEdit={onEdit} onDelete={onDelete} />
              </div>
            </div>

            {/* RIGHT: stacked stats + single banner. Use sticky to avoid overlap when left scrolls */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "sticky", top: 24 }}>
                <div
  style={{
    background: THEME.cardBg,
    border: `1px solid ${THEME.cardBorder}`,
    borderRadius: THEME.cardRadius,
    boxShadow: THEME.glassShadow,
    padding: "10px 12px",
  }}
>
  <h3 className="font-medium text-slate-700 mb-1 text-sm">Team statistics</h3>

  <div className="grid grid-cols-2 gap-2">
    <MiniCard label="POSSESSION" value="65%" icon={possessionIcon} />
    <MiniCard label="OVERALL PRICE" value="$690.2m" icon={priceIcon} />
    <MiniCard label="TRANSFER BUDGET" value="$240.6m" icon={budgetIcon} />
    <MiniCard label="AVERAGE SCORE" value="7.2" icon={scoreIcon} />
  </div>
</div>


                {/* Only ONE TrainingBanner here */}
                <div style={{ marginBottom: 12 }}>
                  <TrainingBanner />
                </div>

                {/* Optional: second card or other widgets (but not the same banner) */}
                {/* <div style={{ background: THEME.cardBg, ... }}>Another stat/card</div> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
