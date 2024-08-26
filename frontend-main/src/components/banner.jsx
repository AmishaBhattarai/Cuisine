import React from "react";
import { bannerProps } from "./props/banner";
import { choices } from "../data/choices";

export function Banner({ hideBanner }) {
  return (
    <div className="fixed inset-0 mt-14 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative bg-white p-4 rounded-md mx-auto w-full max-w-[300px] pt-6">
        <div className="h-full rounded-lg">
          <div className="w-full">
            <div className="w-1/2">
              <h3 className="mb-4 font-semibold text-orange-600 ">
                Choose Your Interest
              </h3>
            </div>
            <div className="w-1/2">
              <button
                onClick={hideBanner}
                className="absolute right-0 top-2 z-10 py-2 px-4  mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-red-700 bg-white font-bold rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="flex flex-row h-80 flex-wrap items-center w-full text-sm font-medium text-orange-600 bg-white border border-gray-200 rounded-lg overflow-scroll ">
            {choices.map((c, i) => (
              <li
                key={i}
                className="w-full flex flex-row border-b border-gray-200 sm:border-b-0 sm:border-r "
              >
                <div className="w-1/2 flex items-center ps-3">
                  <input
                    id={`checkbox-list-${i}`}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 "
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-orange-600 ">
                    {c.food}
                  </label>
                </div>
                <div className="w-1/2 flex items-center ps-3">
                  <span className="group">
                    More
                    <br />
                    <span className="absolute invisible opacity-0 bg-orange-500 text-white rounded-b-md p-2 group-hover:visible group-hover:opacity-100 transition bottom-[-100px] left-0">
                      {c.desc}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={hideBanner}
          aria-label=""
          className="h-[35px] mr-auto m-2 p-2 rounded-lg border border-orange-700 inline-flex items-center font-semibold transition-colors duration-200 text-orange-600"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
Banner.propTypes = bannerProps;
