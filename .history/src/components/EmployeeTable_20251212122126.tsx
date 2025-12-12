import React, { useState } from "react";
import type { Employee } from "../types/employee";

type Props = {
  employees: Employee[];
  onEdit?: (e: Employee) => void;
  onDelete?: (id: string) => void;
};

export default function EmployeeTable({ employees }: Props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((s) => !s);

  // adjust these if you want different collapse/expand heights
  const collapsedMaxHeight = 340; // px
  const expandedMaxHeight = 720; // px

  return (
    <div>
      {/* inline component-scoped CSS (no external file) */}
      <style>{`
        /* hidden scrollbar when collapsed */
        .no-scrollbar {
          overflow: hidden;
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none;    /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }

        /* visible native scrollbar when expanded */
        .show-scrollbar {
          overflow-y: auto;
          -ms-overflow-style: auto;
          scrollbar-width: auto;
        }
        .show-scrollbar::-webkit-scrollbar { width: 10px; }
        .show-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .show-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.18);
          border-radius: 8px;
          border: 2px solid rgba(255,255,255,0.0);
        }

        /* small helper styles */
        .table-header-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:8px;
          margin-bottom: 8px;
        }
        .view-all-btn {
          cursor: pointer;
          font-size: 0.875rem;
          color: #0ea5a2;
          background: transparent;
          border: none;
          padding: 0;
        }
      `}</style>

      {/* header with View all link */}
      <div className="table-header-row">
        <h3 className="text-lg font-medium" style={{ margin: 0 }}>Employee Directory</h3>
        <button
          className="view-all-btn"
          onClick={toggleExpanded}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "View all"}
        </button>
      </div>

      {/* container: class toggles whether scrollbar hidden/visible */}
      <div
        className={expanded ? "show-scrollbar" : "no-scrollbar"}
        style={{
          maxHeight: expanded ? `${expandedMaxHeight}px` : `${collapsedMaxHeight}px`,
          borderRadius: 12,
          background: "transparent",
        }}
      >
        <table className="table-fixed w-full" style={{ borderCollapse: "collapse" }}>
          <colgroup>
            <col style={{ width: "4%" }} />
            <col style={{ width: "32%" }} />
            <col style={{ width: "18%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "4%" }} />
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

                {/* Avatar + name */}
                <td className="py-4 align-middle">
                  <div className="flex items-start" style={{ gap: 12 }}>
                    <div
                      className="flex-shrink-0 rounded-full h-10 w-10 flex items-center justify-center text-white font-medium"
                      style={{ boxShadow: "0 6px 16px rgba(14,30,37,0.06)" }}
                    >
                      <div className={`${e.avatarColor ?? "bg-slate-400"} h-10 w-10 rounded-full flex items-center justify-center text-white font-medium`}>
                        {e.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                    </div>

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
                  <div style={{ lineHeight: 1.15 }}>{e.role}</div>
                </td>

                {/* Team */}
                <td className="py-4 text-sm text-slate-700 align-middle">
                  <div className="flex items-center" style={{ gap: 8 }}>
                    {e.teamLogo && (
                      <img src={e.teamLogo} alt={e.team} className="h-7 w-7 rounded-md object-contain flex-shrink-0" />
                    )}
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "inline-block", maxWidth: "8rem" }}>{e.team}</span>
                  </div>
                </td>

                {/* Performance */}
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

                {/* Salary */}
                <td className="py-4 text-sm text-slate-700 text-right align-middle">
                  ${e.salary.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {employees.length === 0 && <div className="p-4 text-sm text-slate-600">No employees found.</div>}
      </div>
    </div>
  );
}
