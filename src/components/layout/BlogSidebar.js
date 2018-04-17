import React from "react";

import ArchiveMenu from "./sidebar/ArchiveMenu";
import SearchPanel from "./sidebar/SearchPanel";

import sidebarEntries from "../../config/sidebarEntries.json";


const BlogSidebar = () => (
  <menu data-sticky-container>
    <div className="sticky" data-sticky data-options="marginTop:4;" data-top-anchor="app-header:bottom" data-bottom-anchor="app-footer:top">
      <SearchPanel action={null} />
      <ArchiveMenu items={sidebarEntries} />
    </div>
  </menu>
);

export default BlogSidebar;