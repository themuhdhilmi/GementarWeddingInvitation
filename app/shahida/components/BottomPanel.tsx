'use client'
import React from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { IoCalendarOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { RiContactsBook3Line } from "react-icons/ri";
import YouTube from "react-youtube";
import MainPage from "./MainPage";
import Music from "./BottomPanelComponents/Music";
import { buttonAt } from "./BackPage";
import RSVP from "./BottomPanelComponents/RSVP";
const BottomPanel = (props : any) => {
  return (
    <div className={`bg-[#ab787d] fixed w-full max-w-96 bottom-0 z-20`}>

      <div className="flex flex-row justify-between font-light items-center w-full">
        <div className="w-full flex flex-row justify-center ">
          <button onClick={() => {props.updateButton(buttonAt.MUSIC)}} className="flex flex-col justify-center text-white py-2">
            <div className="w-full flex flex-row justify-center">
              <GiMusicalNotes className="text-2xl" />
            </div>
            <p className="text-xs">Muzik</p>
          </button>
        </div>
        {/* <div className="w-full flex flex-row justify-center ">
          <button onClick={() => {props.updateButton(buttonAt.SALAM_KAUT)}} className="flex flex-col justify-center text-white py-2">
            <div className="w-full flex flex-row justify-center">
              <GiReceiveMoney className="text-2xl" />
            </div>
            <p className="text-xs">Salam Kaut</p>
          </button>
        </div> */}
        <div className="w-full flex flex-row justify-center ">
          <button onClick={() => {props.updateButton(buttonAt.LOKASI)}} className="flex flex-col justify-center text-white py-2">
            <div className="w-full flex flex-row justify-center">
              <GrMapLocation className="text-2xl" />
            </div>
            <p className="text-xs">Lokasi</p>
          </button>
        </div>
        <div className="w-full flex flex-row justify-center ">
          <button onClick={() => {props.updateButton(buttonAt.HUBUNGI)}} className="flex flex-col justify-center text-white py-2">
            <div className="w-full flex flex-row justify-center">
              <RiContactsBook3Line className="text-2xl" />
            </div>
            <p className="text-xs">Hubungi</p>
          </button>
        </div>
        {/* <div className="w-full flex flex-row justify-center ">
          <button onClick={() => {props.updateButton(buttonAt.RSVP)}} className="flex flex-col justify-center text-white py-2">
            <div className="w-full flex flex-row justify-center">
              <MdOutlineTableRestaurant className="text-2xl" />
            </div>
            <p className="text-xs">RSVP</p>
          </button>
        </div> */}
        <RSVP/>
      </div>
    </div>
  );
};

export default BottomPanel;
