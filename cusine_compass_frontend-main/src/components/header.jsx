import React from "react";
import { Link } from "react-router-dom";
import { allowedRoutes } from "../config/routes";

export default function Header() {
  return (
    <div className="h-full bg-gray-100 min-w-screen">
      <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <nav className="hidden flex-wrap items-center text-base   md:block lg:w-2/5 md:ml-auto">
            <Link
              to="#_"
              className="mr-5 font-medium hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="#_"
              className="mr-5 font-medium hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="#_"
              className="font-medium hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
          <Link className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
            <h1 className="w-auto h-5 text-gray-900 ">
              Cuisine Compass
            </h1>
          </Link>
          <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
            <Link
              to={allowedRoutes.login}
              className="mr-5 font-medium hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to={allowedRoutes.register}
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-orange-500 rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
