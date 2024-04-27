import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

import { Alegreya_Sans_SC, Noto_Naskh_Arabic } from "next/font/google";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });
const Panel1 = (props: any) => {
  return (
    <div className="min-h-screen grid grid-cols-1 w-full  content-center relative">
      <Image
        className="absolute inset-x-0 top-0 "
        src="/images/plant_top.png"
        alt="alt"
        width={500}
        height={500}
      />

      <Image
        className="absolute inset-x-0 bottom-0"
        src="/images/plant_bottom.png"
        alt="alt"
        width={500}
        height={500}
      />

      <div className="pt-15">
        <div className={arab.className}>
          <p className="text-3xl text-center great-vibes-regular">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
        </div>

        <p className="text-3xl text-center great-vibes-regular">
          Walimatul Urus
        </p>
        <Image
          className="animate-pulse"
          src="/images/logo.png"
          alt="alt"
          width={500}
          height={500}
        />
        <p className="text-3xl text-center great-vibes-regular">
          20 Julai 2025
        </p>
        <div className={inter.className}>
          <p className="text-2xl text-center great-vibes-regular px-5">
            Utropolis Marketplace, Shah Alam
          </p>
          <p className="text-2xl text-center great-vibes-regular px-5">
            Selangor.
          </p>
        </div>
        <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Panel1;
