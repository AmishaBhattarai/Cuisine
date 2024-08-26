 import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin"
      ></div>
    </div>
  );
}
