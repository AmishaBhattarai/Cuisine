import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { useGetUserQuery } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../app/slice/authSlice";
import { mainProps } from "./props/main";

export function MainWrapper({ user }) {
  const dispatch = useDispatch();

  const visitedBefore = localStorage.getItem(
    "visitedBefore"
  );
  const { data, refetch } = useGetUserQuery();
  useEffect(() => {
    if (!data) {
      fetchData();
    }
    if (data) {
      dispatch(
        setCredentials({
          user: data?.username,
          role: data?.role,
          phone: data?.phoneNumber,
          lat: data?.latitude,
          lon: data?.longitude,
          id: data?.id,
          cuisines: data?.cuisines
            ? data?.cuisines
            : null,
          email: data?.email,
          token: user,
        })
      );
    }
  }, [data]);
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
  useEffect(() => {
    if (user && !visitedBefore) {
      localStorage.setItem(
        "visitedBefore",
        "false"
      );
    }
    if (user && !visitedBefore) {
      localStorage.setItem(
        "visitedBefore",
        "true"
      );
    }
  }, [visitedBefore, user]);

  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
MainWrapper.propTypes = mainProps;
