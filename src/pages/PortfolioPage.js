import React from "react";

import { OffCanvas } from "../components/foundation/Foundation";

import Main from "./portfolio/Main";
import Side from "./portfolio/Side";

const Page = () => (
  <OffCanvas direction="left" 
    mainContent={<Main />}
    sideContent={<Side />}/>
);

export default Page;