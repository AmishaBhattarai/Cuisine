import React from "react";
import { mainContainerProps } from "./props/mainContainer";

export default function MainContainer({
  children,
  className,
}) {
  return (
    <div
      className={
        "antialiased my-28 w-full h-full bg-default text-gray-400 font-inter p-10" +
        className
      }
    >
      <div className="container px-4 mx-auto">
        {children}
      </div>
    </div>
  );
}
MainContainer.propTypes = mainContainerProps;
