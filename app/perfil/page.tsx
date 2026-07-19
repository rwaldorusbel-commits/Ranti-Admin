"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { colors } from "@/lib/colors";

interface Perfil {
  id: string;
  name: string | null;
  email: string;
  telefono: string | null;
  rol: string;
}

export default function PerfilPage() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("/api/perfil")
      .then((res) => res.json())
      .then((data) => {
        setPerfil(data);
        setNombre(data.name || "");
        setTelefono(data.telefono || "");
      })
      .finally(() => setCargando(false));
  }, []);

  const handleGuardar = async () => {
    setGuardando(true);
    setMensaje("");
    try {
      const res = await fetch("/api/perfil", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nombre, telefono }),
      });
      if (!res.ok) throw new Error();
      setMensaje("Cambios guardados correctamente");
    } catch {
      setMensaje("Error al guardar los cambios");
    } finally {
      setGuardando(false);
    }
  };

  if (cargando) {
    return (
      <AdminLayout title="Perfil">
        <p style={{ color: colors.muted }}>Cargando...</p>
      </AdminLayout>
    );
  }

  const iniciales = (perfil?.name || perfil?.email || "?")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

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
            {iniciales}
          </div>
          <p className="text-base font-semibold" style={{ color: colors.text }}>
            {perfil?.name || "Sin nombre"}
          </p>
          <p className="text-xs" style={{ color: colors.muted }}>
            {perfil?.rol}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.muted }}>
              Nombre completo
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.muted }}>
              Correo electrónico
            </label>
            <input
              value={perfil?.email || ""}
              disabled
              className="h-11 w-full rounded-lg px-3 text-sm outline-none opacity-60"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.muted }}>
              Teléfono
            </label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.fieldBg, color: colors.text }}
            />
          </div>

          {mensaje && (
            <p className="text-xs" style={{ color: mensaje.includes("Error") ? colors.danger : colors.accent }}>
              {mensaje}
            </p>
          )}

          <button
            onClick={handleGuardar}
            disabled={guardando}
            className="h-11 w-full rounded-lg text-sm font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: colors.accent }}
          >
            {guardando ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}