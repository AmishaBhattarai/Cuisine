import React from "react";
import Image from "../assets/R.jpg";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector(
    (state) => state.authReducer
  );

  return (
    <div className="relative h-[66vh] bg-white p-8 overflow-scroll">
      <div className="bg-white h-[80vh] rounded-lg pb-8">
        <div className="w-full h-[250px]">
          <img
            src={Image}
            className="w-full h-44 rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img
            src="https://th.bing.com/th/id/OIP.yYkxTSe5CN85PoxJcQj8ngHaGJ?rs=1&pid=ImgDetMain"
            className="h-40 w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">
              {user.user}
            </p>
            <span
              className="bg-blue-500 rounded-full p-1"
              title="Verified"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700">
            Owner of Cuisine Compass
          </p>
          <p className="text-sm text-gray-500">
            Kathmandu, Nepal
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2"></div>
      </div>

      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg  p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Personal Info
            </h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24">
                  Full name:
                </span>
                <span className="text-gray-700">
                  {user.user}
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">
                  Joined:
                </span>
                <span className="text-gray-700">
                  7 Feb, 2023
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">
                  Mobile:
                </span>
                <span className="text-gray-700">
                  {user.phone}
                </span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">
                  Email:
                </span>
                <span className="text-gray-700">
                  {user.email &&
                    user.email.split("@")[0]}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
