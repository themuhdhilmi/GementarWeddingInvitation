"use client";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ReactAudioPlayer from "react-audio-player";

import { Alegreya_Sans_SC, Noto_Naskh_Arabic } from "next/font/google";
import Panel1 from "./components/Panel1";
import Panel2 from './components/Panel2';
import Panel3 from "./components/Panel3";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-200">
      <div
        className="flex flex-col items-center justify-between text-slate-800 bg-white "
        style={{ maxWidth: "500px" }}
      >
        <Panel1/>
        <Panel2/>
        <Panel3/>
        {/* <Image src="/images/plant1.png" alt="alt" width={500} height={500} /> */}
      </div>
    </main>
  );
}
