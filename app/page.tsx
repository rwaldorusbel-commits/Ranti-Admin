export default function Home() {
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
            Bienvenido de nuevo
          </h1>
          <p className="mt-1 text-sm" style={{ color: "#8A8078" }}>
            Inicia sesión para continuar
          </p>
        </div>

        <form className="space-y-4">
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
              className="h-11 w-full rounded-lg px-3 text-sm outline-none"
              style={{
                border: "1px solid #E4DCCB",
                backgroundColor: "#FBF9F5",
                color: "#2B2420",
              }}
            />
          </div>

          {/* Olvidaste contraseña */}
          <div className="text-right">
            <a
              href="#"
              className="text-xs font-medium"
              style={{ color: "#DD7A45" }}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón principal */}
          <button
            type="submit"
            className="h-11 w-full rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#DD7A45" }}
          >
            Iniciar sesión
          </button>
        </form>

        {/* Registro */}
        <p className="mt-6 text-center text-xs" style={{ color: "#8A8078" }}>
          ¿No tienes cuenta?{" "}
          <a href="#" className="font-medium" style={{ color: "#DD7A45" }}>
            Regístrate
          </a>
        </p>
      </div>
    </main>
  );
}