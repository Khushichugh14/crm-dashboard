import React from "react";
import type { Employee } from "../types/employee";

type Props = {
  employees: Employee[];
  onEdit: (e: Employee) => void;
  onDelete: (id: string) => void;
};

export default function EmployeeTable({ employees,  }: Props) {
  return (
    <div className="table-root">
      <table className="table-fixed w-full" style={{ borderCollapse: "collapse" }}>
        {/* colgroup controls column width distribution — edit percentages to tune spacing */}
        <colgroup>
          <col style={{ width: "4%" }} />   {/* # (index) - narrow */}
          <col style={{ width: "32%" }} />  {/* Name (avatar + name) - larger */}
          <col style={{ width: "18%" }} />  {/* Role */}
          <col style={{ width: "12%" }} />  {/* Team */}
          <col style={{ width: "30%" }} />  {/* Perf (bar) - wide enough to show progress) */}
          <col style={{ width: "4%" }} />   {/* Salary - right aligned but narrow percent (adjust if needed) */}
        </colgroup>

        <thead>
          <tr className="text-sm text-slate-600" style={{ borderBottom: "1px solid rgba(14,30,37,0.06)" }}>
            <th className="py-3 text-left">#</th>
            <th className="py-3 text-left">Name</th>
            <th className="py-3 text-left">Role</th>
            <th className="py-3 text-left">Team</th>
            <th className="py-3 text-left">Perf</th>
            <th className="py-3 text-right">Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e, i) => (
            <tr key={e.id} className="align-top odd:bg-white/5 even:bg-transparent">
              <td className="py-4 text-sm text-slate-700 align-middle">{i + 1}</td>

              {/* {Avatar} */}
              <td className="py-4 align-middle">
                <div className="flex items-start gap-3">

                  <div
                    className="flex-shrink-0 rounded-full h-10 w-10 flex items-center justify-center text-white font-medium"
                    style={{
                      boxShadow: "0 6px 16px rgba(14,30,37,0.06)",

                    }}
                  >
                    {/* show initials */}
                    <div className={`${e.avatarColor ?? "bg-slate-400"} h-10 w-10 rounded-full flex items-center justify-center text-white font-medium`}>
                      {e.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  </div>

                  {/* name and subtitle stacked */}
                  <div style={{ minWidth: 0 }}>
                    <div className="font-medium text-slate-800 leading-tight">

                      <div style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {e.name}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{e.status}</div>
                  </div>
                </div>
              </td>

              {/* Role */}
              <td className="py-4 text-sm text-slate-700 align-middle" style={{ whiteSpace: "normal" }}>

                <div style={{ lineHeight: 1.15 }}>
                  {e.role}
                </div>
              </td>

              {/* Team (logo + name) */}
              <td className="py-4 text-sm text-slate-700 align-middle">
                <div className="flex items-center gap-2">
                  {e.teamLogo && (
                    <img src={e.teamLogo} alt={e.team} className="h-7 w-7 rounded-md object-contain flex-shrink-0" />
                  )}
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.team}</span>
                </div>
              </td>


              <td className="py-4 align-middle">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    flex: 1,
                    height: 10,
                    background: "rgba(0,0,0,0.04)",
                    borderRadius: 999,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.35)"
                  }}>
                    <div style={{
                      width: `${(e.performance / 10) * 100}%`,
                      height: "100%",
                      background: "linear-gradient(90deg,#06b6d4,#06b6a4)",
                      borderRadius: 999,
                      transition: "width 300ms ease"
                    }} />
                  </div>


                  <div style={{ minWidth: 36 }} className="text-sm text-slate-700">
                    {e.performance}/10
                  </div>
                </div>
              </td>


              <td className="py-4 text-sm text-slate-700 text-right align-middle">
                ${e.salary.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {employees.length === 0 && <div className="p-4 text-sm text-slate-600">No employees found.</div>}
    </div>
  );
}
