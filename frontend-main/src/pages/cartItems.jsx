import React, {
  useEffect,
  useState,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
  resetCart,
} from "../app/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../wrapper";
import { allowedRoutes } from "../config/routes";
import Khalti from "../payment/khalti";

export function CartItems() {
  const [totalAmt, setTotalAmt] = useState(0);
  const dispatch = useDispatch();
  const history = useNavigate();
  const cartItems = useSelector(
    (state) => state.cartReducer.products
  );
  useEffect(() => {
    if (cartItems.length <= 0) {
      history(allowedRoutes.restaurants);
    }
  }, [cartItems, history]);
  useEffect(() => {
    let price = 0;
    cartItems.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [cartItems]);
  return (
    <MainContainer>
      <div className="h-screen bg-white pt-8">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <section className="h-full  px-4 text-gray-600 antialiased">
              <div className="flex h-full flex-col justify-center">
                <div className="mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white ">
                  <header className="flex flex-row border-b border-gray-100 px-5 py-4">
                    <div className="w-1/2 font-semibold text-gray-800">
                      Manage Carts
                    </div>
                    <div className="flex w-1/2 justify-end">
                      <button
                        onClick={() =>
                          dispatch(resetCart())
                        }
                        className=" flex items-center justify-center h-6 py-2 px-2 bg-red-500 text-xs self- rounded-md text-white font-semibold uppercase  hover:bg-red-700 duration-300"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </header>

                  <div className="overflow-x-auto p-3">
                    <table className="w-full table-auto">
                      <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                        <tr>
                          <th className="p-2">
                            <div className="text-left font-semibold">
                              Product Name
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="text-left font-semibold">
                              Quantity
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="text-left font-semibold">
                              /item
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="text-left font-semibold">
                              Total
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="text-center font-semibold">
                              Action
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-100 text-sm">
                        {cartItems.map(
                          (x, index) => (
                            <tr key={index}>
                              <td className="p-2">
                                <div className="font-medium text-gray-800">
                                  {x.name}
                                </div>
                              </td>
                              <td className="p-2">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      increaseQuantity(
                                        x
                                      )
                                    )
                                  }
                                  className="w-5 h-5 self-center rounded-full  mx-2 "
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  readOnly="readonly"
                                  value={
                                    x?.quantity
                                  }
                                  className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
                                />
                                <button
                                  onClick={() =>
                                    dispatch(
                                      drecreaseQuantity(
                                        x
                                      )
                                    )
                                  }
                                  className="w-5 h-5 self-center rounded-full  mx-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-red-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </button>
                              </td>
                              <td className="p-2">
                                <div className="text-left font-medium text-green-500">
                                  Rs
                                  {x?.price}
                                </div>
                              </td>
                              <td className="p-2">
                                <div className="text-left font-medium text-green-500">
                                  Rs
                                  {x?.quantity *
                                    x?.price}
                                </div>
                              </td>
                              <td className="p-2">
                                <div className="flex justify-center">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        deleteItem(
                                          x
                                        )
                                      )
                                    }
                                  >
                                    <svg
                                      className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-orange-600"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
                    <div>Total</div>
                    <div className="text-orange-600">
                      Rs {totalAmt}
                      <span></span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <input
                      type="hidden"
                      className="border border-black bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6  md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">
                Subtotal
              </p>
              <p className="text-gray-700">
                Rs {totalAmt}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">
                Shipping
              </p>
              <p className="text-gray-700">
                Rs 0
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">
                Total
              </p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  Rs {totalAmt + 0}
                </p>
                <p className="text-sm text-gray-700">
                  including VAT
                </p>
              </div>
            </div>
            <Khalti
              amount={totalAmt + 0}
              data={cartItems}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
