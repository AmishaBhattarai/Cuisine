import { useFormik } from "formik";
import { toast } from "react-toastify";
import { usePostMenuRegisterMutation } from "../api/slice/menuSlice";

const Create = () => {
  const initialValues = {
    name: "",
    price: 0,
    model3dUrl: "",
    imageUrl: "",
    cuisineId: 1,
    id: 1,
    description: "",
    menuType: "",
  };
  const [postMenuRegister, { isLoading }] =
    usePostMenuRegisterMutation();
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
          await postMenuRegister(
            payload
          ).unwrap();
        console.log(response);
        if (response) {
          console.log(response);
          toast.success(
            "Menu added successfully"
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
                  Menu Creation
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <div className="relative">
                        <label
                          className="mb-3 block text-sm font-medium text-black "
                          htmlFor="catagory"
                        >
                          Menu Catagory
                        </label>
                        <select
                          name="menuType"
                          id="menuType"
                          value={values.menuType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                        >
                          <option
                            value={"VEGETARIAN"}
                          >
                            VEGETARIAN
                          </option>
                          <option
                            value={
                              "NON_VEGETARIAN"
                            }
                          >
                            NON_VEGETARIAN
                          </option>
                          <option value={"VEGAN"}>
                            VEGAN
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="name"
                      >
                        Menu Name
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="name"
                        placeholder="Product Name"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none  "
                          type="number"
                          name="price"
                          id="Price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={0}
                          placeholder="Add Price"
                        />
                      </div>
                    </div>
                    
                    

                    {/* <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="stock"
                      >
                        Stock Quantity
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="number"
                        name="stock"
                        id="stock"
                        value={"stock"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Stock Quantity"
                      />
                    </div> */}
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
                      name="imageUrl"
                      id="imageUrl"
                      value={values.imageUrl}
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
                      Add 3D Image
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                        type="text"
                        name="model3dUrl"
                        id="model3dUrl"
                        value={values.model3dUrl}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={0}
                        placeholder="Add 3D URL"
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
