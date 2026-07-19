"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ocurrió un error.");
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("Error de conexión. Intenta de nuevo.");
      setLoading(false);
    }
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: "#F4EFE6" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-8"
        style={{ border: "0.5px solid #E4DCCB" }}
      >
        {/* Logo / icono */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div
            className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ backgroundColor: "#DD7A45" }}
          >
            <span className="text-lg font-semibold text-white">A</span>
          </div>
          <h1 className="text-lg font-semibold" style={{ color: "#2B2420" }}>
            Crea tu cuenta
          </h1>
          <p className="mt-1 text-sm" style={{ color: "#8A8078" }}>
            Regístrate para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium"
              style={{ color: "#8A8078" }}
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{
                border: "1px solid #E4DCCB",
                backgroundColor: "#FBF9F5",
                color: "#2B2420",
              }}
            />
          </div>

          {/* Correo */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium"
              style={{ color: "#8A8078" }}
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="nombre@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{
                border: "1px solid #E4DCCB",
                backgroundColor: "#FBF9F5",
                color: "#2B2420",
              }}
            />
          </div>

          {/* Contraseña */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-medium"
              style={{ color: "#8A8078" }}
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{
                border: "1px solid #E4DCCB",
                backgroundColor: "#FBF9F5",
                color: "#2B2420",
              }}
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-center text-xs font-medium" style={{ color: "#D64545" }}>
              {error}
            </p>
          )}

          {/* Botón principal */}
          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#DD7A45" }}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        {/* Ir al login */}
        <p className="mt-6 text-center text-xs" style={{ color: "#8A8078" }}>
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-medium" style={{ color: "#DD7A45" }}>
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  );
}