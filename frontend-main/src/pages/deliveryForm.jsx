import React from "react";
import { MainContainer } from "../wrapper";

export function DeliveryForm() {
  return (
    <MainContainer>
      <div className=" h-full md:flex">
        <div className="relative overflow-hidden w-full h-[40vh] md:h-auto py-10 px-4 md:flex md:w-1/2 bg-gradient-to-tr from-yellow-600 to-orange-600 i justify-around items-center ">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Delivery Account
            </h1>

            <ol type="1" className="text-white">
              <li>
                1. Liscence docs should be in JPG
                or PNG & limit should be 400kb.
              </li>
              <li>
                3. Business name represents
                restaurant name.
              </li>
            </ol>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex overflow-scroll md:w-1/2 justify-center py-10 items-center bg-gradient-to-br from-orange-600 to-yellow-600">
          <section className="max-w-4xl p-6 mx-auto bg-transparent rounded-md overflow-scroll">
            <h1 className="text-xl font-bold text-white capitalize ">
              Account settings
            </h1>
            <form>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-white"
                    htmlFor="username"
                  >
                    Full Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-white"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-white"
                    htmlFor="pan"
                  >
                    Liscence Number
                  </label>
                  <input
                    id="pan"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="address"
                  >
                    Address / Street
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="country"
                  >
                    Country/region
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="state"
                  >
                    State/Provience
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="zip"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Liscence
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                        >
                          <span className="">
                            Upload a file
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 text-white">
                          or drag and drop
                        </p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG up to 400kb
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-orange-600 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-600">
                  Save
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </MainContainer>
  );
}
