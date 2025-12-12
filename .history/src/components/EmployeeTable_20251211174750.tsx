import React from "react";
import type { Employee } from "../types/employee";

export default function EmployeeTable({ employees, onEdit, onDelete }:{ employees: Employee[]; onEdit: (e: Employee)=>void; onDelete: (id:string)=>void; }) {
  return (
    <div className="overflow-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm text-slate-600 border-b border-white/30">
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
                <div className={`h-9 w-9 rounded-full flex items-center justify-center text-white font-medium ${e.avatarColor ?? "bg-slate-400"}`}>
                  {e.name.split(" ").map(n=>n[0]).slice(0,2).join("")}
                </div>
                <div>
                  <div className="font-medium text-slate-800">{e.name}</div>
                  <div className="text-xs text-slate-500">{e.status}</div>
                </div>
              </td>
              <td className="py-3 text-sm text-slate-700">{e.role}</td>
              <td className="py-3 text-sm text-slate-700">{e.team}</td>
              <td className="py-3 text-sm">
                <div className="w-24 bg-white/30 rounded-full h-2 overflow-hidden">
                  <div style={{ width: `${(e.performance / 10) * 100}%` }} className="h-2 rounded-full bg-emerald-500" />
                </div>
              </td>
              <td className="py-3 text-sm text-slate-700">${e.salary.toLocaleString()}</td>
              <td className="py-3 text-right">
                <div className="inline-flex gap-2">
                  <button onClick={()=>onEdit(e)} className="px-3 py-1 rounded-lg bg-white/20">Edit</button>
                  <button onClick={()=>onDelete(e.id)} className="px-3 py-1 rounded-lg bg-rose-500/20">Delete</button>
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
