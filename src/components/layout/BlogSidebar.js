import React from "react";

import Foundation from "../foundation/Foundation";

import sidebarEntries from "../../config/sidebarEntries.json";

const { Menu } = Foundation;

const BlogSidebar = () => (
  <div>
    <h4>Archives</h4>
    <Menu items={sidebarEntries} vertical={true} />
  </div>
);

export default BlogSidebar;