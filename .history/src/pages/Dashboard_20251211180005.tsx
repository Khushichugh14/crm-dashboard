import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import MiniCard from "../components/MiniCard";
import EmployeeTable from "../components/EmployeeTable";
import EditModal from "../components/EditModal";
import { sampleEmployees } from "../data/sampleEmployees";
import type { Employee } from "../types/employee";
import { THEME } from "../theme";



export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>(sampleEmployees);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Employee | null>(null);

  const totalSalary = useMemo(() => employees.reduce((s, e) => s + e.salary, 0), [employees]);
  const avgPerf = useMemo(() => (employees.reduce((s, e) => s + e.performance, 0) / employees.length).toFixed(1), [employees]);

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase()) ||
    e.role.toLowerCase().includes(query.toLowerCase())
  );

  function onSave(emp: Employee) {
    setEmployees(prev => prev.map(p => (p.id === emp.id ? emp : p)));
    setEditing(null);
  }

  function onDelete(id: string) {
    setEmployees(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-emerald-50 to-violet-50 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <Sidebar theme={THEME} />
        </aside>

        <main className="col-span-9">
          <Header query={query} setQuery={setQuery} theme={THEME} />
          <section className="grid grid-cols-3 gap-4 my-6">
            <StatCard title="Employees" value={String(employees.length)} subtitle="Active" theme={THEME} />
            <StatCard title="Average Score" value={avgPerf} subtitle="Performance (0-10)" theme={THEME} />
            <StatCard title="Payroll" value={`$${(totalSalary/1000).toFixed(1)}k`} subtitle="Monthly rollup" theme={THEME} />
          </section>

          <section className="grid grid-cols-2 gap-4">
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
              <div className="overflow-auto">
                <EmployeeTable employees={filtered} onEdit={setEditing} onDelete={onDelete} theme={THEME} />
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="rounded-2xl p-4"
                style={{
                  background: THEME.cardBg,
                  border: `1px solid ${THEME.cardBorder}`,
                  boxShadow: THEME.glassShadow,
                }}
              >
                <h3 className="font-medium text-slate-700 mb-2">Team statistics</h3>
                <div className="grid grid-cols-2 gap-3">
                  <MiniCard label="Open positions" value="6" theme={THEME} />
                  <MiniCard label="Hiring budget" value="$240.6k" theme={THEME} />
                  <MiniCard label="Avg tenure" value="3.2 yrs" theme={THEME} />
                  <MiniCard label="Remote %" value="65%" theme={THEME} />
                </div>
              </div>

              <div
                className="rounded-2xl p-6 text-white"
                style={{
                  background: "linear-gradient(135deg,#02897a,#0fb6e6)",
                  boxShadow: "0 18px 36px rgba(2,137,122,0.14)",
                }}
              >
                <h3 className="font-bold text-xl">Setup training for next week</h3>
                <p className="mt-2 text-sm opacity-90">Schedule team on-boarding and growth workshops.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {editing && <EditModal employee={editing} onClose={() => setEditing(null)} onSave={onSave} theme={THEME} />}
    </div>
  );
}
