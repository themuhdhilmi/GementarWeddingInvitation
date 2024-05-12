import React from "react";
import {
  Alegreya_Sans_SC,
  Roboto,
  Kaushan_Script,
  Satisfy,
} from "next/font/google";
import prisma from "@/prisma/client";
const inter = Roboto({ subsets: ["latin"], weight: ["300"] });

const Page = async () => {
  // const data = await prisma.ucapan.findMany();

  // return (
  //   <div className="p-5">
  //     <table className={"table-auto w-full " + inter.className}>
  //       <tr>
  //         <th className="border">Name</th>
  //         <th className="border">Text</th>
  //       </tr>
  //       {data?.map((item: any, index: number) => {
  //         return (
  //           <tr key={index}>
  //             <td className="border">{item.name}</td>
  //             <td className="border">{item.text}</td>
  //           </tr>
  //         );
  //       })}
  //     </table>
  //   </div>
  // );
};

export default Page;
