import React, { useState } from "react";
import { GeoMap } from "./geoMap";
import Carousel from "./carousel";

export function Hero() {
  const [ismap, setMap] = useState(false);
  const handleMap = () => {
    setMap(!ismap);
  };
  return ismap ? (
    <GeoMap handleMap={handleMap} />
  ) : (
    <div className="h-full lg:h-[100vh] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl sm:leading-none">
              Savor the Flavor,
              <span className="inline-block text-deep-purple-accent-400">
                Anywhere, Anytime!
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Welcome to Cuisine Compass, where
              culinary delights meet convenience!
              Explore a world of delectable dishes
              at your fingertips. Order and
              indulge in a symphony of flavors,
              delivered straight to your door.
              Experience the joy of hassle-free
              dining with Cuisine Compass –
              because great food should be just a
              click away. Join the feast, and let
              your taste buds embark on a journey
              of epic proportions!
            </p>
          </div>
          <button
            onClick={handleMap}
            aria-label=""
            className="inline-flex max-w-[240px] px-2 h-12 mt-3 rounded-md justify-center items-center font-semibold transition-colors duration-200 bg-orange-600 text-white"
          >
            See Nearby Restaurants
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </button>
        </div>
        <div className="relative ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
