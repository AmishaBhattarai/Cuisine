import { useFormik } from "formik";
import { toast } from "react-toastify";
import { menuProps } from "./props/menuProps";
import { useDeleteCuisineMutation } from "../api/slice/cuisineSlice";

const DeleteCuisine = ({ setpopup, dta }) => {
  const initialValues = {
    id: dta.id,
  };
  const [deleteMenu, { isLoading }] =
    useDeleteCuisineMutation();
  const { handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (values, action) => {
      const payload = { ...values };
      try {
        const response =
          await deleteMenu(payload).unwrap();
        if (response) {
          console.log(response);
          toast.success(
            "Cuisine deleted successfully"
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
      <div className="grid grid-cols-5 gap-8 sm:w-[300px] md:w-[600px]">
        <div className="col-span-5">
          <div className="rounded-sm border border-stroke bg-orange-50 shadow-default ">
            <div className="border-b border-stroke py-4 px-7 ">
              <h3 className="font-medium text-black ">
                Cuisine Delete
              </h3>
            </div>
            <div className="flex text-red-400 justify-center items-center p-4">
              Are you sure you want to delete?
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setpopup(false);
                  }}
                  className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1  "
                  type="button"
                >
                  Cancel
                </button>
                <button
                  disabled={
                    isLoading ? true : false
                  }
                  className="flex justify-center rounded text-white py-2 px-6 font-medium bg-red-500 hover:bg-opacity-95"
                  type="submit"
                >
                  {isLoading
                    ? "Loading..."
                    : "Delete"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCuisine;
DeleteCuisine.propTypes = menuProps;
