import React from "react";

import Foundation from "../foundation/Foundation";

import sidebarEntries from "../../config/sidebarEntries.json";

const { Menu } = Foundation;

const BlogSidebar = () => (
  <menu>
    <h4>Archives</h4>
    <Menu items={sidebarEntries} vertical={true} />
  </menu>
);

export default BlogSidebar;