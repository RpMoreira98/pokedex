import { Link, Outlet, useLocation } from "react-router-dom";
import "./header.css";
import { RxExit } from "react-icons/rx";
import { useContext, useEffect, useMemo, useState } from "react";
import { PokemonContext } from "../../contexts/pokemons";
export const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const { favorites, pokemons } = useContext(PokemonContext);
  const data = useMemo(() => {
    return pokemons.filter((item) => favorites.includes(String(item.data.id)));
  }, [favorites, pokemons]);
  const quantityPk = data.length;
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
              <h1>
                Favoritos{" "}
                {quantityPk > 0 && (
                  <span className="favorites-number">{quantityPk}</span>
                )}
              </h1>
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
