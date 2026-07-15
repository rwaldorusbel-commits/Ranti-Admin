"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <h1>Registro</h1>
        <p>Página de registro.</p>

        <Link href="/login">
          Ir al Login
        </Link>
      </div>
    </main>
  );
}