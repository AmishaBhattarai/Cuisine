import Banner from "../components/banner";

export default function Settings() {
  return (
    <section className="bg-white grid mb-4 pb-10 mx-4 px-8 rounded-3xl border-4 border-green-400 py-8 lg:px-16">
      <Banner />
      <div className="col-span-12 mt-5">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
          <div className="bg-white p-4 shadow-sm rounded-lg">
            <h1 className="font-bold text-base">
              Service Available
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
                                  Services
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
                            <td>
                              <p className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                                Reservation
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Added</p>
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
                                  <p>Add</p>
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
                                  <p>Delete</p>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                                Loyality
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Added</p>
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
                                  <p>Add</p>
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
                                  <p>Delete</p>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                                Delivery
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Added</p>
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
                                  <p>Add</p>
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
                                  <p>Delete</p>
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
      <div className="flex w-full items-center justify-center p-12">
        <div className=" w-full">
          <h1 className=" my-12 font-bold text-base">
            Request Special Service
          </h1>
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-base font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[border-[#22801b]] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[border-[#22801b]] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="guest"
                className="mb-3 block text-base font-medium text-gray-700"
              >
                Special Request
              </label>
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Special Request"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[border-[#22801b]] focus:shadow-md"
                required
              ></textarea>
            </div>
            <div>
              <button className="bg-green-600 hover:shadow-form rounded-md bg-[border-[#22801b]] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
