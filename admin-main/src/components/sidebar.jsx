import React, { useEffect } from "react";
import { Header } from "./header";
import { useDispatch } from "react-redux";
import {
  MenuLink,
  MenuSVG,
} from "../config/menuLinks";
import { SideLinks } from "./sideLinks";
import { externalLinks } from "../config/externalLinks";
import { sidebarProps } from "./props/sidebar";
import { useGetUserQuery } from "../api/slice/userSlice";
import { setCredentials } from "../api/slice/authSlice";
import { useGetRestaurantByIDQuery } from "../api/slice/restaurantSlice";
import { setResaturant } from "../api/slice/resSlice";

export function SideBar({ user }) {
  const dispatch = useDispatch();
  const { data, refetch } = useGetUserQuery();
  const { data: resdata } =
    useGetRestaurantByIDQuery({
      restaurantId: 1,
    });
  useEffect(() => {
    if (!data) {
      fetchData();
    }
    if (data) {
      dispatch(
        setCredentials({
          user: data.username,
          role: data.role,
          phone: data.phoneNumber,
          lat: data.latitude,
          lon: data.longitude,
          id: data.id,
          email: data.email,
          token: user,
        })
      );
    }
  }, [data]);
  useEffect(() => {
    if (!resdata) {
      fetchData();
    }
    if (resdata) {
      dispatch(
        setResaturant({
          data: resdata,
        })
      );
    }
  }, [resdata]);
  const fetchData = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error
      );
    }
  };

  return (
    <div className="flex h-screen bg-green-700 ">
      <aside className="z-20 h-screen flex-shrink-0 hidden w-60 pl-2 bg-green-700 md:block">
        <div>
          <div className="text-white">
            <div className="flex p-2 bg-inherit">
              <div className="flex py-3 px-2 items-center">
                <p className="text-2xl text-orange-500 font-semibold">
                  Cuisine
                </p>
                <p className="ml-2 font-semibold italic">
                  DASHBOARD
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="">
                <img
                  className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-blue-400"
                  src={externalLinks.res}
                  alt="res"
                />
                <p className="font-bold text-base  text-white pt-2 text-center w-24">
                  Nirdosh
                </p>
              </div>
            </div>
            <div>
              <ul className="mt-6 leading-10">
                {MenuLink.map((m, i) => (
                  <SideLinks
                    key={i}
                    title={m.title}
                    link={m.link}
                    childrens={MenuSVG[i]}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <Header />
    </div>
  );
}
SideBar.propTypes = sidebarProps;
