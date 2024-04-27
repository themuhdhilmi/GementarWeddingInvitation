import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

import { Alegreya_Sans_SC, Noto_Naskh_Arabic } from "next/font/google";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });
const Panel3 = (props: any) => {
  return (
    <div className="min-h-screen grid grid-cols-1 w-full content-center relative">

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

      <p className={"text-center pt-20  text-2xl pb-5 " + inter.className}>
        SABTU, 20 JULAI 2025
      </p>
      <p className={"text-center  text-2xl pb-5 " + inter.className}>
        11.00 AM - 4.00 PM
      </p>

      <p className={"text-center  text-2xl pb-5 " + inter.className}>
        Kamalinda Events & Weddings, Level UG, Utropolis Marketplace, Jalan
        Kontraktor U1/U14, Seksyen U1 40150 Shah Alam Glenmarie 40150
        Selangor
      </p>

      <div
      className="cursor-pointer z-50"
      onClick={() =>
        window.open("https://maps.app.goo.gl/S3hvRgRkVxgP7Bj29", "_blank")
      }
    >
      <Image
        src="/images/map.png"
        alt="alt"
        width={500}
        height={500}
      />
    </div>

    <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown />
        </div>
    </div>
  );
};

export default Panel3;
