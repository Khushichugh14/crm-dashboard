import { useState } from "react";
import type { Employee } from "../types/employee";
type Theme = unknown;

export default function EditModal({ employee, onClose, onSave }:
  { employee: Employee; onClose: () => void; onSave: (e: Employee) => void; theme?: Theme; }) {
  const [form, setForm] = useState<Employee>({ ...employee });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: "rgba(3,7,18,0.35)", backdropFilter: "blur(2px)" }} onClick={onClose} />
      <div className="relative" style={{
        width: 560,
        borderRadius: 12,
        padding: 20,
        background: "linear-gradient(180deg, #ffffff, #fbffff)",
        boxShadow: "0 20px 40px rgba(7,18,30,0.14)",
        border: "1px solid rgba(0,0,0,0.04)"
      }}>
        <h3 className="text-lg font-semibold mb-4">Edit employee</h3>

        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm text-slate-700">Name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>

          <label className="text-sm text-slate-700">Role
            <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>

          <label className="text-sm text-slate-700">Team
            <input value={form.team} onChange={(e) => setForm({ ...form, team: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>

          <label className="text-sm text-slate-700">Salary
            <input type="number" value={form.salary} onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-white/50">Cancel</button>
          <button onClick={() => onSave(form)} className="px-4 py-2 rounded-lg" style={{ background: "#059669", color: "white" }}>Save</button>
        </div>
      </div>
    </div>
  );
}
