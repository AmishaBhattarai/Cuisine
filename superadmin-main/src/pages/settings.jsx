export default function Settings() {
  return (
    <section className="bg-white grid mb-4 pb-10 mx-4 px-8 rounded-3xl border-4 border-green-400 py-8 lg:px-16">
      <div className="col-span-12 mt-5">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
          <div className="bg-white p-4 shadow-sm rounded-lg">
            <h1 className="font-bold text-base">
              Employees
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
                                  Name
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
                                  Work Type
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
                                Nirdosh
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Working</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>User</p>
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
                                    Change Status
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
                                  <p>Delete</p>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                                Prabin
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Working</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>User</p>
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
                                    Change Status
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
                                  <p>Delete</p>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                                Sunny
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Working</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                              <div className="flex text-red-500">
                                <p>Manager</p>
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
                                    Change Status
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
    </section>
  );
}
