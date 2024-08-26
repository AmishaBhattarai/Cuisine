import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function MainWrapper() {
  return (
    <div>
      <div className="relative z-10">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
