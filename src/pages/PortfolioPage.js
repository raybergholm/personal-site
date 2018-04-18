import React from "react";

import TwoColumnLeftContainer from "../components/layout/TwoColumnRightContainer";

import Main from "./portfolio/Main";
import Side from "./portfolio/Side";

const Page = () => (
  <TwoColumnLeftContainer id="main-content-section" side={<Side />} full>
    <Main />
  </TwoColumnLeftContainer>
);

export default Page;