import React, { useMemo, useState } from "react";

import { sampleEmployees } from "../data/sampleEmployees";
import type { Employee } from "../types/employee";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import EmployeeTable from "../components/EmployeeTable";

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
    <div className="min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <Sidebar />
        </aside>

        <main className="col-span-9">
          <Header query={query} setQuery={setQuery} />
          <section className="grid grid-cols-3 gap-4 my-6">
            <StatCard title="Employees" value={String(employees.length)} subtitle="Active" />
            <StatCard title="Average Score" value={avgPerf} subtitle="Performance (0-10)" />
            <StatCard title="Payroll" value={`$${(totalSalary/1000).toFixed(1)}k`} subtitle="Monthly rollup" />
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Employee Directory</h2>
              </div>
              <EmployeeTable employees={filtered} onEdit={setEditing} onDelete={onDelete} />
            </div>

            <div className="space-y-4">
              <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/30">
                <h3 className="font-medium text-slate-700 mb-2">Team statistics</h3>
                <div className="grid grid-cols-2 gap-3">
                  <MiniCard label="Open positions" value="6" />
                  <MiniCard label="Hiring budget" value="$240.6k" />
                  <MiniCard label="Avg tenure" value="3.2 yrs" />
                  <MiniCard label="Remote %" value="65%" />
                </div>
              </div>

              <div className="bg-gradient-to-tr from-emerald-600 to-teal-500 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-xl">Setup training for next week</h3>
                <p className="mt-2 text-sm opacity-90">Schedule team on-boarding and growth workshops.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {editing && <EditModal employee={editing} onClose={() => setEditing(null)} onSave={onSave} />}
    </div>
  );
}
