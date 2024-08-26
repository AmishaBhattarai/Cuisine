import React from "react";
import { moreAbout } from "../config/moreAbout";
import { Link } from "react-router-dom";
import Image1 from "../assets/deliverys.jpg";
import Image2 from "../assets/order.jpg";
import Image3 from "../assets/res.jpg";

import { allowedRoutes } from "../config/routes";

export function MoreAbout() {
  return (
    <div>
      <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-orange-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                {moreAbout[0].title}
              </h2>
              <p className="text-black text-base md:text-lg">
                {moreAbout[0].desc}
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to={allowedRoutes.restaurants}
                className="text-orange-600  text-lg font-medium inline-flex items-center"
              >
                <span>
                  {moreAbout[0].buttonTitle} →
                </span>
              </Link>
            </div>
          </div>
          <img
            alt="logo"
            width="420"
            height="120"
            src={Image3}
          />
        </div>
      </div>

      <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <img
            alt="logo"
            width="420"
            height="120"
            src={Image2}
          />

          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-orange-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                {moreAbout[1].title}
              </h2>
              <p className="text-black text-base md:text-lg">
                {moreAbout[1].desc}
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to={allowedRoutes.restaurants}
                className="text-orange-600  text-lg font-medium inline-flex items-center"
              >
                <span>
                  {moreAbout[1].buttonTitle} →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-orange-600 sm:text-4xl sm:leading-none max-w-lg mb-6">
                {moreAbout[2].title}
              </h2>
              <p className="text-black text-base md:text-lg">
                {moreAbout[2].desc}
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to={allowedRoutes.restaurants}
                className="text-orange-600  text-lg font-medium inline-flex items-center"
              >
                <span>
                  {moreAbout[2].buttonTitle} →
                </span>
              </Link>
            </div>
          </div>
          <img
            alt="logo"
            width="420"
            height="120"
            src={Image1}
          />
        </div>
      </div>
    </div>
  );
}
