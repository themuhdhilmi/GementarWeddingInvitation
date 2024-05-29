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

export async function GET(request: NextRequest, response: NextResponse) {
  try {

    const ucapan = await prisma.submission.findMany()

    const totalJumlahKehadiranDewasa = await prisma.submission.aggregate({
      _sum: {
        kehadiranDewasa: true
      },
      where: {
        isHadir: true
      }
    });

    const totalJumlahKehadiranKanakKanak = await prisma.submission.aggregate({
      _sum: {
        kehadiranKanak: true
      },
      where: {
        isHadir: true
      }
    });

    const totalJumlahTidakHadiranDewasa = await prisma.submission.aggregate({
      _sum: {
        kehadiranDewasa: true
      },
      where: {
        isHadir: false
      }
    });

    const totalJumlahTidakHadiranKanakKanak = await prisma.submission.aggregate({
      _sum: {
        kehadiranKanak: true
      },
      where: {
        isHadir: false
      }
    });


    const totalJumlahKehadiranTemp = (totalJumlahKehadiranDewasa._sum.kehadiranDewasa ?? 0)  + (totalJumlahKehadiranKanakKanak._sum.kehadiranKanak ?? 0)
    const totalJumlahTidakHadiranTemp = (totalJumlahTidakHadiranDewasa._sum.kehadiranDewasa ?? 0)  + (totalJumlahTidakHadiranKanakKanak._sum.kehadiranKanak ?? 0)

    // {data?.totalJumlahTidakHadiran?._sum?.jumlahKehadiran}

    const totalJumlahKehadiran = {
      _sum : {
        jumlahKehadiran : totalJumlahKehadiranTemp
      }
    }

    const totalJumlahTidakHadiran = {
      _sum : {
        jumlahKehadiran : totalJumlahTidakHadiranTemp
      }
    }

    return NextResponse.json(
      {
        ucapan,
        totalJumlahKehadiran,
        totalJumlahTidakHadiran,
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

