import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

const stats = [
  { label: "Ventas totales", value: "$12,480", change: "+8.2% este mes" },
  { label: "Pedidos", value: "128", change: "+3.1% este mes" },
  { label: "Productos", value: "64", change: "+1 este mes" },
  { label: "Usuarios", value: "342", change: "+12 este mes" },
];

const recentOrders = [
  { id: "#1042", cliente: "María López", total: "$120.00", estado: "Completado" },
  { id: "#1041", cliente: "Carlos Ruiz", total: "$85.50", estado: "Pendiente" },
  { id: "#1040", cliente: "Ana Torres", total: "$230.00", estado: "Completado" },
  { id: "#1039", cliente: "Luis Gómez", total: "$45.00", estado: "Cancelado" },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Completado: { bg: colors.successBg, text: colors.success },
  Pendiente: { bg: colors.warningBg, text: colors.warning },
  Cancelado: { bg: colors.dangerBg, text: colors.danger },
};

export default function DashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-4"
            style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
          >
            <p className="text-xs" style={{ color: colors.muted }}>
              {stat.label}
            </p>
            <p className="mt-1 text-xl font-semibold" style={{ color: colors.text }}>
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium" style={{ color: colors.success }}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-6 rounded-xl p-5"
        style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
      >
        <h2 className="mb-4 text-sm font-semibold" style={{ color: colors.text }}>
          Pedidos recientes
        </h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ color: colors.muted }}>
              <th className="pb-2 font-medium">ID</th>
              <th className="pb-2 font-medium">Cliente</th>
              <th className="pb-2 font-medium">Total</th>
              <th className="pb-2 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} style={{ borderTop: `0.5px solid ${colors.border}` }}>
                <td className="py-3" style={{ color: colors.text }}>
                  {order.id}
                </td>
                <td className="py-3" style={{ color: colors.text }}>
                  {order.cliente}
                </td>
                <td className="py-3" style={{ color: colors.text }}>
                  {order.total}
                </td>
                <td className="py-3">
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: statusStyles[order.estado].bg,
                      color: statusStyles[order.estado].text,
                    }}
                  >
                    {order.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}