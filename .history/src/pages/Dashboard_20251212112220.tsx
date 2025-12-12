// src/pages/Dashboard.tsx
import React, { useMemo, useState, type JSX } from "react";
import Sidebar from "../components/Sidebar";
import MiniCard from "../components/MiniCard";
import EmployeeTable from "../components/EmployeeTable";
import { sampleEmployees } from "../data/sampleEmployees";
import possessionIcon from "../assets/icons/possession.png";
import priceIcon from "../assets/icons/price.png";
import budgetIcon from "../assets/icons/budget.png";
import scoreIcon from "../assets/icons/score.png";


const THEME = {
  cardBg: "linear-gradient(180deg, rgba(255,255,255,0.66), rgba(255,255,255,0.52))",
  cardBorder: "rgba(255,255,255,0.65)",
  glassShadow: "0 12px 30px rgba(14,30,37,0.10)",
  cardRadius: 14,
};

export default function Dashboard(): JSX.Element {
  const [employees, setEmployees] = useState(sampleEmployees);
  const totalSalary = useMemo(() => employees.reduce((s, e) => s + e.salary, 0), [employees]);
  const avgPerf = useMemo(
    () => (employees.reduce((s, e) => s + e.performance, 0) / Math.max(1, employees.length)).toFixed(1),
    [employees]
  );


  function onEdit(e: any) {

    // console.log("edit", e);
  }
  function onDelete(id: string) {

    // setEmployees(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-emerald-50 to-violet-50 font-sans">
      <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3">
          <Sidebar />
        </aside>

        {/* Main area */}
        <main className="col-span-9">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <div className="text-slate-500 text-sm">
                Welcome back, <span className="font-semibold">Andrea</span> 👋
              </div>
              <h1 className="text-3xl font-extrabold text-slate-800">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-700">Andrea Pirlo</div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-400 text-white flex items-center justify-center">
                AP
              </div>
            </div>
          </header>


          <section className="grid grid-cols-3 gap-4 my-6">
            <div
              style={{
                background: THEME.cardBg,
                border: `1px solid ${THEME.cardBorder}`,
                borderRadius: THEME.cardRadius,
                boxShadow: THEME.glassShadow,
                padding: 14,
              }}
            >
              <div className="text-sm text-slate-600">Employees</div>
              <div className="text-2xl font-bold text-slate-800 mt-1">{employees.length}</div>
              <div className="text-xs text-slate-500 mt-1">Active</div>
            </div>

            <div
              style={{
                background: THEME.cardBg,
                border: `1px solid ${THEME.cardBorder}`,
                borderRadius: THEME.cardRadius,
                boxShadow: THEME.glassShadow,
                padding: 14,
              }}
            >
              <div className="text-sm text-slate-600">Average Score</div>
              <div className="text-2xl font-bold text-slate-800 mt-1">{avgPerf}</div>
              <div className="text-xs text-slate-500 mt-1">Performance (0-10)</div>
            </div>

            <div
              style={{
                background: THEME.cardBg,
                border: `1px solid ${THEME.cardBorder}`,
                borderRadius: THEME.cardRadius,
                boxShadow: THEME.glassShadow,
                padding: 14,
              }}
            >
              <div className="text-sm text-slate-600">Payroll</div>
              <div className="text-2xl font-bold text-slate-800 mt-1">${(totalSalary / 1000).toFixed(1)}k</div>
              <div className="text-xs text-slate-500 mt-1">Monthly rollup</div>
            </div>
          </section>

          {/* Main content columns: Left = Employee Directory, Right = Team stats + Banner */}
          <section className="grid grid-cols-2 gap-4">
            {/* LEFT: employee directory (scrollable) */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: THEME.cardBg,
                border: `1px solid ${THEME.cardBorder}`,
                boxShadow: THEME.glassShadow,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-800">Employee Directory</h2>
              </div>

              <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 220px)" }}>
                <EmployeeTable employees={employees} onEdit={onEdit} onDelete={onDelete} />
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "sticky", top: 24 }}>
                <div
                  style={{
                    background: THEME.cardBg,
                    border: `1px solid ${THEME.cardBorder}`,
                    borderRadius: THEME.cardRadius,
                    boxShadow: THEME.glassShadow,
                    padding: "10px 12px",
                    marginBottom: 12,
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

                <div style={{ maxHeight: 410, overflow: "hidden" }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg,#02897a,#0fb6e6)",
                      borderRadius: 14,
                      padding: "12px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      boxShadow: "0 12px 28px rgba(2,137,122,0.18)",
                      minHeight: 130,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div className="text-xs opacity-90">DON'T FORGET</div>
                      <h3 className="text-xl font-bold leading-tight">Setup training for next week</h3>
                      <p className="mt-1 text-xs opacity-90">Schedule team on-boarding and growth workshops.</p>
                      <button
                        className="mt-3 px-4 py-2 rounded-full text-white"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                      >
                        Go to training center
                      </button>
                    </div>

                    <div style={{ width: 92, flexShrink: 0 }}>

                      <div
                        style={{
                          width: 92,
                          height: 92,
                          borderRadius: 12,
                          background: "rgba(255,255,255,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.85)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#0f172a",
                            fontWeight: 700,
                            fontSize: 28,
                          }}
                        >
                          T
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ height: 12 }} />

                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
