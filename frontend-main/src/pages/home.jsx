import React from "react";

import { MainContainer } from "../wrapper";
import {
  About,
  Hero,
  MoreAbout,
  Parellex,
  Reviews,
} from "../components";

export function Home() {
  return (
    <MainContainer className={"bg-orange-50"}>
      {/* <GeoMap /> */}
      <Hero />
      <Parellex />
      <About />
      <MoreAbout />
      <Reviews />
    </MainContainer>
  );
}
