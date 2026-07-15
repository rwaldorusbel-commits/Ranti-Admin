import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

export default function PerfilPage() {
  return (
    <AdminLayout title="Perfil">
      <div
        className="mx-auto max-w-lg rounded-xl p-6"
        style={{ backgroundColor: colors.card, border: `0.5px solid ${colors.border}` }}
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <div
            className="mb-3 flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold"
            style={{ backgroundColor: colors.accentSoft, color: colors.accent }}
          >
            JT
          </div>
          <p className="text-base font-semibold" style={{ color: colors.text }}>
            Julian Thorne
          </p>
          <p className="text-xs" style={{ color: colors.muted }}>
            Administrador
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.muted }}>
              Nombre completo
            </label>
            <input
              defaultValue="Julian Thorne"
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.muted }}>
              Correo electrónico
            </label>
            <input
              defaultValue="julian.thorne@correo.com"
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.muted }}>
              Teléfono
            </label>
            <input
              defaultValue="+51 987 654 321"
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>

          <button
            className="h-11 w-full rounded-lg text-sm font-medium text-white"
            style={{ backgroundColor: colors.accent }}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}