"use client";
import React, { useState, useEffect } from "react";
import {
  Gwendolyn,
} from "next/font/google";
import { Spinner } from "flowbite-react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] });
const MainPage = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(document.readyState !== "complete");

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if(isLoading)
  {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-white">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            Muat Turun...{" "}
            <Spinner aria-label="Extra large spinner example " size="xl" />
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div
      className={`fixed max-w-96 w-full z-50 ${
        isOpen ? "transform -translate-y-full duration-1000" : ""
      }  min-h-screen bg-cover bg-center bg-[url('/images/mainbg_shahida.png')]`}
    >
      <div className=" h-screen flex flex-col justify-center">
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
              Hilmi
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
              Shahida
            </p>
          </div>
        </div>

        <div className="flex w-full flex-row justify-center mb-3">
          <p className={"text-center great-vibes-regular w-fit px-2 "}>
            SABTU, 28 SEPTEMBER 2024
          </p>
        </div>

        <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
          <MdKeyboardDoubleArrowDown />
        </div>

        <div className="flex flex-row justify-center">
          <button
            onClick={() => {
              setIsOpen(true);
              document.body.classList.remove("overflow-hidden");
            }}
            className="btn bg-[#ab787d] text-white font-semibold rounded-lg py-2 px-3"
          >
            BUKA
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
