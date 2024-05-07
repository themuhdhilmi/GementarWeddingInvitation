import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

import {
  Alegreya_Sans_SC,
  Noto_Naskh_Arabic,
  Kaushan_Script,
  Chewy,
} from "next/font/google";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const kaushan_Script = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });
const chewy = Chewy({ subsets: ["latin"], weight: ["400"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });
const Panel1 = (props: any) => {
  return (
    <div className="min-h-screen grid grid-cols-1 w-full  content-center relative">
      <Image
        className="absolute inset-x-0 top-0 "
        src="/images/shah_1_top.png"
        alt="alt"
        width={500}
        height={500}
      />

      <Image
        className="absolute inset-x-0 bottom-0"
        src="/images/shah_1_bottom.png"
        alt="alt"
        width={500}
        height={500}
      />

      <div className="pt-15 z-50 ">
        <div className="flex w-full flex-row justify-center">
          <div className={arab.className + " "}>
            <p className="text-5xl font-bold my-2 text-center great-vibes-regular w-fit  px-2">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </div>
        </div>

        <div className="flex w-full flex-row justify-center mb-3">
          <p className={"text-4xl  text-center great-vibes-regular w-fit  px-2 " + kaushan_Script.className}>
            Walimatul Urus
          </p>
        </div>

        <Image
          className="animate-pulse mb-7"
          src="/images/logo2.png"
          alt="alt"
          width={500}
          height={30}
        />
        <div
          className={
            "flex w-full flex-row justify-center " + kaushan_Script.className
          }
        >
          <p className="text-3xl text-center great-vibes-regular ">
            20 JULAI 2024
          </p>
        </div>
        <div className={inter.className}>
          <div
            className={"flex w-full flex-row justify-center " + chewy.className}
          >
            <p className="text-s text-center great-vibes-regular tracking-wider">
              UTROPOLIS MARKETPLACE, SHAH ALAM
            </p>
          </div>
          <div
            className={"flex w-full flex-row justify-center " + chewy.className}
          >
            <p className="text-lg text-center great-vibes-regular tracking-wider">
              SELANGOR.
            </p>
          </div>
        </div>
        <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Panel1;
