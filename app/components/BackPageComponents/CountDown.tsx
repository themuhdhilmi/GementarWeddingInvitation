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
const CountDown = (props: any) => {
  const targetDate = new Date("July 20, 2024").getTime();
  const millisecondsRemaining = targetDate - Date.now();

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <div suppressHydrationWarning={true} className="grid grid-flow-col gap-5 text-center auto-cols-max text-xs ">
          {/* <div className="flex flex-col p-2  rounded-lg min-w-20   ">
            <span suppressHydrationWarning={true} className="countdown font-mono text-2xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            <span suppressHydrationWarning={true}>Hari</span>
          </div>
          <div className="flex flex-col p-2 text-white  rounded-lg min-w-20  ">
            <span suppressHydrationWarning={true} className="countdown font-mono text-2xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            Jam
          </div>
          <div className="flex flex-col p-2 text-white  rounded-lg min-w-20  ">
            <span suppressHydrationWarning={true} className="countdown font-mono text-2xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            Minit
          </div>
          <div className="flex flex-col p-2  rounded-lg min-w-20  ">
            <span suppressHydrationWarning={true} className="countdown font-mono text-2xl">
              <span suppressHydrationWarning={true}>0</span>
            </span>
            Saat
          </div> */}
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div suppressHydrationWarning={true} className="flex flex-row">
          <div suppressHydrationWarning={true} className="flex flex-col justify-center text-center p-2 rounded-lg min-w-20  ">
            <span suppressHydrationWarning={true} className="countdown  text-2xl">
              <span suppressHydrationWarning={true}>{days}</span>
            </span>
            <span suppressHydrationWarning={true}>Hari</span>
          </div>
          <div className="flex flex-col justify-center text-center  p-2  rounded-lg min-w-20` ">
            <span suppressHydrationWarning={true} className="countdown  text-2xl">
              <span suppressHydrationWarning={true}>{hours}</span>
            </span>
            Jam
          </div>
          <div className="flex flex-col justify-center text-center  p-2  rounded-lg min-w-20  ">
            <span suppressHydrationWarning={true} className="countdown  text-2xl">
              <span suppressHydrationWarning={true}>{minutes}</span>
            </span>
            Minit
          </div>
          <div className="flex flex-col justify-center text-center  p-2  rounded-lg min-w-20  ">
            <span suppressHydrationWarning={true} className="countdown  text-2xl">
              <span suppressHydrationWarning={true}>{seconds}</span>
            </span>
            Saat
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className={"flex flex-row justify-center "}>
        <Countdown
          date={Date.now() + millisecondsRemaining}
          renderer={renderer}
        />
      </div>

    </div>
  );
};

export default CountDown;