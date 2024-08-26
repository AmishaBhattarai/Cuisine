import { useFormik } from "formik";
import { toast } from "react-toastify";
import { usePutCuisineEditMutation } from "../api/slice/cuisineSlice";
import { cuisineProps } from "./props/cusineProps";

const EditCuisine = ({ setpopup, data }) => {
  const initialValues = {
    id: data?.id,
    name: data?.name,
    description: data?.description,
  };
  const [postCuisineRegister, { isLoading }] =
    usePutCuisineEditMutation();
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
          await postCuisineRegister(
            payload
          ).unwrap();
        console.log(response);
        if (response) {
          console.log(response);
          toast.success(
            "Cuisine Edited successfully"
          );
          action.resetForm();
          setpopup(false);
        } else {
          toast.success("Something went wrong!");
        }
      } catch (err) {
        toast.error(`${err.data.message}`);
      }
    },
  });
  return (
    <div className="fixed h-screen overflow-scroll inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 ">
      <form
        className="w-[600px] bg-white rounded-md p-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
          Edit Cuisine
        </h1>
        <div className="mb-5.5 flex flex-col gap-4">
          <div className="w-full sm:w-1/2">
            <label
              className="mb-3 block text-sm font-medium text-black "
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="w-[200px] rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={0}
                placeholder="Name"
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
                className="w-[300px] rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                name="description"
                id="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={1}
                placeholder="Write description here"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end pt-8 gap-4">
            <button
              onClick={() => {
                setpopup(false);
              }}
              className="flex h-12 justify-center items-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-md"
              type="button"
            >
              Cancel
            </button>
            <button
              disabled={isLoading ? true : false}
              className="flex h-12 justify-center items-center rounded px-6 font-medium bg-green-500 hover:bg-opacity-95"
              type="submit"
            >
              {isLoading ? "Loading..." : "Edit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCuisine;

EditCuisine.propTypes = cuisineProps;
