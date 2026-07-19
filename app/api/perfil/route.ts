import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const usuario = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      name: true,
      email: true,
      telefono: true,
      rol: true,
    },
  });

  return NextResponse.json(usuario);
}

export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const datos = await request.json();

  const actualizado = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      name: datos.name,
      telefono: datos.telefono,
    },
    select: {
      id: true,
      name: true,
      email: true,
      telefono: true,
      rol: true,
    },
  });

  return NextResponse.json(actualizado);
}