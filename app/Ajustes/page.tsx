import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

export default function ConfiguracionPage() {
  return (
    <AdminLayout title="Configuración">
      <div
        className="mx-auto max-w-lg space-y-6 rounded-xl p-6"
        style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
      >
        <div>
          <h2 className="mb-3 text-sm font-semibold" style={{ color: colors.text }}>
            Datos del negocio
          </h2>
          <div className="space-y-3">
            <input
              defaultValue="Mi Tienda S.A.C."
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
            <input
              defaultValue="contacto@mitienda.com"
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold" style={{ color: colors.text }}>
            Notificaciones
          </h2>
          <div className="space-y-3">
            {["Nuevos pedidos", "Stock bajo", "Reportes semanales"].map((item, i) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-sm" style={{ color: colors.text }}>
                  {item}
                </span>
                <div
                  className="flex h-6 w-11 items-center rounded-full px-0.5"
                  style={{ backgroundColor: i === 1 ? colors.border : colors.accent }}
                >
                  <div
                    className="h-5 w-5 rounded-full bg-white"
                    style={{ marginLeft: i === 1 ? 0 : "auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="h-11 w-full rounded-lg text-sm font-medium text-white"
          style={{ backgroundColor: colors.accent }}
        >
          Guardar configuración
        </button>
      </div>
    </AdminLayout>
  );
}