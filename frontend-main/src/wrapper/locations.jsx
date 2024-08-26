import { Outlet } from "react-router-dom";
import LocationSide from "../components/locationSide";

export default function RootLayout() {
  return (
    <>
      {loading ? (
        <p>Laoding..</p>
      ) : (
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-2/6 w-full bg-main">
            <LocationSide />
          </div>
          <div className="lg:w-4/6 w-full">
            {Outlet}
          </div>
        </div>
      )}
    </>
  );
}
