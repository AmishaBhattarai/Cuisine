import { useFormik } from "formik";
import { toast } from "react-toastify";
import { usePostCuisineRegisterMutation } from "../api/slice/cuisineSlice";

const CreateCuisine = () => {
  const initialValues = {
    name: "",
    description: "",
  };
  const [postCuisineRegister, { isLoading }] =
    usePostCuisineRegisterMutation();
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
            "Cuisine Added successfully"
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
    <form
      className="w-[600px]"
      onSubmit={handleSubmit}
    >
      <div className="mb-5.5 flex flex-col gap-4 sm:flex-row">
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
            {isLoading ? "Loading..." : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateCuisine;
