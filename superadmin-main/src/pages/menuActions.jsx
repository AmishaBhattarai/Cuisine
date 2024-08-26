import { useFormik } from "formik";
import { toast } from "react-toastify";
import { usePostRestaurantRegisterMutation } from "../api/slice/restaurantSlice";


const Create = () => {
  const initialValues = {
    name: "",
    latitude: 0,
    longitude: 0,
    website: "",
    phoneNumber: "",
    image: "",
    address: 1,
    description: "",
    email: "",
  };

  const [postRestaurantRegister, { isLoading }] =
    usePostRestaurantRegisterMutation();
  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      const payload = { ...values };
      console.log("Payload", payload);
      try {
        const response =
          await postRestaurantRegister(
            payload
          ).unwrap();
        console.log(response);
        if (response) {
          console.log(response);
          toast.success(
            "Restaurant added successfully"
          );
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
    <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5">
            <div className="rounded-sm border border-stroke bg-orange-50 shadow-default ">
              <div className="border-b border-stroke py-4 px-7 ">
                <h3 className="font-medium text-black ">
                  Restaurant Creation
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <div className="relative">
                        <label
                          className="mb-3 block text-sm font-medium text-black "
                          htmlFor="website"
                        >
                          Restaurant Website
                        </label>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          value={values.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="name"
                      >
                        Restaurant Name
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        placeholder="Restaurant Name"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      className="mb-3 block text-sm font-medium text-black "
                      htmlFor="name"
                    >
                      Restaurant Email
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                      placeholder="Restaurant Email"
                    />
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="price"
                      >
                        Latitude
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                          type="number"
                          name="latitude"
                          id="latitude"
                          value={values.latitude}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={0}
                          placeholder="Add Latitude"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="stock"
                      >
                        Longitude
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="number"
                        name="longitude"
                        id="longitude"
                        value={values.longitude}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={0}
                        placeholder="Longitude"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black "
                      htmlFor="price"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={0}
                        placeholder="Add Phone"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black "
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={6}
                        placeholder="Write Your Product description here"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full ">
                    <label
                      className="mb-3 block text-sm font-medium text-black "
                      htmlFor="stock"
                    >
                      Image Url
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                      type="text"
                      name="image"
                      id="image"
                      value={values.image}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Image Url"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      className="mb-3 block text-sm font-medium text-black "
                      htmlFor="price"
                    >
                      Address
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="text"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Add Res Address"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1  "
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={
                        isLoading ? true : false
                      }
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium bg-green-500 hover:bg-opacity-95"
                      type="submit"
                    >
                      {isLoading
                        ? "Loading..."
                        : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
