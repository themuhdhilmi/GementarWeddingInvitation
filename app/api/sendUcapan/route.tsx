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
        jumlahKehadiran: body.jumlahKehadiran,
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

export async function GET(request: NextRequest, response: NextResponse) {
  try {

    const ucapan = await prisma.submission.findMany()

    const totalJumlahKehadiran = await prisma.submission.aggregate({
      _sum: {
        jumlahKehadiran: true
      },
      where: {
        isHadir: true
      }
    });

    const totalJumlahTidakHadiran = await prisma.submission.aggregate({
      _sum: {
        jumlahKehadiran: true
      },
      where: {
        isHadir: false
      }
    });

    return NextResponse.json(
      {
        ucapan,
        totalJumlahKehadiran,
        totalJumlahTidakHadiran
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

