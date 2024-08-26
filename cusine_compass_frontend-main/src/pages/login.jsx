import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Formfield from "../components/formFields";
import { allowedLinks } from "../config/externalLinks";
import { loginValidation } from "../validations/validation";
import { allowedRoutes } from "../config/routes";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
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
        console.log(payload);
      } catch (err) {
        console.error(`${err.data.message}`);
      }
    },
  });
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen ">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={allowedLinks.loginImage}
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
              placeholder={"Email *"}
              req={true}
              type={"email"}
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
              to="#"
              className="hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
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
