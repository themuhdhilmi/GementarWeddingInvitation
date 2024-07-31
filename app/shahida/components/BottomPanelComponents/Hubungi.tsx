import Image from "next/image";
import React from "react";
import { MdContactPhone } from "react-icons/md";

const Hubungi = () => {
  return (
    <div className="flex flex-col justify-center bg-white p-3">
      <button
        onClick={() =>
          window.open("https://wa.me/60126491321", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>HASHIM</div>
        </div>
      </button>

      <button
        onClick={() =>
          window.open("https://wa.me/601110281508", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>FARID</div>
        </div>
      </button>

      <button
        onClick={() =>
          window.open("https://wa.me/601110381508", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>INTAN</div>
        </div>
      </button>

      <button
        onClick={() =>
          window.open("https://wa.me/60105501320", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>FAIZ</div>
        </div>
      </button>
    </div>
  );
};

export default Hubungi;
