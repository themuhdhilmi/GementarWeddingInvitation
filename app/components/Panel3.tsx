import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

import { Alegreya_Sans_SC, Noto_Naskh_Arabic, Kaushan_Script, Satisfy } from "next/font/google";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });
const kaushan_Script = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
const Panel3 = (props: any) => {
  return (
    <div className="min-h-screen grid grid-cols-1 w-full content-center relative">

    <Image
        className="absolute inset-x-0 top-0 "
        src="/images/shah_3_top.png"
        alt="alt"
        width={500}
        height={500}
      />

      <Image
        className="absolute inset-x-0 bottom-0"
        src="/images/shah_3_bottom.png"
        alt="alt"
        width={500}
        height={500}
      />

      <p className={"text-center pt-20  text-2xl pb-5 " + satisfy.className}>
        LOKASI MAJLIS
      </p>



      <div
      className="cursor-pointer z-50"
      onClick={() =>
        window.open("https://maps.app.goo.gl/S3hvRgRkVxgP7Bj29", "_blank")
      }
    >
      <Image
        src="/images/location_wedding.png"
        alt="alt"
        width={500}
        height={500}
      />
      

      <p className={"text-center px-5  text-2xl py-5 " + kaushan_Script.className}>
        Kamalinda Events & Weddings, Level UG, Utropolis Marketplace, Jalan
        Kontraktor U1/U14, Seksyen U1 40150 Shah Alam Glenmarie 40150
        Selangor
      </p>
    </div>

    

    <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown />
        </div>
    </div>
  );
};

export default Panel3;
