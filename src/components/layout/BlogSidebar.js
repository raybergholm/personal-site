import React from "react";

import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import { Sticky } from "../foundation/Foundation";

import sidebarEntries from "../../config/sidebarEntries.json";

const stickyConfig = {
  "data-options": "marginTop:4;",
  "data-top-anchor": "app-header-banner:bottom",
  "data-bottom-anchor": "app-footer:top"
};

const BlogSidebar = () => (
  <menu data-sticky-container>
    <Sticky stickyConfig={stickyConfig}>
      <SearchPanel action={null} />
      <ArchiveMenu items={sidebarEntries} />
    </Sticky>
  </menu>
);

export default BlogSidebar;