import Image from "next/image";
import React from "react";
import { MdContactPhone } from "react-icons/md";

const Hubungi = () => {
  return (
    <div className="flex flex-col justify-center bg-white p-3">
      <button
        onClick={() =>
          window.open("https://wa.me/60182760608", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>AZMI</div>
        </div>
      </button>

      <button
        onClick={() =>
          window.open("https://wa.me/60165333266", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>MAZUIN</div>
        </div>
      </button>

      <button
        onClick={() =>
          window.open("https://wa.me/60189778327", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>ZAIMAH</div>
        </div>
      </button>

      <button
        onClick={() =>
          window.open("https://wa.me/0165372747", "_blank")
        }
        className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d] px-2"
      >
        <div className="flex flex-row gap-1">
          <div className="p-1">
            <MdContactPhone />
          </div>
          <div>FIRDAUS</div>
        </div>
      </button>
    </div>
  );
};

export default Hubungi;
