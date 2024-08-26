import React from "react";
import { pageHeadingProps } from "./props/pageHeading";

export function PageHeading({
  heading,
  location,
}) {
  return (
    <div className="relative flex py-5 w-full items-center">
      <div className="flex-grow border-t border-orange-400"></div>
      <span className="flex flex-col flex-shrink text-4xl justify-center items-center mx-4 text-orange-600">
        {heading}
        {location && (
          <p>
            <span className="text-orange-600 font-thin text-xl">
              ({location})
            </span>
          </p>
        )}
      </span>
      <div className="flex-grow border-t border-orange-400"></div>
    </div>
  );
}
PageHeading.propTypes = pageHeadingProps;
