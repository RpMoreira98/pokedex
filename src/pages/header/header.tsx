import { Link, Outlet, useLocation } from "react-router-dom";
import "./header.css";
import { RxExit } from "react-icons/rx";
import { useEffect, useState } from "react";
export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <header className="header-main">
      <nav className="menu">
        <div className="menu-div">
          <img src="./pokemon-log.png" alt="" />
          <div className="nav-bar">
            <Link
              to={"/favorites"}
              className={`nav-bar-link ${
                activeLink === "/favorites" ? "active" : ""
              }`}
            >
              <h1>Favoritos</h1>
            </Link>
            <Link
              to={"/search"}
              className={`nav-bar-link ${
                activeLink === "/search" ? "active" : ""
              }`}
            >
              <h1>Procurar</h1>
            </Link>
            <Link
              to={"/seeall"}
              className={`nav-bar-link ${
                activeLink === "/seeall" ? "active" : ""
              }`}
            >
              <h1>Ver todos</h1>
            </Link>
          </div>
          <Link to={"/"} className="button-exit">
            <button>
              Sair{" "}
              <RxExit style={{ backgroundColor: "#FFCB05" }} color="#1E1E1F" />
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};
