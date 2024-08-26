import React from "react";
import { MainContainer } from "../wrapper";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { usePostRestaurantRegisterMutation } from "../app/slice/restaurantSlice";

export default function BusinessSign() {
  const { id } = useParams();
  const initialValues = {
    fullName: "",
    businessName: "",
    email: "",
    resBio: "",
    panNo: "",
    street: "",
    city: "",
    country: "",
    state: "",
    latlng: "",
    zipCode: "",
    restaurantTag: "",
    businessPlanType: "",
  };
  const [postRestaurantRegister, { isLoading }] =
    usePostRestaurantRegisterMutation();
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
          await postRestaurantRegister(
            payload
          ).unwrap();
        if (response) {
          toast.success(
            "Registration Complete, We will contact you within 36 hours!"
          );
          action.resetForm();
        } else {
          toast.success(
            "Registration Complete, We will contact you within 36 hours!"
          );
          action.resetForm();
        }
      } catch (err) {
        toast.error(`${err.data.message}Error`);
      }
    },
  });
  return (
    <MainContainer>
      <div className=" h-full md:flex">
        <div className="relative overflow-hidden w-full h-[40vh] md:h-auto py-10 px-4 md:flex md:w-1/2 bg-gradient-to-tr from-yellow-600 to-orange-600 i justify-around items-center ">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Business Account
            </h1>

            <ol type="1" className="text-white">
              <li>
                1. Business docs should be in JPG
                or PNG & limit should be 400kb.
              </li>
              <li>
                2. Restaurant&apos;s Latitude &
                Longitude is optional if your have
                provide correct address details.
              </li>
              <li>
                3. Business name represents
                restaurant name.
              </li>
            </ol>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex overflow-scroll md:w-1/2 justify-center py-10 items-center bg-gradient-to-br from-orange-600 to-yellow-600">
          <section className="max-w-4xl p-6 mx-auto bg-transparent rounded-md overflow-scroll">
            <h1 className="text-xl font-bold text-white capitalize ">
              Account settings
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-white"
                    htmlFor="username"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.fullName &&
                  touched.fullName ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.fullName}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label
                    className="text-white"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    name={"email"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.email &&
                  touched.email ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.email}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label
                    className="text-white"
                    htmlFor="business_name"
                  >
                    Business Name
                  </label>
                  <input
                    id="text"
                    type="text"
                    name={"businessName"}
                    value={values.businessName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.businessName &&
                  touched.businessName ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.businessName}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label
                    className="text-white"
                    htmlFor="pan"
                  >
                    Pan Number
                  </label>
                  <input
                    id="pan"
                    type="text"
                    name={"panNo"}
                    value={values.panNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.panNo &&
                  touched.panNo ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.panNo}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="address"
                  >
                    Address / Street
                  </label>
                  <input
                    type="text"
                    id="address"
                    name={"street"}
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.street &&
                  touched.street ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.street}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.city && touched.city ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.city}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="country"
                  >
                    Country/region
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.country &&
                  touched.country ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.country}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="state"
                  >
                    State/Provience
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.state &&
                  touched.state ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.state}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="zip"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zip"
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.zipCode &&
                  touched.zipCode ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.zipCode}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="passwordConfirmation"
                  >
                    Restaurant Tag
                  </label>
                  <select
                    name="restaurantTag"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  >
                    <option value={0}>Veg</option>
                    <option value={1}>
                      Non-Veg
                    </option>
                    <option value={2}>
                      Combo
                    </option>
                    <option value={3}>
                      Bakery
                    </option>
                  </select>
                  {errors.restaurantTag &&
                  touched.restaurantTag ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.restaurantTag}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="city"
                  >
                    Latitude/Longitude
                  </label>
                  <input
                    type="text"
                    name="latlng"
                    id="latlng"
                    value={values.latlng}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                  {errors.latlng &&
                  touched.latlng ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.latlng}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="passwordConfirmation"
                  >
                    Business Plan
                  </label>
                  <select
                    defaultValue={id}
                    name="businessPlanType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  >
                    <option value={0}>
                      Personal
                    </option>
                    <option value={1}>
                      Business
                    </option>
                    <option value={2}>
                      Professional
                    </option>
                  </select>
                  {errors.businessPlanType &&
                  touched.businessPlanType ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.businessPlanType}
                    </span>
                  ) : null}
                </div>
                <div>
                  <label
                    className="text-white"
                    htmlFor="describe"
                  >
                    Describe Your Business
                  </label>
                  <textarea
                    id="describe"
                    type="textarea"
                    name="resBio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                  ></textarea>
                  {errors.resBio &&
                  touched.resBio ? (
                    <span className="font-light text-red-400 mx-6 mb-2">
                      {errors.resBio}
                    </span>
                  ) : null}
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-white">
                    Business Document + Menu(Pan
                    card / registration card)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                        >
                          <span className="">
                            Upload a file
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 text-white">
                          or drag and drop
                        </p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG up to 300kb
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="flex justify-end mt-6">
                <button
                  disabled={
                    isLoading ? true : false
                  }
                  type="submit"
                  className={`px-6 py-2 leading-5 text-orange-600 transition-colors duration-200 transform ${
                    isLoading
                      ? "bg-gray-100"
                      : "bg-white"
                  } rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-600`}
                >
                  {isLoading
                    ? "Loading..."
                    : "Save"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </MainContainer>
  );
}
