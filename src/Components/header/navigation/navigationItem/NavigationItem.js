import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
  navListItem,
  navItemLink,
  navItemLinkActive,
} from "./NavigationItem.module.css";

const NavigationItem = ({ name, path, exact, match }) => {
  return (
    <li className={navListItem} key={path}>
      <NavLink
        to={match.url === "/" ? path : match.url + path} // /tasks+ /create
        className={navItemLink}
        activeClassName={navItemLinkActive}
        exact={exact}>
        {name}
      </NavLink>
    </li>
  );
};

export default withRouter(NavigationItem);
