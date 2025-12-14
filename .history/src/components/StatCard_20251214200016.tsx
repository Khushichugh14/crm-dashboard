
export type Theme = typeof THEME;

export default function StatCard({ title, value, subtitle, theme }: { title: string; value: string; subtitle?: string; theme: Theme; }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: theme.cardRadius,
        boxShadow: theme.glassShadow,
      }}
    >
      <div className="text-sm text-slate-600">{title}</div>
      <div className="text-2xl font-bold text-slate-800 mt-1">{value}</div>
      {subtitle && <div className="text-xs text-slate-500 mt-1">{subtitle}</div>}
    </div>
  );
}
