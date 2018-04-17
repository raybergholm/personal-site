import React from "react";

import Foundation from "../foundation/Foundation";

import sidebarEntries from "../../config/sidebarEntries.json";

const { Menu } = Foundation;

const BlogSidebar = () => (
  <menu data-sticky-container>
    <div data-sticky>
      <h4>Search</h4>
      <input placeholder="search..." />
      <h4>Archives</h4>
      <Menu items={sidebarEntries} vertical={true} />
    </div>
  </menu>
);

export default BlogSidebar;