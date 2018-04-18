import React from "react";

import FlexColumnContainer from "../components/layout/FlexColumnContainer";

import Main from "./portfolio/Main";
import Side from "./portfolio/Side";

const Page = () => (
  <FlexColumnContainer full mainContent={<Main />} leftContent={<Side />} />
);

export default Page;