import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" font-sans bg-default">
      <div className="container px-6 py-12 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="font-sans p-8 text-sm text-start md:text-center md:p-4">
            Copyright © 2023/24 Cuisine Compass -
            All Rights Reserved.
          </p>
          <div className="flex gap-4 ">
            <Link to={"#"} target="_blank">
              <FaFacebook className="h-6 text-blue-700  w-6 mx-2 hover:cursor-pointer" />
            </Link>
            <Link to={"#"} target="_blank">
              <FaInstagram className="h-6 text-pink-600 w-6 mx-2 hover:cursor-pointer" />
            </Link>
            <Link to={"#"} target="_blank">
              <FaTwitter className="h-6 text-blue-400  w-6 mx-2 hover:cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-center">
          <Link
            className="inline-block py-2 px-3"
            to={"#"}
          >
            <div className="flex items-center relative cursor-pointer whitespace-nowrap">
              Home
            </div>
          </Link>
          <Link
            className="inline-block py-2 px-3 "
            to={"#"}
          >
            <div className="flex items-center relative cursor-pointer whitespace-nowrap">
              About
            </div>
          </Link>
          <Link
            className="inline-block py-2 px-3 "
            to={"#"}
          >
            <div className="flex items-center relative cursor-pointer whitespace-nowrap">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
