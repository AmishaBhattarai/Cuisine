import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Image from "../assets/res.jpg";
import { Formfield } from "../components";

import { allowedRoutes } from "../config/routes";
import { usePostResetMutation } from "../app/slice/userSlice";

export default function ForgotPass() {
  const initialValues = {
    email: "",
  };
  const [postReset, { isLoading }] =
    usePostResetMutation();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      const payload = { ...values };
      try {
        const response =
          await postReset(payload).unwrap();
        if (response.message) {
          toast.success(response.message);
          action.resetForm();
        } else {
          toast.success("Something went wrong!");
        }
      } catch (err) {
        toast.error(`${err.data.message}`);
      }
    },
  });
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen w-full fixed ">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={Image}
          alt="login"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">
          Forgot My Password
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Formfield
              placeholder={"Email *"}
              req={true}
              type={"text"}
              name={"email"}
              value={values.email}
              onchange={handleChange}
              onblur={handleBlur}
              id={"email"}
              error={errors.email}
              touched={touched.email}
              className="block max-w-sm mb-2 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>

          <button
            disabled={isLoading ? true : false}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
        <div className="mt-6 text-orange-500 text-center">
          <Link
            to={allowedRoutes.register}
            className="hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
