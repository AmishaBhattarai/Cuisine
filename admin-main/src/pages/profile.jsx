import React from "react";

export default function Profile() {
  return (
    <div className="bg-gray-100 overflow-y-scroll grid mb-4 pb-10 mx-4 px-8 rounded-3xl border-4 border-green-400">
      <div className="container mx-auto my-5 p-5">
        <div className="lg:flex no-wrap md:-mx-2 ">
          {/* right section */}
          <div className="w-full lg:w-3/12 lg:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="flex overflow-hidden items-center justify-center">
                <img
                  className="h-40 w-40 object-cover rounded-full"
                  src="https://thumbs.dreamstime.com/b/reales-normales-personenportrait-22299676.jpg"
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                Nirdosh Lamichhane
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Admin of Bajeko Sekwa.
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                👩‍🍳 Expert in crafting
                mouthwatering dishes that delight
                the senses.
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">
                    Jan 05, 2023
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
          </div>
          {/* left section */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">
                  About
                </span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      First Name
                    </div>
                    <div className="px-4 py-2">
                      Nirdosh
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Last Name
                    </div>
                    <div className="px-4 py-2">
                      Lamichhane
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Gender
                    </div>
                    <div className="px-4 py-2">
                      Male
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Contact No.
                    </div>
                    <div className="px-4 py-2">
                      +977 9823035***
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                      Kathmandu,Nepal
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Permanant Address
                    </div>
                    <div className="px-4 py-2">
                      Shivasatakshi-04, Jhapa
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Email.
                    </div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:Nirdosh@example.com"
                      >
                        nirdosh@
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Birthday
                    </div>
                    <div className="px-4 py-2">
                      Feb 06, 2002
                    </div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Edit Information
              </button>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">
                      Restaurants
                    </span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">
                        Bajeko Sekwa
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2023 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        FoodMandu
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2023 - Now
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">
                      Location
                    </span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">
                        Kathmandu,Nepal
                      </div>
                      <div className="text-gray-500 text-xs">
                        44600,xyz-road
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Kathmandu,Nepal
                      </div>
                      <div className="text-gray-500 text-xs">
                        44600,xyz-road
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
