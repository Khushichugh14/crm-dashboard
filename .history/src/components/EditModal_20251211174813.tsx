import React, { useState } from "react";
import type { Employee } from "../types/employee";

export default function EditModal({ employee, onClose, onSave }:{ employee: Employee; onClose: ()=>void; onSave: (e: Employee)=>void }) {
  const [form, setForm] = useState<Employee>({ ...employee });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[560px]">
        <h3 className="text-lg font-semibold mb-4">Edit employee</h3>

        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm text-slate-700">Name
            <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>

          <label className="text-sm text-slate-700">Role
            <input value={form.role} onChange={(e)=>setForm({...form, role: e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>

          <label className="text-sm text-slate-700">Team
            <input value={form.team} onChange={(e)=>setForm({...form, team: e.target.value})} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>

          <label className="text-sm text-slate-700">Salary
            <input type="number" value={form.salary} onChange={(e)=>setForm({...form, salary: Number(e.target.value)})} className="mt-1 w-full rounded-md border px-3 py-2" />
          </label>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-white/50">Cancel</button>
          <button onClick={()=>onSave(form)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Save</button>
        </div>
      </div>
    </div>
  );
}
