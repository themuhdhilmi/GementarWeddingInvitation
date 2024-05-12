"use client";
import React, { useEffect, useRef, useState } from "react";

import { Gwendolyn } from "next/font/google";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Header from "./BackPageComponents/Header";
import Middle from "./BackPageComponents/Middle";
import BottomPanel from "./BottomPanel";
import Music from "./BottomPanelComponents/Music";
import SalamKaut from "./BottomPanelComponents/SalamKaut";
import Lokasi from "./BottomPanelComponents/Lokasi";
import Hubungi from "./BottomPanelComponents/Hubungi";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] });

export enum buttonAt {
  NONE,
  MUSIC,
  CALENDAR,
  SALAM_KAUT,
  LOKASI,
  HUBUNGI,
  RSVP,
}

const BackPage = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButton, setIsButton] = useState<buttonAt>(buttonAt.NONE);

  const divRef: any = useRef(null);

  useEffect(() => {
    // Scroll to the div when the component mounts
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const updateButton = (e: buttonAt) => {
    setIsButton(e);
  };

  return (
    <div
      className={`max-w-96 w-full min-h-screen bg-fixed bg-contain bg-center bg-[url('/images/back_shahida.png')] content-center `}
    >
      <Header updateButton={setIsButton}  />
      <div ref={divRef}></div>
      <Middle updateButton={setIsButton} />
      <BottomPanel updateButton={setIsButton} />

      <div
        className={`bg-white w-full max-w-96 fixed bottom-0 transform ${
          isButton === buttonAt.MUSIC ? "translate-y-0" : "translate-y-full "
        } z-10  pb-20 duration-1000  flex flex-row justify-center py-5 bg-cover bg-[url('/images/mainbg_shahida.png')]`}
      >
        <div className="rounded-lg overflow-clip">
          <Music updateButton={updateButton} />
        </div>
      </div>

      <div
        className={`bg-white w-full max-w-96 fixed bottom-0 transform ${
          isButton === buttonAt.SALAM_KAUT
            ? "translate-y-0"
            : "translate-y-full "
        } z-10  pb-20 duration-1000  flex flex-row justify-center py-5 bg-cover bg-[url('/images/mainbg_shahida.png')]`}
      >
        <div className=" rounded-lg overflow-clip">
          <SalamKaut/>
        </div>
      </div>

      <div
        className={` w-full max-w-96 fixed bottom-0 transform ${
          isButton === buttonAt.LOKASI ? "translate-y-0" : "translate-y-full "
        } z-10  pb-20 duration-1000  flex flex-row justify-center py-5 bg-cover bg-[url('/images/mainbg_shahida.png')]`}
      >
        <div className=" rounded-lg overflow-clip">
         <Lokasi/>
        </div>
      </div>

      <div
        className={`bg-white w-full max-w-96 fixed bottom-0 transform ${
          isButton === buttonAt.HUBUNGI ? "translate-y-0" : "translate-y-full "
        } z-10  pb-20 duration-1000  flex flex-row justify-center py-5 bg-cover bg-[url('/images/mainbg_shahida.png')]`}
      >
        <div className=" rounded-lg overflow-clip">
          <Hubungi/>
        </div>
      </div>
    </div>
  );
};

export default BackPage;
