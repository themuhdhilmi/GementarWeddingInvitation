import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();

    const sendData = await prisma.submission.create({
      data: {
        id: body.id,
        name: body.name,
        text: body.text,
        isHadir: body.isHadir,
        type : "LELAKI",
        kehadiranDewasa: body.kehadiranDewasa,
        kehadiranKanak: body.kehadiranKanak
      },
    });

    return NextResponse.json(
      {
        success: "Telah Dihantar",
        sendData,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 400,
      }
    );
  }
}

