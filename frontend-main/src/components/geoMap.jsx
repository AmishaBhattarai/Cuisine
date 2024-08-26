// import React, {
//   useEffect,
//   useState,
// } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import PropTypes from "prop-types";
// import { toast } from "react-toastify";
// import { Icon } from "leaflet";
// import { locations } from "../data/locations";
// import { geoProps } from "./props/geoMap";
// import { Link } from "react-router-dom";
// import { IoFastFood } from "react-icons/io5";
// import { IoIosWine } from "react-icons/io";
// import { allowedRoutes } from "../config/routes";
// import axiosInstance from "../functions/interceptor";
// import { BsCarFrontFill } from "react-icons/bs";

// export function GeoMap({ handleMap }) {
//   const [restaurant, setRestaurant] = useState(
//     JSON.parse(
//       sessionStorage.getItem("location")
//     ) || null
//   );
//   const position = [27.712021, 85.31295];
//   const icon = new Icon({
//     iconUrl:
//       "https://th.bing.com/th/id/R.98930f0bb073c0fa078eecf278c1b858?rik=whWj9pMmb1jM%2bg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f05%2fMap-Marker-PNG-HD.png&ehk=yVIDQps8Wvb7YRJMcSSZC1C2v0hbRFNsAi4q9%2fn%2fmdY%3d&risl=&pid=ImgRaw&r=0",
//     iconSize: [30, 30],
//   });

//   useEffect(() => {
//     setRestaurant(
//       JSON.parse(
//         sessionStorage.getItem("location")
//       ) || null
//     );
//   }, []);

//   return (
//     <div className="mt-4 md:mt-0">
//       <button
//         onClick={handleMap}
//         aria-label=""
//         className="h-[35px] m-2 p-2 rounded-lg border border-orange-700 inline-flex items-center font-semibold transition-colors duration-200 text-orange-600"
//       >
//         <svg
//           className="inline-block w-3 mr-2 rotate-180"
//           fill="currentColor"
//           viewBox="0 0 12 12"
//         >
//           <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
//         </svg>
//         Exit
//       </button>
//       <div className="w-full flex flex-col md:flex-row p-4">
//         <div className="md:w-1/6 md:h-[80vh] h-full overflow-scroll mx-4">
//           <h2
//             className="text-lg font-semibold text-gray-900"
//             id="slide-over-title"
//           >
//             Restaurant Near Me
//           </h2>
//           <p className="text-sm italic">
//             {restaurant
//               ? `${restaurant?.length} restaurants found`
//               : `No restaurants found nearby.`}
//           </p>
//           {restaurant &&
//             restaurant.map((r) => (
//               <li
//                 className="flex pt-6 pb-4 border border-[#ccc] rounded-xl my-7"
//                 key={r?.id}
//               >
//                 <div className="px-4 gap-3 flex flex-1 flex-col">
//                   <div className="flex flex-wrap gap-8 items-center">
//                     <div className=" flex gap-2 text-3xl font-semibold text-gray-900">
//                       <h3 className="text-4xl">
//                         <p>{r?.name}</p>
//                       </h3>
//                     </div>
//                     <p className="mt-1 text-lg font-semibold text-gray-500">
//                       {r?.distance} mi
//                     </p>
//                   </div>
//                   <div className="flex flex-col text-sm">
//                     <span className="text-base">
//                       {r?.address}
//                     </span>
//                   </div>
//                   <div className="flex gap-2 items-center">
//                     <BsCarFrontFill className="text-orange-800 text-3xl" />
//                     <IoFastFood className="text-orange-800 text-3xl" />
//                     <IoIosWine className="text-orange-800 text-3xl" />
//                   </div>
//                   <Link
//                     to={`/cuisine/compass/restaurants/menu/${r?.name}/${r?.id}`}
//                     className="w-3/4 bg-orange-800 hover:bg-orange-700 text-center rounded-md py-1 font-semibold text-white"
//                     onClick={() => {}}
//                   >
//                     View Menu
//                   </Link>
//                 </div>
//               </li>
//             ))}
//         </div>
//         <div className="md:w-5/6 rounded-lg border-4 border-orange-500">
//           <MapContainer
//             className="w-full h-[80vh] rounded-2xl "
//             center={position}
//             zoom={16}
//             style={{ position: "sticky" }}
//             preferCanvas={true}
//             attributionControl={false}
//             scrollWheelZoom={false}
//           >
//             <LocationFinderDummy
//               setRestaurant={setRestaurant}
//             />
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {locations.map((restaura, index) => (
//               <Marker
//                 key={index}
//                 position={[
//                   restaura.location.lat,
//                   restaura.location.lon,
//                 ]}
//                 icon={icon}
//               >
//                 <Popup>
//                   <Link
//                     to={
//                       allowedRoutes.menu +
//                       `/${restaura.name}/${restaura.tag}`
//                     }
//                   >
//                     <h1>{restaura.name}</h1>
//                     <p>{restaura.tag}</p>
//                   </Link>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// GeoMap.propTypes = geoProps;

// const LocationFinderDummy = ({
//   setRestaurant,
// }) => {
//   useMapEvents({
//     click(e) {
//       axiosInstance
//         .get(
//           `/api/restaurant/getRestaurant/${e.latlng.lat}/${e.latlng.lng}`
//         )
//         .then((res) => {
//           if (res && res?.data.length < 0) {
//             toast.success(
//               "Sorry No restaurants available near you.",
//               {
//                 position: "top-center",
//               }
//             );
//           }
//           if (res && res?.data?.length > 0) {
//             sessionStorage.setItem(
//               "location",
//               JSON.stringify(res?.data)
//             );
//             setRestaurant(res?.data); // Update restaurant state immediately
//             toast.success(
//               "See your Nearby Restaurants",
//               {
//                 position: "top-center",
//               }
//             );
//           }
//         })
//         .catch((e) => {
//           toast.error(e.message);
//         });
//     },
//   });
//   return null;
// };
// LocationFinderDummy.propTypes = {
//   setRestaurant: PropTypes.func.isRequired,
// };
import React, {
  useEffect,
  useState,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Icon } from "leaflet";
// import { locations } from "../data/locations";
import { geoProps } from "./props/geoMap";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { IoIosWine } from "react-icons/io";
// import { allowedRoutes } from "../config/routes";
import axiosInstance from "../functions/interceptor";
import { BsCarFrontFill } from "react-icons/bs";

export function GeoMap({ handleMap }) {
  const [restaurant, setRestaurant] = useState(
    JSON.parse(
      sessionStorage.getItem("location")
    ) || null
  );
  const position = [27.712021, 85.31295];

  const icon = new Icon({
    iconUrl:
      "https://th.bing.com/th/id/R.98930f0bb073c0fa078eecf278c1b858?rik=whWj9pMmb1jM%2bg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f05%2fMap-Marker-PNG-HD.png&ehk=yVIDQps8Wvb7YRJMcSSZC1C2v0hbRFNsAi4q9%2fn%2fmdY%3d&risl=&pid=ImgRaw&r=0",
    iconSize: [30, 30],
  });

  useEffect(() => {
    setRestaurant(
      JSON.parse(
        sessionStorage.getItem("location")
      ) || null
    );
  }, []);

  return (
    <div className="mt-4 md:mt-0">
      <button
        onClick={handleMap}
        aria-label=""
        className="h-[35px] m-2 p-2 rounded-lg border border-orange-700 inline-flex items-center font-semibold transition-colors duration-200 text-orange-600"
      >
        <svg
          className="inline-block w-3 mr-2 rotate-180"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </svg>
        Exit
      </button>
      <div className="w-full flex flex-col md:flex-row p-4">
        <div className="md:w-1/6 md:h-[80vh] h-full overflow-scroll mx-4">
          <h2
            className="text-lg font-semibold text-gray-900"
            id="slide-over-title"
          >
            Restaurant Near Me
          </h2>
          <p className="text-sm italic">
            {restaurant
              ? `${restaurant?.length} restaurants found`
              : `No restaurants found nearby.`}
          </p>
          {restaurant &&
            restaurant?.map((r) => (
              <li
                className="flex pt-6 pb-4 border border-[#ccc] rounded-xl my-7"
                key={r?.id}
              >
                <div className="px-4 gap-3 flex flex-1 flex-col">
                  <div className="flex flex-wrap gap-8 items-center">
                    <div className=" flex gap-2 text-3xl font-semibold text-gray-900">
                      <h3 className="text-4xl">
                        <p>{r?.name}</p>
                      </h3>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-gray-500">
                      {r?.distance} mi
                    </p>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-base">
                      {r?.address}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BsCarFrontFill className="text-orange-800 text-3xl" />
                    <IoFastFood className="text-orange-800 text-3xl" />
                    <IoIosWine className="text-orange-800 text-3xl" />
                  </div>
                  <Link
                    to={`/cuisine/compass/restaurants/menu/${r?.name}/${r?.id}`}
                    className="w-3/4 bg-orange-800 hover:bg-orange-700 text-center rounded-md py-1 font-semibold text-white"
                  >
                    View Menu
                  </Link>
                </div>
              </li>
            ))}
        </div>
        <div className="md:w-5/6 rounded-lg border-4 border-orange-500">
          <MapContainer
            className="w-full h-[80vh] rounded-2xl "
            center={position}
            zoom={16}
            style={{ position: "sticky" }}
            preferCanvas={true}
            attributionControl={false}
            scrollWheelZoom={false}
          >
            <LocationFinderDummy
              setRestaurant={setRestaurant}
            />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {restaurant ? (
              restaurant?.map(
                (restaura, index) => (
                  <Marker
                    key={index}
                    position={[
                      restaura?.latitude,
                      restaura?.longitude,
                    ]}
                    icon={icon}
                  >
                    <Popup>
                      <Link
                        to={
                          "/cuisine/compass/restaurants/menu" +
                          `/${restaura?.name}/${restaura?.id}`
                        }
                      >
                        <h1>{restaura?.name}</h1>
                      </Link>
                    </Popup>
                  </Marker>
                )
              )
            ) : (
              <Marker
                position={position}
                icon={icon}
              >
                <Popup>
                  <Link
                    to={
                      "/cuisine/compass/restaurants"
                    }
                  >
                    <h1>
                      {"Click on Map to proceed"}
                    </h1>
                  </Link>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

GeoMap.propTypes = geoProps;

const LocationFinderDummy = ({
  setRestaurant,
}) => {
  useMapEvents({
    click(e) {
      axiosInstance
        .get(
          `/api/restaurant/getRestaurant/${e.latlng.lat}/${e.latlng.lng}`
        )
        .then((res) => {
          if (res && res?.data.length < 0) {
            toast.success(
              "Sorry No restaurants available near you.",
              {
                position: "top-center",
              }
            );
          }
          if (res && res?.data?.length > 0) {
            sessionStorage.setItem(
              "location",
              JSON.stringify(res?.data)
            );
            setRestaurant(res?.data); // Update restaurant state immediately
            toast.success(
              "See your Nearby Restaurants",
              {
                position: "top-center",
              }
            );
          }
        })
        .catch((e) => {
          toast.error(e.message);
        });
    },
  });
  return null;
};
LocationFinderDummy.propTypes = {
  setRestaurant: PropTypes.func.isRequired,
};
