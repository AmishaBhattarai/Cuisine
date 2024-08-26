import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Image from "../assets/res.jpg";
import { Formfield } from "../components";
import { useDispatch } from "react-redux";
import { loginValidation } from "../validations/validation";
import { allowedRoutes } from "../config/routes";
import { usePostLoginMutation } from "../app/slice/userSlice";
import { setCredentials } from "../app/slice/authSlice";

export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [postLogin, { isLoading }] =
    usePostLoginMutation();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit: async (values, action) => {
      const payload = { ...values };
      try {
        const response =
          await postLogin(payload).unwrap();
        if (response.token) {
          dispatch(
            setCredentials({
              token: response.token,
              pref: false,
            })
          );
          toast.success("Login Successful");
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
          Cusine Compass Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Formfield
              placeholder={"UserName *"}
              req={true}
              type={"text"}
              name={"username"}
              value={values.username}
              onchange={handleChange}
              onblur={handleBlur}
              id={"username"}
              error={errors.username}
              touched={touched.username}
              className="block max-w-sm mb-2 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>
          <div>
            <Formfield
              placeholder={"Password *"}
              req={true}
              type={"password"}
              name={"password"}
              value={values.password}
              onchange={handleChange}
              onblur={handleBlur}
              id={"password"}
              error={errors.password}
              touched={touched.password}
              className="block max-w-sm mb-2 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-orange-500"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-2"
            >
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-orange-500">
            <Link
              to={allowedRoutes.forgotPass}
              className="hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            disabled={isLoading ? true : false}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mt-6 text-orange-500 text-center">
          <Link
            to={allowedRoutes.register}
            className="hover:underline"
          >
            Sign up Here
          </Link>
        </div>
      </div>
    </div>
  );
}
