import React from "react";

import TwoColumnLeftContainer from "../components/layout/TwoColumnLeftContainer";

import Main from "./portfolio/Main";
import Side from "./portfolio/Side";

const Page = () => (
  <TwoColumnLeftContainer id="main-content-section" side={<Side />} full padding>
    <Main />
  </TwoColumnLeftContainer>
);

export default Page;