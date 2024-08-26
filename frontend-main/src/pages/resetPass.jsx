import React from "react";
import {
  Navigate,
  useSearchParams,
} from "react-router-dom";
import { useGetResetPassQuery } from "../app/slice/userSlice";

// /api/auth/reset-password?token=ajFsMEcwNGZzbE4uS05BcW1CTmRLc3pD

export default function ResetPass() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { data, isloading } =
    useGetResetPassQuery({
      token: token,
    });
  return isloading ? (
    <p>Loading...</p>
  ) : data ? (
    <div>
      Please Check Your Email For A Password
    </div>
  ) : (
    <Navigate to={"/404"} />
  );
}
