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
      <NavLink to="./about" activeStyle={active}>
        About
      </NavLink>{" "}
      |{" "}
      <NavLink to="./services" activeStyle={active}>
        Services
      </NavLink>{" "}
      |{" "}
      <NavLink to="./courses" activeStyle={active}>
        Courses
      </NavLink>{" "}
      |{" "}
      <NavLink to="./hooks" activeStyle={active}>
        Hooks
      </NavLink>
      |{" "}
      <NavLink to="./UrlParams" activeStyle={active}>
        Url Params
      </NavLink>{" "}
      |{" "}
      <NavLink to="./addProduct" activeStyle={active}>
        Form
      </NavLink>
      |{" "}
      <NavLink to="./api" activeStyle={active}>
        Order Api
      </NavLink>
      |{" "}
      <NavLink to="./ProductApi" activeStyle={active}>
        Product Api
      </NavLink>
      |{" "}
      <NavLink to="./CustomerApi" activeStyle={active}>
        Customer Api
      </NavLink>
      |{" "}
      <NavLink to="./Redux" activeStyle={active}>
        Redux Example
      </NavLink>
    </React.Fragment>
  );
}

export default Header;
