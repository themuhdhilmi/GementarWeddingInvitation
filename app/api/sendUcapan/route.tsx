import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();

  const sendData = await prisma.ucapan.create({
    data: {
      name: body.name,
      text: body.text,
    },
  });

  return NextResponse.json(
    {
      success: "Telah Dihantar",
    },
    {
      status: 200,
    }
  );
}
