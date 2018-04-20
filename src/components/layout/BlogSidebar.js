import React from "react";

import QuickLinksMenu from "./sidebar/QuickLinksMenu";
import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import { Sticky } from "../foundation/Foundation";

import quickLinks from "../../config/quickLinks.json";
import archiveLinks from "../../config/archiveLinks.json";

const stickyConfig = {
  "data-options": "marginTop:4;",
  "data-top-anchor": "app-header:bottom",
  "data-bottom-anchor": "app-footer:top"
};

const BlogSidebar = () => (
  <menu data-sticky-container>
    <Sticky {...stickyConfig}>
      <SearchPanel action={null} />
      <QuickLinksMenu items={quickLinks} />
      <ArchiveMenu items={archiveLinks} />
    </Sticky>
  </menu>
);

export default BlogSidebar;