import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

const pedidos = [
  { id: "#1042", cliente: "María López", fecha: "12 jul 2026", total: "$120.00", estado: "Completado" },
  { id: "#1041", cliente: "Carlos Ruiz", fecha: "12 jul 2026", total: "$85.50", estado: "Pendiente" },
  { id: "#1040", cliente: "Ana Torres", fecha: "11 jul 2026", total: "$230.00", estado: "Completado" },
  { id: "#1039", cliente: "Luis Gómez", fecha: "11 jul 2026", total: "$45.00", estado: "Cancelado" },
  { id: "#1038", cliente: "Sofía Ramos", fecha: "10 jul 2026", total: "$310.00", estado: "En camino" },
];

const statusStyles: Record<string, { bg: string; text: string }> = {
  Completado: { bg: colors.successBg, text: colors.success },
  Pendiente: { bg: colors.warningBg, text: colors.warning },
  Cancelado: { bg: colors.dangerBg, text: colors.danger },
  "En camino": { bg: colors.accentSoft, text: colors.accent },
};

export default function PedidosPage() {
  return (
    <AdminLayout title="Pedidos">
      <div
        className="overflow-hidden rounded-xl"
        style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ backgroundColor: colors.fieldBg, color: colors.muted }}>
              <th className="px-5 py-3 font-medium">Pedido</th>
              <th className="px-5 py-3 font-medium">Cliente</th>
              <th className="px-5 py-3 font-medium">Fecha</th>
              <th className="px-5 py-3 font-medium">Total</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id} style={{ borderTop: `0.5px solid ${colors.border}` }}>
                <td className="px-5 py-3 font-medium" style={{ color: colors.text }}>
                  {pedido.id}
                </td>
                <td className="px-5 py-3" style={{ color: colors.text }}>
                  {pedido.cliente}
                </td>
                <td className="px-5 py-3" style={{ color: colors.muted }}>
                  {pedido.fecha}
                </td>
                <td className="px-5 py-3" style={{ color: colors.text }}>
                  {pedido.total}
                </td>
                <td className="px-5 py-3">
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: statusStyles[pedido.estado].bg,
                      color: statusStyles[pedido.estado].text,
                    }}
                  >
                    {pedido.estado}
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