"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";

import { Satisfy, Shantell_Sans, Caveat_Brush } from "next/font/google";
import { useSendUcapan } from "../utilities/useSendUcapan";
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
const shantell_Sans = Shantell_Sans({ subsets: ["latin"], weight: ["400"] });
const caveat_Brush = Caveat_Brush({ subsets: ["latin"], weight: ["400"] });
const Panel5 = (props: any) => {
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const { sendData, success } = useSendUcapan();

  const send = () => {
    if (name === "") return;
    if (text === "") return;

    const postData = {
      name: name,
      text: text,
    };

    sendData(postData);
  };

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen grid grid-cols-1 w-full content-center relative">
      <Image
        className="absolute inset-x-0 top-0 "
        src="/images/shah_top_5.png"
        alt="alt"
        width={500}
        height={500}
      />

      <Image
        className="absolute inset-x-0 bottom-0"
        src="/images/shah_5_bottom.png"
        alt="alt"
        width={500}
        height={500}
      />
      <div className="px-3 z-50">
        <p className={"text-center pt-20  text-4xl pb-5 " + satisfy.className}>
          Untuk Dihubungi 
        </p>

        <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
          Sebarang info dan pertanyaan berkaitan majlis dan pengesahan
          kehadiran, sila hubungi
        </p>

        <div className="flex flex-row justify-center">
          <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
            HASHIM:
          </p>
          <p
            className={
              "text-center  text-lg pl-2 underline " + shantell_Sans.className
            }
          >
            012-6491321
          </p>
        </div>
        <div className="flex flex-row justify-center gap-0">
          <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
            FARID:
          </p>
          <p
            className={
              "text-center  text-lg pl-2 underline " + shantell_Sans.className
            }
          >
            011-10281508
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
            INTAN:
          </p>
          <p
            className={
              "text-center  text-lg pl-2 underline " + shantell_Sans.className
            }
          >
            011-10381508
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
            FAIZ:
          </p>
          <p
            className={
              "text-center  text-lg pl-2 underline " + shantell_Sans.className
            }
          >
            010-5501320
          </p>
        </div>

        <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
          Semoga kehadiran para jemputan akan memeriahkan lagi majlis ini dan
          diberkati Allah S.W.T
        </p>

        <p className={"text-center  text-4xl pb-5 " + satisfy.className}>
          Kirim Ucapan
        </p>

        <p className={"text-center  text-lg pb-5 " + shantell_Sans.className}>
          Kirim ucapan anda kepada pasangan pengatin
        </p>

        {success === "NONE" ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className={
              "input w-full  px-5 border-b-2 " + shantell_Sans.className
            }
          />
        ) : (
          ""
        )}

        {success === "NONE" ? (
          <textarea
            value={text}
            placeholder="Ucapan Anda"
            onChange={(e) => setText(e.target.value)}
            className={
              "textarea input w-full  px-5 border-b-2  " +
              shantell_Sans.className
            }
          />
        ) : (
          ""
        )}

        { success === "NONE" ? (
          <div className="flex flex-row justify-center">
            <button
              onClick={() => send()}
              className={
                "bg-[#4f666d] text-white p-3 rounded-xl " +
                caveat_Brush.className
              }
            >
              HANTAR UCAPAN
            </button>
          </div>
        ) : (
          ""
        )}

        {success === "SUCCESS" ? <div className="flex flex-row justify-center text-2xl">Ucapan Berjaya Dihantar</div> : ""}
        {success === "ERROR" ? <div className="flex flex-row justify-center text-2xl">ERR : Ucapan Tidak Berjaya Dihantar</div> : ""}
      </div>

      <div className="animate-bounce pt-20 w-full flex flex-row justify-center">
        <MdKeyboardDoubleArrowDown />
      </div>
    </div>
  );
};

export default Panel5;
