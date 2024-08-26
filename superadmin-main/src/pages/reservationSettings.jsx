import React from "react";
import { ResTable } from "../config/fakeRes";
import { Link } from "react-router-dom";

export default function ReservationSettings() {
  return (
    <section className="bg-white grid mb-4 pb-10 mx-4 px-8 rounded-3xl border-4 border-green-400 py-24 lg:px-16">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
          {ResTable.map((t, i) => (
            <div
              key={i}
              className="sticky group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-white shadow-md"
            >
              <Link to="#" className="block">
                <div className="h-28">
                  <div className="absolute flex flex-col justify-center items-center -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                    <p className="text-white">
                      Table Number
                    </p>
                    <h1 className="text-5xl font-extrabold text-white">
                      {i + 1}
                    </h1>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <button className="mb-2 p-2 inline-block bg-green-500 rounded-lg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    {t}
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
