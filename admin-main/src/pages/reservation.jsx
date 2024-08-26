import React from "react";
import { route } from "../config/routes";
import { Link } from "react-router-dom";

export default function Reservations() {
  return (
    <main className="">
      <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div className="col-span-12 mt-8">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Reservations
                </h2>
                <Link
                  to={route.reservationsSettings}
                  className="text-green-500 ml-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="col-span-12 mt-5">
              <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-4 shadow-sm rounded-lg">
                  <h1 className="font-bold text-base">
                    Reservation Table
                  </h1>
                  <div className="mt-4">
                    <div className="flex flex-col">
                      <div className="-my-2 overflow-x-auto">
                        <div className="py-2 align-middle inline-block min-w-full">
                          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead>
                                <tr>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        PRE-ORDER
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        ORDERED BY
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        TOTAL
                                        MEMBERS
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        STATUS
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        ACTION
                                      </span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>Biryani</p>
                                    <p className="text-xs text-gray-400">
                                      Chicken
                                    </p>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>
                                      Nirdosh
                                      lamichhane
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      9823035048
                                    </p>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>7</p>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <div className="flex text-red-500">
                                      <p>
                                        Pending
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <div className="flex space-x-4">
                                      <a
                                        href="#"
                                        className="text-green-500 hover:text-green-600"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-5 h-5 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                        <p>
                                          Conform
                                        </p>
                                      </a>
                                      <a
                                        href="#"
                                        className="text-red-500 hover:text-red-600"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-5 h-5 mr-1 ml-3"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          />
                                        </svg>
                                        <p>
                                          Delete
                                        </p>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
