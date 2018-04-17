import React from "react";

import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import sidebarEntries from "../../config/sidebarEntries.json";


const BlogSidebar = () => (
  <menu data-sticky-container>
    <div data-sticky>
      <SearchPanel action={null} />
      <ArchiveMenu items={sidebarEntries} />
    </div>
  </menu>
);

export default BlogSidebar;