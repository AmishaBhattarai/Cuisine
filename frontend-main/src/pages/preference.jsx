import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { PageHeading } from "../components";
import { usePostPreferencesMutation } from "../app/slice/menuSlice";
import { useGetCuisineQuery } from "../app/slice/preferSlice";

export default function Preference() {
  const [selectedFoods, setSelectedFoods] =
    useState([]);
  const userId = useSelector(
    (state) => state.authReducer.id
  );
  // const userdata = useSelector(
  //   (state) => state.authReducer.cuisines
  // );
  const { data, isloading } =
    useGetCuisineQuery();
  const [postPreferences, { isLoading }] =
    usePostPreferencesMutation();

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const food = e.target.value;
    setSelectedFoods((prevSelectedFoods) => {
      if (isChecked) {
        return [...prevSelectedFoods, food];
      } else {
        return prevSelectedFoods.filter(
          (f) => f !== food
        );
      }
    });
  };

  const handleSubmit = async () => {
    if (selectedFoods.length < 0) {
      toast.warn(
        "Please select at least one preferences to proceed"
      );
    }
    const payload = {
      userId: userId,
      data: selectedFoods,
    };
    try {
      const response =
        await postPreferences(payload).unwrap();
      if (response) {
        toast.success(response?.message);
      }
    } catch (e) {
      toast.error(e.data.message);
    }
  };

  return isloading ? (
    <p>Loading...</p>
  ) : (
    <div
      className={
        "relative h-[66vh] p-8 overflow-scroll"
      }
    >
      <PageHeading heading="Choose Your Favourite Food" />
      <ul className="flex flex-row  flex-wrap p-2 items-center w-full text-sm font-medium text-orange-600 bg-white border border-gray-200 rounded-lg">
        {data &&
          data?.map((c, i) => (
            <li
              key={i}
              className="w-[180px] md:w-[220px] h-[50px] flex flex-col border-b border-gray-200  sm:border overflow-hidden "
            >
              <div className=" flex items-center ps-3">
                <input
                  id={`checkbox-list-${i}`}
                  type="checkbox"
                  name="checkbox"
                  value={c?.id}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 "
                />
                <label className="w-full py-3 ms-2 text-md md:text-lg font-bold text-orange-600 ">
                  {c?.name}
                </label>
              </div>
            </li>
          ))}
      </ul>
      <button
        aria-label=""
        disabled={isLoading ? true : false}
        onClick={handleSubmit}
        className="h-[35px] mr-auto m-8 p-2  rounded-lg border border-orange-700 inline-flex items-center font-semibold transition-colors duration-200 text-orange-600"
      >
        {isLoading ? "Please Wait.." : "Submit"}
      </button>
    </div>
  );
}
