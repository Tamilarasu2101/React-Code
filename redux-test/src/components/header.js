import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const active = { color: "green" };
  return (
    <React.Fragment>
      <NavLink to="/" activeStyle={active} exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="./form" activeStyle={active}>
        Form
      </NavLink>
    </React.Fragment>
  );
}

export default Header;
