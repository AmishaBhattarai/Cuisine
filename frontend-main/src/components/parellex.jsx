import React from "react";
import Image from "../assets/f9.png";

export function Parellex() {
  return (
    <section
      className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
      style={{
        backgroundImage: `url(${Image})
    `,
      }}
    >
      <div className="flex h-full w-full bg-gray-900/50 flex-col justify-center items-center text-white">
        <h1 className=" w-[300px] text-white text-5xl font-semibold mt-20 mb-10 text-center md:w-[500px] ">
          Satisfy Your Cravings, Anytime, Anywhere
          – Order with Ease, Taste with Joy!
        </h1>
      </div>
    </section>
  );
}
