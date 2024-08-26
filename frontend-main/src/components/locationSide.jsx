import React from "react";
import { GeoMap } from "./geoMap";
// import { BsCarFrontFill } from "react-icons/bs";
// import { IoIosWine } from "react-icons/io";
// import { IoFastFood } from "react-icons/io5";

export default function LocationSide() {
  const restaurant = JSON.parse(
    sessionStorage.getItem("location")
  );
  return (
    <div className="lg:absolute inset-0 overflow-hidden lg:top-[6%] lg:left-[1%]">
      <div className="lg:absolute inset-0 overflow-hidden">
        <div className="pointer-events-none lg:max-h-[100vh] lg:absolute inset-y-0 lg:left-0 flex max-w-full lg:pr-10">
          <div className="pointer-events-auto w-screen lg:max-w-[33.33%]">
            <div className="flex h-full lg:pt-20 pt-4 flex-col bg-main lg:max-h-[100vh] ">
              <div className="flex-1 px-4 py-6 sm:px-6 lg:overflow-y-scroll">
                <div className="flex flex-col items-start justify-between border-b border-[#e2d8d2] pb-2 lg:sticky lg:top-0 bg-main">
                  <h2
                    className="text-lg font-semibold text-gray-900"
                    id="slide-over-title"
                  >
                    Restaurant Near Me
                  </h2>
                  <p className="text-sm italic">
                    {restaurant
                      ? `${restaurant?.length} restaurants found`
                      : `No restaurants found nearby.`}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul
                      role="list"
                      className="-my-6 restaurantsNames"
                    >
                      Nirdosh
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GeoMap/>
        </div>
      </div>
    </div>
  );
}
