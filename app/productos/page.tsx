import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

const productos = [
  { nombre: "Café molido 500g", categoria: "Bebidas", precio: "$8.50", stock: 42 },
  { nombre: "Pan integral", categoria: "Panadería", precio: "$3.20", stock: 15 },
  { nombre: "Leche entera 1L", categoria: "Lácteos", precio: "$1.80", stock: 60 },
  { nombre: "Papas fritas 150g", categoria: "Snacks", precio: "$2.10", stock: 5 },
  { nombre: "Detergente 1L", categoria: "Limpieza", precio: "$4.90", stock: 30 },
  { nombre: "Yogurt natural", categoria: "Lácteos", precio: "$1.50", stock: 22 },
];

export default function ProductosPage() {
  return (
    <AdminLayout title="Productos">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm" style={{ color: colors.muted }}>
          {productos.length} productos en catálogo
        </p>
        <button
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: colors.accent }}
        >
          + Nuevo producto
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {productos.map((p) => (
          <div
            key={p.nombre}
            className="rounded-xl p-4"
            style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
          >
            <div className="mb-3 h-24 w-full rounded-lg" style={{ backgroundColor: colors.fieldBg }} />
            <p className="text-sm font-semibold" style={{ color: colors.text }}>
              {p.nombre}
            </p>
            <p className="mt-0.5 text-xs" style={{ color: colors.muted }}>
              {p.categoria}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ color: colors.accent }}>
                {p.precio}
              </span>
              <span className="text-xs" style={{ color: p.stock <= 10 ? colors.danger : colors.muted }}>
                Stock: {p.stock}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}