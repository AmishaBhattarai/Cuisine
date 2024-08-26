import React from "react";
import { useDispatch } from "react-redux";
import {
  BsPersonFill,
  BsGearFill,
  BsPower,
} from "react-icons/bs";
import { SiReadthedocs } from "react-icons/si";

import { Link, Outlet } from "react-router-dom";
import { MainContainer } from "./mainContainer";
import { allowedRoutes } from "../config/routes";
import { logOut } from "../app/slice/authSlice";

export function ProfileWrapper() {
  const dispatch = useDispatch();
  return (
    <MainContainer>
      <div className="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(62vh-2rem)] w-full p-4 ">
        <nav className="flex flex-row md:flex-col gap-1 w-full md:w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <Link
            to={allowedRoutes.myaccount}
            tabIndex="0"
            className="flex items-center truncate cursor-pointer w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-orange-50 active:bg-opacity-80 hover:text-orange-500 focus:text-orange-600 active:text-orange-400 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <BsPersonFill className="h-5 w-5" />
            </div>
            Account
          </Link>
          <Link
            to={allowedRoutes.settings}
            tabIndex="1"
            className="flex items-center truncate w-full p-3 cursor-pointer rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-orange-50 active:bg-opacity-80 hover:text-orange-500 focus:text-orange-600 active:text-orange-400 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <BsGearFill className="h-5 w-5" />
            </div>
            Settings
          </Link>
          <Link
            to={allowedRoutes.preferences}
            tabIndex="1"
            className="flex items-center truncate w-full p-3 cursor-pointer rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-orange-50 active:bg-opacity-80 hover:text-orange-500 focus:text-orange-600 active:text-orange-400 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <SiReadthedocs className="h-5 w-5" />
            </div>
            Preferences
          </Link>
          <div
            role="button"
            onClick={() => dispatch(logOut())}
            tabIndex="2"
            className="flex items-center truncate w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-orange-50 active:bg-opacity-80 hover:text-orange-500 focus:text-orange-600 active:text-orange-400 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <BsPower className="h-5 w-5" />
            </div>
            Log Out
          </div>
        </nav>
        <div className=" ml-4 w-full ">
          <Outlet />
        </div>
      </div>
    </MainContainer>
  );
}
