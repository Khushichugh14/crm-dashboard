import React from "react";
import type { Employee } from "../types/employee";
type Theme = any;

export default function EmployeeTable({ employees, onEdit, onDelete, theme }:
  { employees: Employee[]; onEdit: (e: Employee) => void; onDelete: (id: string) => void; theme: Theme; }) {

  return (
    <div className="table-root">
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-slate-600" style={{ borderBottom: "1px solid rgba(14,30,37,0.04)" }}>
            <th className="py-3">#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Team</th>
            <th>Perf</th>
            <th>Salary</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, i) => (
            <tr key={e.id} className="odd:bg-white/10 even:bg-transparent">
              <td className="py-3 text-sm text-slate-700">{i + 1}</td>

              <td className="py-3 flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-white font-medium"
                  style={{
                    background: (e.avatarColor ? undefined : "#94a3b8"),
                    boxShadow: "0 6px 16px rgba(14,30,37,0.06)",
                  }}
                >
                  <div className={`${e.avatarColor ?? "bg-slate-400"} h-9 w-9 rounded-full flex items-center justify-center text-white font-medium`}>
                    {e.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                </div>

                <div>
                  <div className="font-medium text-slate-800">{e.name}</div>
                  <div className="text-xs text-slate-500">{e.status}</div>
                </div>
              </td>

              <td className="py-3 text-sm text-slate-700">{e.role}</td>
              <td className="py-3 text-sm text-slate-700">{e.team}</td>
              <td className="py-3 text-sm">
                <div style={{
                  width: 120,
                  height: 8,
                  background: "rgba(255,255,255,0.45)",
                  borderRadius: 999,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.35)"
                }}>
                  <div style={{
                    width: `${(e.performance / 10) * 100}%`,
                    height: "100%",
                    background: "linear-gradient(90deg,#06b6d4,#06b6a4)",
                    borderRadius: 999
                  }} />
                </div>
              </td>

              <td className="py-3 text-sm text-slate-700">${e.salary.toLocaleString()}</td>
              <td className="py-3 text-right">
                <div className="inline-flex gap-2">
                  <button onClick={() => onEdit(e)} className="px-3 py-1 rounded-lg bg-white/20">Edit</button>
                  <button onClick={() => onDelete(e.id)} className="px-3 py-1 rounded-lg" style={{ background: "rgba(255,0,64,0.06)", color: "#9f1239" }}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {employees.length === 0 && <div className="p-4 text-sm text-slate-600">No employees found.</div>}
    </div>
  );
}
