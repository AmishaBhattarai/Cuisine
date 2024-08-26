import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Image from "../assets/res.jpg";
import { Formfield } from "../components";
import { registerValidation } from "../validations/validation";
import { allowedRoutes } from "../config/routes";
import { usePostRegisterMutation } from "../app/slice/userSlice";

export default function Register() {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    conformPassword: "",
  };
  const [postRegister, { isLoading }] =
    usePostRegisterMutation();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues,
    validationSchema: registerValidation,
    onSubmit: async (values, action) => {
      const payload = { ...values };
      try {
        const response =
          await postRegister(payload).unwrap();
        if (response) {
          toast.success(
            "Registration Complete, Please login!"
          );
          action.resetForm();
        }
      } catch (err) {
        toast.error(`${err.data.message}`);
      }
    },
  });
  return (
    <div className="bg-gray-100 flex justify-center items-center w-full h-screen fixed">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={Image}
          alt="register"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">
          Cusine Compass Registration
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Formfield
              placeholder={"User Name *"}
              req={true}
              type={"text"}
              name={"username"}
              value={values.username}
              onchange={handleChange}
              onblur={handleBlur}
              id={"username"}
              error={errors.username}
              touched={touched.username}
              className="block max-w-sm mb-1 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>
          <div>
            <Formfield
              placeholder={"Name *"}
              req={true}
              type={"text"}
              name={"name"}
              value={values.name}
              onchange={handleChange}
              onblur={handleBlur}
              id={"name"}
              error={errors.name}
              touched={touched.name}
              className="block max-w-sm mb-1 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>
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
              className="block max-w-sm mb-1 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>
          <div>
            <Formfield
              placeholder={"Phone (optional)"}
              req={false}
              type={"number"}
              name={"phone"}
              value={values.phone}
              onchange={handleChange}
              onblur={handleBlur}
              id={"phone"}
              error={errors.phone}
              touched={touched.phone}
              className="block max-w-sm mb-1 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
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
              className="block max-w-sm mb-1 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>
          <div>
            <Formfield
              placeholder={"Conform Password *"}
              req={true}
              type={"password"}
              name={"conformPassword"}
              value={values.conformPassword}
              onchange={handleChange}
              onblur={handleBlur}
              id={"conformPassword"}
              error={errors.conformPassword}
              touched={touched.conformPassword}
              className="block max-w-sm mb-1 w-full  text-black appearance-none rounded-md border border-gray-300 px-3 py-2  placeholder-gray-900 shadow-sm md:w-[400px] focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
            />
          </div>

          <button
            disabled={isLoading ? true : false}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            {isLoading
              ? "Loading..."
              : "Register"}
          </button>
        </form>
        <div className="mt-6 text-orange-500 text-center">
          <Link
            to={allowedRoutes.login}
            className="hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
