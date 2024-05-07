"use client";
import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import Countdown from "react-countdown";

import {
  Alegreya_Sans_SC,
  Noto_Naskh_Arabic,
  Kaushan_Script,
  Satisfy,
  Shantell_Sans,
  Caveat_Brush,
} from "next/font/google";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });
const kaushan_Script = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
const shantell_Sans = Shantell_Sans({ subsets: ["latin"], weight: ["400"] });
const caveat_Brush = Caveat_Brush({ subsets: ["latin"], weight: ["400"] });
const Panel4 = (props: any) => {
  const targetDate = new Date("July 20, 2024").getTime();
  const millisecondsRemaining = targetDate - Date.now();

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <div suppressHydrationWarning={true} className="grid grid-flow-col gap-5 text-center auto-cols-max mt-14 px-5">
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20   text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            <span suppressHydrationWarning={true}>Hari</span>
          </div>
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20  text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            Jam
          </div>
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20  text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            Minit
          </div>
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20  text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            Saat
          </div>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div suppressHydrationWarning={true} className="grid grid-flow-col gap-5 text-center auto-cols-max mt-14 px-5">
          <div suppressHydrationWarning={true} className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20   text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>{days}</span>
            </span>
            <span suppressHydrationWarning={true}>Hari</span>
          </div>
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20  text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>{hours}</span>
            </span>
            Jam
          </div>
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20  text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>{minutes}</span>
            </span>
            Minit
          </div>
          <div className="flex flex-col p-2 text-white bg-[#697960] rounded-lg min-w-20  text-neutral-content">
            <span suppressHydrationWarning={true} className="countdown font-mono text-5xl">
              <span suppressHydrationWarning={true}>{seconds}</span>
            </span>
            Saat
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 w-full content-center relative">
      <Image
        className="absolute inset-x-0 top-0 "
        src="/images/shah_top_4.png"
        alt="alt"
        width={500}
        height={500}
      />

      <Image
        className="absolute inset-x-0 bottom-0"
        src="/images/shah_4_bottom.png"
        alt="alt"
        width={500}
        height={500}
      />

      <p
        className={
          "text-center pt-20  text-2xl pb-5 " + shantell_Sans.className
        }
      >
        ATUCARA MAJLIS
      </p>

      <p
        className={
          "text-center font-bold   text-xl  " + shantell_Sans.className
        }
      >
        11.00 AM - Ketibaan Tetamu
      </p>
      <p
        className={
          "text-center  font-bold  text-xl  " + shantell_Sans.className
        }
      >
        12.30 PM - Ketibaan Pengantin
      </p>
      <p
        className={
          "text-center  font-bold  text-xl  " + shantell_Sans.className
        }
      >
        4.00 PM - Majlis Bersurai
      </p>

      <p className={"text-center pt-6  text-3xl pb-5 " + satisfy.className}>
        RVSP
      </p>

      <div className="flex flex-row justify-center">
        <button
          className={
            "bg-[#4f666d] text-white p-3 rounded-xl " + caveat_Brush.className
          }
        >
          SAHKAN KEDATANGAN ANDA
        </button>
      </div>

      <div className={"flex flex-row justify-center " + caveat_Brush.className}>
        <Countdown
          date={Date.now() + millisecondsRemaining}
          renderer={renderer}
        />
      </div>

      <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
        <MdKeyboardDoubleArrowDown />
      </div>
    </div>
  );
};

export default Panel4;
