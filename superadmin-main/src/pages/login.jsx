import React from "react";
import { Link } from "react-router-dom";
import { route } from "../config/routes";
import { useDispatch } from "react-redux";
import { usePostLoginMutation } from "../api/slice/userSlice";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { setCredentials } from "../api/slice/authSlice";

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
    <div className="container flex flex-col mx-auto bg-white rounded-lg pt-4 my-2">
      <div className="flex fixed justify-center w-full h-screen my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
            >
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900 uppercase">
                SuperAdmin Sign In
              </h3>
              <p className="mb-4 text-grey-700">
                Enter your UserName and password
              </p>

              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-grey-600">
                  SuperAdmin Pannel
                </p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>
              <label
                htmlFor="Username"
                className="mb-2 text-sm text-start text-grey-900"
              >
                username*
              </label>
              <input
                id="UserName"
                type="UserName"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Name"
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />
              {errors.username &&
              touched.username ? (
                <span className="font-light text-red-400 mx-6 mb-2">
                  {errors.username}
                </span>
              ) : null}
              <label
                htmlFor="password"
                className="mb-2 text-sm text-start text-grey-900"
              >
                Password*
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter a password"
                className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />
              {errors.password &&
              touched.password ? (
                <span className="font-light text-red-400 mx-6 mb-2">
                  {errors.password}
                </span>
              ) : null}
              <div className="flex flex-row justify-between mb-8">
                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked
                    value=""
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-green-500">
                    <img
                      className=""
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                      alt="tick"
                    />
                  </div>
                  <span className="ml-3 text-sm font-normal text-grey-900">
                    Keep me logged in
                  </span>
                </label>
                <Link
                  to={route.forgotPass}
                  className="mr-4 text-sm font-medium text-red-500"
                >
                  Forget password?
                </Link>
              </div>
              <button
                disabled={
                  isLoading ? true : false
                }
                type="submit"
                className="w-full px-6 py-5 bg-green-500 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-green-100 "
              >
                {isLoading
                  ? "Submitting.."
                  : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
