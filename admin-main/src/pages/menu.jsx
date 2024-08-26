import { Link } from "react-router-dom";
import { useGetRestaurantMenuByIDQuery } from "../api/slice/restaurantSlice";
import { useState } from "react";
import EditMenu from "../components/editForm";
import DeleteMenu from "../components/deleteMenu";

export default function Menu() {
  const [popup, setpopup] = useState(false);
  const [dta, setData] = useState(null);
  const [popdelete, setpopdelete] =
    useState(false);

  const { data, isLoading } =
    useGetRestaurantMenuByIDQuery({
      restaurantId: 1,
    });
    console.log(data)

  const handleChange = (d) => {
    setpopup(true);
    setData(d);
  };
  const handleDelete = (d) => {
    setpopdelete(true);
    setpopup(false);
    setData(d);
  };
  return isLoading ? (
    <p>Loading....</p>
  ) : (
    <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
      <section className="w-full min-h-screen overflow-x-scroll font-sans text-gray-900 bg-orange-50 flex">
        <main className="flex-1 pb-8">
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
                Products
              </h1>
              <p className="text-sm font-medium text-gray-500">
                Let&apos;s grow your business!
                Create your product and upload
                here
              </p>
            </div>
            <Link
              to={"/menu/create"}
              className="inline-flex gap-x-2 items-center py-2.5 px-6 bg-green-500 text-white rounded-xl hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              <svg
                className="w-6 h-6 fill-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span className="text-sm font-semibold tracking-wide">
                Create Item
              </span>
            </Link>
          </div>

          <table className="w-full border-b border-gray-200">
            <thead>
              <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                <td className="pl-10">
                  <div className="flex items-center gap-x-4">
                    <span>Product Name</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  Pricing
                </td>
                <td className="py-4 px-4 text-center">
                  Product Id
                </td>
                <td className="py-4 px-4 text-center">
                  Actions
                </td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data &&
                data?.map(
                  (product, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-100 transition-colors group"
                    >
                      <td className="flex gap-x-4 items-center py-4 pl-10">
                        <img
                          src={product?.imageUrl}
                          alt=""
                          width={180}
                          height={42}
                          className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                        />
                        <div>
                          <a
                            to=""
                            className="text-lg font-semibold text-gray-700"
                          >
                            {product?.name}
                          </a>
                          <div className="font-medium text-gray-400">
                            {product?.description}
                          </div>
                        </div>
                      </td>
                      <td className="font-medium text-center">
                        Rs {product?.price}
                      </td>
                      <td className="font-medium text-center">
                        {product?.id}
                      </td>
                      <td className="flex flex-row w-[100px] items-center justify-between">
                        <button
                          className="bg-blue-500 p-2 rounded-md text-white"
                          onClick={() =>
                            handleChange(product)
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 p-2 m-1 rounded-md text-white"
                          onClick={() => {
                            handleDelete(product);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>

          <div className="flex gap-x-2 justify-center pt-8">
            <button className="flex justify-center items-center w-8 h-8">
              <svg
                className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            {[1].map((i) => (
              <button
                key={i}
                className="flex items-center justify-center w-8 h-8 font-medium rounded-full
              bg-gray-800  text-gray-400 hover:text-indigo-600 "
              >
                {i}
              </button>
            ))}
            <button className="flex justify-center items-center w-8 h-8">
              <svg
                className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </main>
        {popup && (
          <EditMenu
            setpopup={setpopup}
            dta={dta}
          />
        )}
        {popdelete && (
          <DeleteMenu
            setpopup={setpopdelete}
            dta={dta}
          />
        )}
      </section>
    </div>
  );
}
