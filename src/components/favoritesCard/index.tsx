import { useContext, useEffect, useMemo } from "react";
import { PokemonContext } from "../../contexts/pokemons";
import { CardItem } from "../cardPokemon/item";
import "./index.css";
import { Link } from "react-router-dom";

export const FavoriteCard = () => {
  const { pokemons, favorites } = useContext(PokemonContext);
  const data = useMemo(() => {
    return pokemons.filter((item) => favorites.includes(String(item.data.id)));
  }, [favorites, pokemons]);
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  if (!favorites.length) {
    return (
      <div className="container-favorites">
        <img src="./Astronaut.png" alt="" />
        <div className="section-favorites">
          <h1>Está meio vazio por aqui!</h1>
          <p>Procure por pokémons para adicioná-los aos seus favoritos.</p>
        </div>
        <Link to={"/search"}>
          <button>Procurar pokémons</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div>
        {data.map((item) => (
          <CardItem item={item} key={item.data.id} />
        ))}
      </div>
    </div>
  );
};
