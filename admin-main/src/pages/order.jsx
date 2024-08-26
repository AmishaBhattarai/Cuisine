import React, { useEffect,useState } from "react";
import axios from 'axios'

export default function Order() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://glbfileconverter.onrender.com/api/v1/special/order/get')
      console.log(response.data)
      if(response.data) {
        setData(response.data)
      }
    }
    fetchData();
  },[])
  return (
    <main className="">
      <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div className="col-span-12 mt-8">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Order
                </h2>
              </div>
            </div>

            <div className="col-span-12 mt-5">
              <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-4 shadow-sm rounded-lg">
                  <h1 className="font-bold text-base">
                    Order Table
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
                                        PRODUCT
                                        NAME
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        Quantity
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
                                        PRINT
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
                                
                                {data && data.data?.map((m,i) => (<tr key={i}>
                                  {m.data.map((a,j)=> (<td key={j} className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>{a.name}</p>
                                    <p className="text-xs text-gray-400">
                                     Rs. {a.price}
                                    </p>
                                  </td>))}
                                  {/* <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>7</p>
                                  </td> */}
                                  {m.data.map((a,j)=> (<td key={j} className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <p>{a.quantity}</p>
                                    
                                  </td>))}
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <div className="flex text-green-500">
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
                                        complete
                                      </p>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <button
                                      onClick={() =>
                                        window.print()
                                      }
                                      className="flex text-green-500"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-1"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </button>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                    <div className="flex space-x-4">
                                      <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-600"
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
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          />
                                        </svg>
                                        <p>
                                          Change
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
                                </tr>))}
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
