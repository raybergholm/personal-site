import React from "react";
import PropTypes from "prop-types";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const createNav = (items) => (
  <Nav>
    {items.map(({type, payload}) => {
      switch(type) {
        case "item":
          return <NavItem key={payload.key} eventKey={payload.key} href={payload.link}>
            {payload.text}
          </NavItem>;
        case "dropdown":
          return <NavDropdown key={payload.key} eventKey={payload.key} title={payload.title}>
            {payload.menuItems.map(({menuItemKey, text}) => (<MenuItem key={menuItemKey} eventKey={menuItemKey}>{text}</MenuItem>))}
          </NavDropdown>;
      }
    })}
  </Nav>
);

const MyNavbar = ({ brand, items }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href={brand.link}>{brand.text}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {createNav(items)}
    </Navbar.Collapse>
  </Navbar>
);

MyNavbar.propTypes = {
  brand: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default MyNavbar;