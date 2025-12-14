import Rea
export default function MiniCard({ label, value, icon }: { label: string; value: string; icon?: string; }) {
  return (
    <div
      className="rounded-lg p-3 flex items-center gap-3"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.60), rgba(255,255,255,0.48))",
        border: `1px solid rgba(255,255,255,0.6)`,
        boxShadow: "0 8px 20px rgba(14,30,37,0.05)",
      }}
    >
      {icon && <img src={icon} alt={label} className="h-9 w-9 p-1 rounded-lg" />}
      <div>
        <div className="text-xs text-slate-600">{label}</div>
        <div className="font-semibold text-lg">{value}</div>
      </div>
    </div>
  );
}
