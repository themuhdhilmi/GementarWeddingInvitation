import Image from "next/image";
import React from "react";

const Lokasi = () => {
  return (
    <div className="flex flex-col justify-center bg-white p-3">
      <Image
        src="/images/location_map.png"
        alt="alt"
        width={250}
        height={150}
      />
      <button onClick={() => window.open('https://g.co/kgs/xfBwYpf', '_blank')} className="m-2 rounded-lg text-white shadow-lg bg-[#ab787d]">OPEN GOOGLE MAP</button>
    </div>
  );
};

export default Lokasi;
