"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { Gwendolyn } from "next/font/google";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] });
const MainPage = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed max-w-96 w-full z-50 ${
        isOpen ? "transform -translate-y-full duration-1000" : ""
      }  min-h-screen bg-cover bg-center bg-[url('https://kadkahwinmy.com/images/upload/design/1712139136_e.png')] content-center `}
    >
      <div className="pt-15 z-50 ">
        <div className="flex w-full flex-row justify-center mb-3">
          <p className={" text-center great-vibes-regular w-fit  px-2 "}>
            Walimatul Urus
          </p>
        </div>

        <div className={"font-bold text-[#ab787d] " + gwendolyn.className}>
          <div className="flex w-full flex-row justify-center mb-3">
            <p
              className={
                "text-6xl  text-center great-vibes-regular w-fit  px-2 "
              }
            >
              Shahida
            </p>
          </div>

          <div className="flex text-slate-800 w-full flex-row justify-center mb-3">
            <p
              className={
                "text-5xl  text-center great-vibes-regular w-fit  px-2 "
              }
            >
              &
            </p>
          </div>

          <div className="flex w-full flex-row justify-center mb-3">
            <p
              className={
                "text-6xl  text-center great-vibes-regular w-fit  px-2 "
              }
            >
              Hilmi
            </p>
          </div>
        </div>

        <div className="flex w-full flex-row justify-center mb-3">
          <p className={"text-center great-vibes-regular w-fit px-2 "}>
            SABTU, 10 JUN 2024
          </p>
        </div>

        <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown />
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="btn bg-[#ab787d] text-white font-semibold rounded-lg py-2 px-3"
        >
          BUKA
        </button>
      </div>


    </div>
  );
};

export default MainPage;
