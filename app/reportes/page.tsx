import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

const resumen = [
  { label: "Ingresos del mes", value: "$18,240" },
  { label: "Pedidos completados", value: "312" },
  { label: "Crecimiento", value: "+20%" },
];

export default function ReportesPage() {
  return (
    <AdminLayout title="Reportes">
      <div className="grid grid-cols-3 gap-4">
        {resumen.map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-4"
            style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
          >
            <p className="text-xs" style={{ color: colors.muted }}>
              {item.label}
            </p>
            <p className="mt-1 text-xl font-semibold" style={{ color: colors.text }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex flex-col items-center gap-6 rounded-xl p-6 md:flex-row"
        style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
      >
        <div className="flex-1">
          <h2 className="mb-1 text-sm font-semibold" style={{ color: colors.text }}>
            Ventas de los últimos 6 meses
          </h2>
          <p className="mb-4 text-xs" style={{ color: colors.muted }}>
            Comparado con el periodo anterior
          </p>
          <div className="flex h-32 items-end gap-2">
            {[40, 55, 45, 70, 60, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md"
                style={{ height: `${h}%`, backgroundColor: i === 5 ? colors.accent : colors.accentSoft }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full text-lg font-semibold"
            style={{ border: `6px solid ${colors.accent}`, color: colors.accent }}
          >
            +20%
          </div>
          <p className="mt-2 text-xs" style={{ color: colors.muted }}>
            vs. mes anterior
          </p>
        </div>
      </div>

      <button
        className="mt-6 rounded-lg px-4 py-2 text-sm font-medium text-white"
        style={{ backgroundColor: colors.accent }}
      >
        Exportar reporte
      </button>
    </AdminLayout>
  );
}