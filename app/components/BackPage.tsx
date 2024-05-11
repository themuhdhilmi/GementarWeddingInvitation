"use client";
import React, { useEffect, useRef, useState } from "react";

import { Gwendolyn } from "next/font/google";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Header from "./BackPageComponents/Header";
import Middle from "./BackPageComponents/Middle";
const gwendolyn = Gwendolyn({ subsets: ["latin"], weight: ["700"] });
const BackPage = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const divRef : any = useRef(null);

  useEffect(() => {
    // Scroll to the div when the component mounts
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []); // Empty dependency array ensures this effect runs only once on mount


  return (
    <div
      className={`max-w-96 w-full ${
        isOpen ? "transform -translate-y-full duration-1000" : ""
      }  min-h-screen bg-fixed bg-contain bg-center bg-[url('https://kadkahwinmy.com/images/upload/bg/1712139136_d.png')] content-center `}
    >

      <Header/>
      <div ref={divRef}></div>
      <Middle/>

    </div>
  );
};

export default BackPage;
