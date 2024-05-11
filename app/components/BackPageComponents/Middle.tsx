/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Gwendolyn, Domine, Kings } from "next/font/google";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] });
const domine = Domine({ subsets: ["latin"], weight: ["400"] });
const kings = Kings({ subsets: ["latin"], weight: ["400"] });
const Middle = () => {
  return (
    <div className={"mt-20 px-10 " + domine.className}>
      <div className="flex w-full flex-row justify-center mb-3 pb-5">
        <p className={"text-center text-xs w-fit px-2 "}>
          Assalamualaikum W.B.T & Salam Sejahtera
        </p>
      </div>

      <div className="w-full mb-3 leading-4">
        <div className={"text-center w-full px-2"}>Shahida Binti Hashim</div>
        <div className={"text-center w-full px-2 "}>&</div>
        <div className={"text-center w-full px-2 "}>
          Muhammad Hilmi Bin Kamarul&apos;Azmi
        </div>
      </div>

      <div className="flex w-full flex-row justify-center mb-3 py-5">
        <p className={"text-center text-xs w-fit px-2 "}>
          Dengan penuh kesyukuran, kami menjemput Dato&apos; | Datin | Tuan |
          Puan | Encik | Cik ke majlis perkahwinan anakanda kami
        </p>
      </div>

      <div className={"w-full mb-3 leading-4 "}>
        <div className={"text-center w-full px-2"}>Shahida Binti Hashim</div>
        <div className={"text-center w-full px-2 "}>&</div>
        <div className={"text-center w-full px-2 "}>
          Muhammad Hilmi Bin Kamarul&apos;Azmi
        </div>
      </div>

      <div className="flex flex-row w-full justify-center">
        <img
          src="https://kadkahwinmy.com/images/card2/divider-down.svg"
          alt=""
          className="my-4"
          style={{ width: "10vw" }}
        ></img>
      </div>

      <div className="w-full">
      <div className={"text-center w-full px-2"}>Sabtu</div>
        <div className={"text-center w-full px-2 "}>11 Jun 2024</div>
        <div className={"text-center w-full px-2 "}>
          16 Rejab 1140H
        </div>
      </div>

      <div className="flex flex-row w-full justify-center">
        <img
          src="https://kadkahwinmy.com/images/card2/divider-up.svg"
          alt=""
          className="my-4"
          style={{ width: "10vw" }}
        ></img>
      </div>

      <div className="w-full">
      <div className={"text-center w-full px-2"}>LOKASI MAJLIS</div>
        <div className={"text-center w-full px-2 "}>Sehening Embun Garden Event Hall</div>
        <div className={"text-center w-full px-2 "}>
          Lot 15, Jalan Durian 1, Kampung Sungai Buah, 43800 Dengkil, Selangor.
        </div>
        <div className={"text-center w-full px-2 "}>ATUR CARA MAJLIS</div>
        <div className={"text-center w-full px-2 "}>Jamuan Makan:</div>
        <div className={"text-center w-full px-2 "}>11:00 pagi - 4:00 petang</div>

        <div className={"text-center w-full px-2 "}>Ketibaan Pengantin</div>
        <div className={"text-center w-full px-2 "}>12:30 tengahari</div>

        <div className={"text-center w-full px-2 "}>Sila RSVP kehadiran anda sebelum 11 Jun 2024</div>
      </div>

      <div className="flex flex-row w-full justify-center">
        <img
          src="https://kadkahwinmy.com/images/card2/divider-down.svg"
          alt=""
          className="my-4"
          style={{ width: "10vw" }}
        ></img>
      </div>


      {/* Carousell Here */}

      <div className="flex flex-row w-full justify-center">
        <img
          src="https://kadkahwinmy.com/images/card2/divider-up.svg"
          alt=""
          className="my-4"
          style={{ width: "10vw" }}
        ></img>
      </div>

    </div>
  );
};

export default Middle;
