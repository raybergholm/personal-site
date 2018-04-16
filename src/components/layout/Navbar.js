import React from "react";
import PropTypes from "prop-types";

import TopBar from "../foundation/TopBar";
import Menu from "../foundation/Menu";

const createMenu = (brand, items) => {
  const menuItems = [];
  menuItems.concat(brand);
  menuItems.concat(items);
  return (<Menu items={menuItems} />);
};

const MyNavbar = ({ brand, items }) => (
  <TopBar left={createMenu(brand, items)} />
);

MyNavbar.propTypes = {
  brand: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default MyNavbar;