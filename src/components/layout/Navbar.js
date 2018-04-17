import React from "react";
import PropTypes from "prop-types";

import { TopBar, Menu } from "../foundation/Foundation";

const createMenu = (brand, items) => {

  let menuItems = [];
  menuItems.push(brand);
  menuItems = menuItems.concat(items);
  
  return (<Menu items={menuItems} />);
};

const Navbar = ({ brand, items }) => (
  <TopBar left={createMenu(brand, items)} />
);

Navbar.propTypes = {
  brand: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default Navbar;