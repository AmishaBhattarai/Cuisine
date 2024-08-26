import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../wrapper";
import {
  PageHeading,
  MenuBuilder,
  Loading,
} from "../components";
// import { menus } from "../data/dummy";
import { useGetMenuByIDQuery } from "../app/slice/menuSlice";
import ThreeDimView from "./3dview";

export function Menu() {
  const { name, location } = useParams();
  const [l, setL] = useState(null);
  const [open, setopen] = useState(false);
  const { data, isLoading } = useGetMenuByIDQuery(
    { id: location }
  );
  return isLoading ? (
    <Loading />
  ) : (
    <MainContainer className={"bg-orange-50"}>
      <PageHeading heading={name + " Menu"} />
      {/* {data &&
        data?.content &&
        data?.content?.map((menu) => (
          <> */}
      {/* <div className="relative z-20 sm:z-auto">
              <div className="mx-auto max-w-container px-4 pb-6 sm:px-6 lg:px-8">
                <h1 className="ml-6 my-2 text-[32px] text-orange-600 uppercase">
                  {menu.category}
                </h1>

                <p className="ml-6 mt-1 text-sm leading-6 text-slate-700">
                  {menu.desc}
                </p>
              </div>
            </div> */}
      <div className="flex-grow ml-10 opacity-40"></div>
      <div className="flex flex-wrap justify-center sm:justify-evenly xl:justify-between m-2">
        {data &&
          data &&
          data?.map((menu, index) => (
            <MenuBuilder
              key={index}
              item={menu}
              setopen={setopen}
              setL={setL}
            />
          ))}
      </div>
      {open && (
        <ThreeDimView
          setopen={setopen}
          link={l}
        />
      )}
      {/* </>
        ))} */}
    </MainContainer>
  );
}

// link =
//   "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb";
