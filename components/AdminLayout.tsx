"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/colors";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/categorias", label: "Categorías" },
  { href: "/productos", label: "Productos" },
  { href: "/pedidos", label: "Pedidos" },
  { href: "/reportes", label: "Reportes" },
  { href: "/usuarios", label: "Usuarios" },
  { href: "/perfil", label: "Perfil" },
  { href: "/Ajustes", label: "Configuración" },
];

export default function AdminLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.bg }}>
      {/* Sidebar */}
      <aside
        className="hidden w-60 shrink-0 flex-col p-5 md:flex"
        style={{ backgroundColor: "#FFFFFF", borderRight: `0.5px solid ${colors.border}` }}
      >
        <div className="mb-8 flex items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: colors.accent }}
          >
            A
          </div>
          <span className="text-sm font-semibold" style={{ color: colors.text }}>
            Admin Panel
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  backgroundColor: active ? colors.accentSoft : "transparent",
                  color: active ? colors.accent : colors.muted,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="mt-6 rounded-lg px-3 py-2 text-sm font-medium"
          style={{ color: colors.muted }}
        >
          Cerrar sesión
        </Link>
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col">
        <header
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: `0.5px solid ${colors.border}` }}
        >
          <h1 className="text-lg font-semibold" style={{ color: colors.text }}>
            {title}
          </h1>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold"
            style={{ backgroundColor: colors.accentSoft, color: colors.accent }}
          >
            JT
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}