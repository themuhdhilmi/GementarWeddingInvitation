"use client";
import React, { useEffect } from "react";
import { Roboto } from "next/font/google";
import { useGetUcapan } from "../utilities/useGetUcapan";
const inter = Roboto({ subsets: ["latin"], weight: ["300"] });

const Page = () => {
  const { sendData, data } = useGetUcapan();

  useEffect(() => {
    sendData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const datafiltered = data?.ucapan?.filter(
    (item: any) => item.isHadir === true
  );
  const datafilteredFalse = data?.ucapan?.filter(
    (item: any) => item.isHadir === false
  );

  return (
    <div className="p-5">
      <table className={"table-auto w-full text-center " + inter.className}>
        <tr>
          <th className="border">Name</th>
          <th className="border">Id</th>
          <th className="border">Text</th>
          <th className="border">Kehadiran</th>
          <th className="border">Hadir Dewasa</th>
          <th className="border">Hadir Kanak-Kanak</th>
        </tr>
        {datafiltered?.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td className="border">{item.name}</td>
              <td className="border">{item.id}</td>
              <td className="border">{item.text}</td>
              <td
                className={`border font-bold ${
                  item.isHadir
                    ? "bg-green-700 text-white"
                    : "bg-red-700 text-white"
                }`}
              >
                {item.isHadir ? "Hadir" : "Tidak Hadir"}
              </td>
              <td className="border">{item.kehadiranDewasa}</td>
              <td className="border">{item.kehadiranKanak}</td>
            </tr>
          );
        })}
        {datafilteredFalse?.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td className="border">{item.name}</td>
              <td className="border">{item.id}</td>
              <td className="border">{item.text}</td>
              <td
                className={`border font-bold ${
                  item.isHadir
                    ? "bg-green-700 text-white"
                    : "bg-red-700 text-white"
                }`}
              >
                {item.isHadir ? "Hadir" : "Tidak Hadir"}
              </td>
              <td className="border">{item.kehadiranDewasa}</td>
              <td className="border">{item.kehadiranKanak}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Page;
