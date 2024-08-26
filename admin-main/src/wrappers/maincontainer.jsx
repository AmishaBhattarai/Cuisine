import React from "react";
import { mainContainerProps } from "./props/mainContainer";

export function MainContainer({
  children,
  className,
}) {
  return (
    <div
      className={
        " w-full max-w-screen top-0" + className
      }
    >
      {children}
    </div>
  );
}

MainContainer.propTypes = mainContainerProps;
