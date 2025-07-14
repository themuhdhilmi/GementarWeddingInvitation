import React from "react";
import { Gwendolyn } from "next/font/google";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { buttonAt } from "../BackPage";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] });
const Header = (props: any) => {
  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center bg-[url('/images/mainbg_shahida.png')] content-center `}
      onClick={() => {
        props.updateButton(buttonAt.NONE);
      }}
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

        <div className="flex flex-row justify-center"></div>
      </div>
    </div>
  );
};

export default Header;
