import React from "react";
import { Link } from "react-router-dom";
import { route } from "../config/routes";

export default function ForgotPass() {
  return (
    <div className="container flex flex-col mx-auto bg-white rounded-lg px-4 md:px-0 pt-4 my-2">
      <div className="flex fixed justify-center w-full h-screen my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <h3 className="mb-3 text-2xl font-extrabold text-gray-900 uppercase">
                Forgot My Password
              </h3>
              <p className="mb-4 text-grey-700">
                Enter your name and email to
                proceed
              </p>

              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-grey-600">
                  Admin Pannel
                </p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>
              <label
                htmlFor="email"
                className="mb-2 text-sm text-start text-grey-900"
              >
                Full Name*
              </label>
              <input
                id="name"
                type="name"
                placeholder="Nirdosh Lamichhane"
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />
              <label
                htmlFor="email"
                className="mb-2 text-sm text-start text-grey-900"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="nirdosh@gmail.com"
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />

              <div className="flex flex-col justify-between mb-8">
                <span className="ml-3 text-sm font-normal text-grey-900">
                  Your Reset link will be sent to
                  your email address.
                </span>
                <Link
                  to={route.login}
                  className="mr-4 text-sm font-medium text-green-500"
                >
                  Remembered My Password?
                </Link>
              </div>
              <button className="w-full px-6 py-5 bg-red-500 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-red-600 focus:ring-4 focus:ring-red-100 ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
