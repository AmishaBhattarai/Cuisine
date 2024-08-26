import React from "react";
import { Link } from "react-router-dom";
import { aboutUs } from "../config/about";

export function About() {
  return (
    <div className="antialiased w-full h-full bg-default text-gray-400 font-inter p-10">
      <div className="container px-4 mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            {aboutUs &&
              aboutUs.map((item, index) => (
                <div
                  key={index}
                  id="plan"
                  className="rounded-lg   text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                >
                  <div
                    id="title"
                    className="w-full py-5 border-b border-gray-800"
                  >
                    <h3 className="font-normal text-dark-red text-xl mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <div id="content">
                    <div className="my-5">
                      <p className="text-gray-500 text-sm pt-2">
                        {item.desc}
                      </p>
                    </div>
                    <div
                      id="contain"
                      className="leading-8 mb-10 text-lg font-light"
                    >
                      <div
                        id="links"
                        className="w-full mt-10 px-6"
                      >
                        <Link
                          to={item.link}
                          target={"_self"}
                          className="w-full block bg-orange-500 text-white font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:button-dark-red "
                        >
                          {item.buttonTitle}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
