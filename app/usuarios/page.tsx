import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

const usuarios = [
  { nombre: "Julian Thorne", rol: "Administrador", estado: "Activo" },
  { nombre: "María López", rol: "Vendedor", estado: "Activo" },
  { nombre: "Carlos Ruiz", rol: "Almacén", estado: "Inactivo" },
  { nombre: "Ana Torres", rol: "Vendedor", estado: "Activo" },
];

export default function UsuariosPage() {
  return (
    <AdminLayout title="Usuarios">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm" style={{ color: colors.muted }}>
          {usuarios.length} usuarios registrados
        </p>
        <button
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: colors.accent }}
        >
          + Nuevo usuario
        </button>
      </div>

      <div
        className="overflow-hidden rounded-xl"
        style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ backgroundColor: colors.fieldBg, color: colors.muted }}>
              <th className="px-5 py-3 font-medium">Nombre</th>
              <th className="px-5 py-3 font-medium">Rol</th>
              <th className="px-5 py-3 font-medium">Estado</th>
              <th className="px-5 py-3 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.nombre} style={{ borderTop: `0.5px solid ${colors.border}` }}>
                <td className="px-5 py-3 font-medium" style={{ color: colors.text }}>
                  {u.nombre}
                </td>
                <td className="px-5 py-3" style={{ color: colors.text }}>
                  {u.rol}
                </td>
                <td className="px-5 py-3">
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: u.estado === "Activo" ? colors.successBg : colors.dangerBg,
                      color: u.estado === "Activo" ? colors.success : colors.danger,
                    }}
                  >
                    {u.estado}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="mr-3 text-xs font-medium" style={{ color: colors.accent }}>
                    Editar
                  </button>
                  <button className="text-xs font-medium" style={{ color: colors.danger }}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}