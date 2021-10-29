import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "./navigation/Navigation";
import { header, logo } from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={header}>
      <Link
        to={mainRoutes[0].path}
        exact={mainRoutes[0].exact}
        className={logo}>
        Task manager
      </Link>
      <Navigation routes={mainRoutes} />
    </header>
  );
};

export default Header;
