/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import {
  Domine,
  Parisienne,
  Geologica,
  Sorts_Mill_Goudy,
} from "next/font/google";
import { Carousel } from "flowbite-react";
import CountDown from "./CountDown";
import { buttonAt } from "../BackPage";
import { useGetUcapan } from "@/app/utilities/useGetUcapan";
const domine = Domine({ subsets: ["latin"], weight: ["400"] });
const parisienne = Parisienne({ subsets: ["latin"], weight: ["400"] });
const geologica = Geologica({ subsets: ["latin"], weight: ["400"] });
const sorts_Mill_Goudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: ["400"],
});

const Middle = (props: any) => {
  const { sendData, data } = useGetUcapan();

  useEffect(() => {
    sendData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const datafiltered = data?.ucapan?.filter((item : any) => item.text !== "")

  return (
    <div
      className={"mt-20 px-10 text-[#695c54] " + domine.className}
      onClick={() => {
        props.updateButton(buttonAt.NONE);
      }}
    >
      <div className="flex w-full flex-row justify-center mb-3 pb-5">
        <p className={"text-center text-xs w-fit px-2 "}>
          Assalamualaikum W.B.T & Salam Sejahtera
        </p>
      </div>

      <div className={"w-full mb-3 text-xl leading-5 " + geologica.className}>
        <div className={"text-center w-full px-2"}>Hashim Bin Yahaya</div>
        <div className={"text-center w-full px-2 "}>&</div>
        <div className={"text-center w-full px-2 "}>Paridah Binti Johari</div>
      </div>

      <div className="flex w-full flex-row justify-center mb-3 py-5">
        <p className={"text-center text-xs w-fit px-2 "}>
          Dengan penuh kesyukuran, kami menjemput Dato&apos; | Datin | Tuan |
          Puan | Encik | Cik ke majlis perkahwinan anakanda kami
        </p>
      </div>

      <div className={"w-full mb-3 text-xl leading-5 text-[#695c54] "}>
        <div
          className={"text-center w-full px-2 " + sorts_Mill_Goudy.className}
        >
          Shahida Binti Hashim
        </div>
        <div
          className={"text-center w-full px-2 " + sorts_Mill_Goudy.className}
        >
          &
        </div>
        <div
          className={"text-center w-full px-2 " + sorts_Mill_Goudy.className}
        >
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
        <div className={"text-center w-full px-2 font-bold"}>Sabtu</div>
        <div className={"text-center w-full px-2 font-bold"}>20 July 2024</div>
        <div className={"text-center w-full px-2 text-xs"}>
          13 Muharram 1446H
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

      <div className="w-full  ">
        <div className={"text-center w-full px-2 font-bold"}>LOKASI MAJLIS</div>
        <div
          className={"text-center w-full px-2 text-2xl " + parisienne.className}
        >
          Twilight Saga Wedding Hall @ Kamalinda Events & Weddings
        </div>
        <div className={"text-center w-full px-2 text-xs "}>
          Level UG, Utropolis Marketplace, Jalan Kontraktor U1/U14, Seksyen U1
          40150 Shah Alam Glenmarie 40150 Selangor
        </div>
        <div className={"text-center w-full px-2 font-bold pt-5 "}>
          ATUR CARA MAJLIS
        </div>
        <div className={"text-center w-full px-2 text-xs pt-2"}>
          Jamuan Makan:
        </div>
        <div className={"text-center w-full px-2 text-xs "}>
          11:00 pagi - 4:00 petang
        </div>

        <div className={"text-center w-full px-2 text-xs pt-2"}>
          Ketibaan Pengantin:
        </div>
        <div className={"text-center w-full px-2 text-xs "}>
          12:30 tengahari
        </div>

        <div className={"text-center w-full px-2 text-xs pt-2"}>
          Sila RSVP kehadiran anda sebelum 10 July 2024
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

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-lg bg-black">
        <Carousel slideInterval={1000}>
          <img src="/images/1.jpg" alt="..." />
          <img src="/images/2.jpg" alt="..." />
          <img src="/images/3.jpg" alt="..." />
          <img src="/images/4.jpg" alt="..." />
          <img src="/images/5.jpg" alt="..." />
        </Carousel>
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
        <div className={"text-center w-full px-2 font-bold  text-[#695c54]"}>
          MENGHITUNG HARI
        </div>
      </div>

      <div className="px-10">
        <CountDown />
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
        <div className={"text-center w-full px-2 font-bold text-[#695c54]"}>
          UCAPAN
        </div>
      </div>
      <div
        className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-lg  overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {datafiltered?.map((item: any, index: number) => {
          // if (item?.text === "") return;

          return (
            <div key={item} className="w-full py-2 text-xs leading-4">
              <div className={"text-center w-full px-2"}>{item.text}</div>
              <div className={"text-center w-full px-2 font-bold"}>
                {item.name}
              </div>
            </div>
          );
        })}
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
        <div className={"text-center w-full px-2 font-bold text-[#695c54]"}>
          KEHADIRAN
        </div>
      </div>

      <div className="flex flex-row">
        <div className={"text-center w-full px-2"}>
          <div className="text-2xl">
            {data?.totalJumlahKehadiran?._sum?.jumlahKehadiran}
          </div>
          <div className="text-xs">Hadir</div>
        </div>
        <div className={"text-center w-full px-2 "}>
          <div className="text-2xl">
            {data?.totalJumlahTidakHadiran?._sum?.jumlahKehadiran}
          </div>
          <div className="text-xs">Tidak Hadir</div>
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

      <div className="w-full pb-32 text-xs flex flex-row justify-center">
        <a href="https://gementar.com" className={"text-center w-full px-2"}>
          Developed by, Gementar Team
        </a>
      </div>
    </div>
  );
};

export default Middle;
