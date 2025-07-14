"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = (props: any) => {
  const targetDate = new Date("September 28, 2024").getTime();
  const millisecondsRemaining = targetDate - Date.now();

  const renderer2 = ({ days, hours, minutes, seconds, completed }: any) => {
    if (false) {
      // Render a completed state
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-xs ">
          TAMAT
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div className="flex flex-row">
          <div className="flex flex-col justify-center text-center p-2 rounded-lg min-w-20  ">
            <span className="text-2xl">
              <span>{days}</span>
            </span>
            <span>Hari</span>
          </div>
          <div className="flex flex-col justify-center text-center  p-2  rounded-lg min-w-20` ">
            <span className="text-2xl">
              <span>{hours}</span>
            </span>
            Jam
          </div>
          <div className="flex flex-col justify-center text-center  p-2  rounded-lg min-w-20  ">
            <span className="text-2xl">
              <span>{minutes}</span>
            </span>
            Minit
          </div>
          <div className="flex flex-col justify-center text-center  p-2  rounded-lg min-w-20  ">
            <span className="text-2xl">
              <span>{seconds}</span>
            </span>
            Saat
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className={"flex flex-row justify-center "}>
        <Countdown
          date={Date.now() + millisecondsRemaining}
          renderer={renderer2}
        />
      </div>

    </div>
  );
};

export default CountDown;