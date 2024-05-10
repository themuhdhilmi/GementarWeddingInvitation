"use client";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ReactAudioPlayer from "react-audio-player";

import { Alegreya_Sans_SC, Noto_Naskh_Arabic } from "next/font/google";
import Panel1 from "./components/Panel1";
import Panel2 from './components/Panel2';
import Panel3 from "./components/Panel3";
import Panel4 from "./components/Panel4";
import Panel5 from "./components/Panel5";
import Page1 from "./components/Page1";
const inter = Alegreya_Sans_SC({ subsets: ["latin"], weight: ["300"] });
const arab = Noto_Naskh_Arabic({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-200">
      <div
        className="flex flex-col items-center justify-between text-slate-800 bg-white "
        style={{ maxWidth: "500px" }}
      >
        {/* <Panel1/>
        <div className="w-full bg-green-950 text-green-950">-</div>
        <Panel2/>
        <div className="w-full bg-green-950 text-green-950">-</div>
        <Panel3/>
        <div className="w-full bg-green-950 text-green-950">-</div>
        <Panel4/>
        <div className="w-full bg-green-950 text-green-950">-</div>
        <Panel5/> */}

        <Page1/>
      </div>
    </main>
  );
}
