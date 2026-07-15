import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

const categorias = [
  { nombre: "Bebidas", productos: 18, estado: "Activo" },
  { nombre: "Panadería", productos: 24, estado: "Activo" },
  { nombre: "Lácteos", productos: 12, estado: "Activo" },
  { nombre: "Snacks", productos: 9, estado: "Inactivo" },
  { nombre: "Limpieza", productos: 15, estado: "Activo" },
];

export default function CategoriasPage() {
  return (
    <AdminLayout title="Categorías">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm" style={{ color: colors.muted }}>
          {categorias.length} categorías registradas
        </p>
        <button
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: colors.accent }}
        >
          + Nueva categoría
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
              <th className="px-5 py-3 font-medium">Productos</th>
              <th className="px-5 py-3 font-medium">Estado</th>
              <th className="px-5 py-3 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat) => (
              <tr key={cat.nombre} style={{ borderTop: `0.5px solid ${colors.border}` }}>
                <td className="px-5 py-3 font-medium" style={{ color: colors.text }}>
                  {cat.nombre}
                </td>
                <td className="px-5 py-3" style={{ color: colors.text }}>
                  {cat.productos}
                </td>
                <td className="px-5 py-3">
                  <span
                    className="rounded-full px-2 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: cat.estado === "Activo" ? colors.successBg : colors.dangerBg,
                      color: cat.estado === "Activo" ? colors.success : colors.danger,
                    }}
                  >
                    {cat.estado}
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