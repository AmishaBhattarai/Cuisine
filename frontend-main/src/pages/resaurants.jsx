import React from "react";
// import { restaurants } from "../data/dummy";
import { Link } from "react-router-dom";
import { PageHeading } from "../components";
import { MainContainer } from "../wrapper";
import { IoLocationSharp } from "react-icons/io5";
import { allowedRoutes } from "../config/routes";
import { useGetRestaurantListQuery } from "../app/slice/restaurantSlice";

export function Restaurants() {
  const { data, isLoading } =
    useGetRestaurantListQuery();
  console.log(data);
  return (
    <MainContainer className="w-full bg-orange-50">
      <PageHeading heading="Our Restaurants" />

      <div className="m-6 xl:gap-x-4 flex flex-wrap items-center justify-center">
        {isLoading && (
          <p>Waiting for response...</p>
        )}
        {!isLoading &&
          data &&
          data?.content?.map((res, index) => (
            <div
              key={index}
              className="w-[260px] h-[300px] m-2 mx-auto overflow-hidden"
            >
              <div className="bg-white shadow-md rounded-lg max-w-sm">
                <img
                  className="rounded-lg w-full h-32 object-cover"
                  src={res?.image}
                  alt={res?.name}
                />
                <div className="px-5 pb-5">
                  <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
                    {res?.name}
                  </h3>

                  <div className="flex flex-wrap items-center mt-2.5 mb-5">
                    <IoLocationSharp className="w-4 h-4 text-orange-800" />
                    <span className="m-1 bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                      {res?.address}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={
                        allowedRoutes.menu +
                        `/${res?.name}/${res?.id}`
                      }
                      className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            // <div
            //   key={index}
            //   className={
            //     "flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg w-[260px] shadow-lg"
            //   }
            // >
            //   <svg
            //     className="absolute bottom-0 left-0 mb-8"
            //     viewBox="0 0 375 283"
            //     fill="none"
            //     style={{
            //       transform: "scale(1.5)",
            //       opacity: "0.1",
            //     }}
            //   >
            //     <rect
            //       x="159.52"
            //       y="175"
            //       width="152"
            //       height="152"
            //       rx="8"
            //       transform="rotate(-45 159.52 175)"
            //       fill="white"
            //     />
            //     <rect
            //       y="107.48"
            //       width="152"
            //       height="152"
            //       rx="8"
            //       transform="rotate(-45 0 107.48)"
            //       fill="white"
            //     />
            //   </svg>
            //   <div className="relative pt-10 px-10 flex items-center justify-center">
            //     <div
            //       className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            //       style={{
            //         background:
            //           "radial-gradient(black, transparent 60%)",
            //         transform:
            //           "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            //         opacity: "0.2",
            //       }}
            //     ></div>
            //     <div className="absolute left-0 top-0 h-16 w-16">
            //       <div className="absolute left-[-34px] top-[32px] z-10 w-[170px] -rotate-45 transform bg-green-500 py-1 text-center font-semibold text-white">
            //         {res.tag}
            //       </div>
            //     </div>
            //     <img
            //       className="relative h-40 w-40"
            //       src="https://th.bing.com/th/id/R.940cd104ab52d89d79e783e9c85695cb?rik=ATuRgnwKrym8kg&pid=ImgRaw&r=0"
            //       alt=""
            //     />
            //   </div>
            //   <div className="relative text-white px-6 pb-6 mt-6">
            //     <span className="block font-semibold text-xl">
            //       {res.name}
            //     </span>

            //     <div className="flex justify-between">
            //       <span className="block opacity-75 -mb-1">
            //         {res.location}
            //       </span>
            //       <Link
            //         to={
            //           allowedRoutes.menu +
            //           `/${res.name}/${res.location}`
            //         }
            //         className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
            //       >
            //         Menu
            //       </Link>
            //     </div>
            //   </div>
            // </div>
          ))}
      </div>
    </MainContainer>
  );
}
