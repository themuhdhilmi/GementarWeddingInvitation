import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

import { Alegreya_Sans_SC, Noto_Naskh_Arabic } from "next/font/google";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });
const Panel2 = (props: any) => {
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

    <p className="text-center text-2xl px-14">
      Dengan penuh rasa kesyukuran kepada Allah s.w.t
    </p>

    <p className={"text-center text-2xl pt-5 " + inter.className}>
      HASHIM BIN YAHYA
    </p>
    <p className={"text-center  text-2xl " + inter.className}>&</p>
    <p className={"text-center  text-2xl pb-5 " + inter.className}>
      PARIDAH BINTI JOHARI
    </p>

    <p className="text-center text-2xl">
      Dengan segala hormatnya ingin menjemput
    </p>

    <p className={"text-center py-5  text-2xl " + inter.className}>
      DATO&apos;/DATIN/TUAN/PUAN/ENCIK
    </p>

    <p className="text-center text-2xl">Ke majlis resepsi perkahwinan</p>
    <p className="text-center text-2xl">puteri & putera</p>

    <p className="text-center text-3xl pt-5">Shahida Binti Hashim</p>
    <p className="text-center text-3xl">&</p>
    <p className="text-center text-3xl pb-5">
      Muhammad Hilmi Bin Kamarul&apos;Azmi
    </p>

    <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
        <MdKeyboardDoubleArrowDown />
      </div>
  </div>
  );
};

export default Panel2;
