import React, { useState } from "react";
import CreateCuisine from "../components/addCuisine";
import { useGetCuisineListQuery } from "../api/slice/cuisineSlice";
import EditCuisine from "../components/editFormCuisine";
import DeleteCuisine from "../components/deleteCuisine";

export default function Cuisine() {
  const [popup, setpopup] = useState(false);
  const [dta, setData] = useState(null);
  const [popdelete, setpopdelete] =
    useState(false);
  const { data, isloading } =
    useGetCuisineListQuery();
  const handleChange = (d) => {
    setpopup(true);
    setData(d);
  };
  const handleDelete = (d) => {
    setpopdelete(true);
    setpopup(false);
    setData(d);
  };
  return (
    <main className="">
      <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div className="col-span-12 mt-8">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-lg font-medium truncate">
                  Add Cuisine
                </h2>
              </div>
            </div>
            <CreateCuisine />
            <div className="col-span-12 mt-5">
              <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                <div className="bg-white p-4 shadow-sm rounded-lg">
                  <h1 className="font-bold text-base">
                    Cuisine
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
                                        Id
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        Name
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        Description
                                      </span>
                                    </div>
                                  </th>
                                  <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="flex cursor-pointer">
                                      <span className="mr-2">
                                        Actions
                                      </span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              {isloading ? (
                                <p>Loading...</p>
                              ) : (
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {data &&
                                    data?.map(
                                      (
                                        cu,
                                        index
                                      ) => (
                                        <tr
                                          key={
                                            index
                                          }
                                        >
                                          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                            <p>
                                              {
                                                cu?.id
                                              }
                                            </p>
                                          </td>
                                          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                            <p>
                                              {
                                                cu?.name
                                              }
                                            </p>
                                          </td>
                                          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                            <div className="flex text-green-500">
                                              {
                                                cu?.description
                                              }
                                            </div>
                                          </td>
                                          <td className="flex flex-row w-[100px] items-center justify-between">
                                            <button
                                              className="bg-blue-500 p-2 rounded-md text-white"
                                              onClick={() => {
                                                handleChange(
                                                  cu
                                                );
                                              }}
                                            >
                                              Edit
                                            </button>
                                            <button
                                              className="bg-red-500 p-2 m-1 rounded-md text-white"
                                              onClick={() => {
                                                handleDelete(
                                                  cu
                                                );
                                              }}
                                            >
                                              Delete
                                            </button>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                </tbody>
                              )}
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
        {popup && (
          <EditCuisine
            setpopup={setpopup}
            data={dta}
          />
        )}
        {popdelete && (
          <DeleteCuisine
            setpopup={setpopdelete}
            dta={dta}
          />
        )}
      </div>
    </main>
  );
}
