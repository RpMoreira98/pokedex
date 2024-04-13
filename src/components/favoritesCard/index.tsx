import { useContext, useMemo, useState } from "react";
import { PokemonContext } from "../../contexts/pokemons";
import { CardItem } from "../cardPokemon/item";
import "./index.css";
import { Link } from "react-router-dom";
import { ModalDetail } from "../modalDetails";

export const FavoriteCard = () => {
  const { pokemons, favorites } = useContext(PokemonContext);
  const [pokemonItem, setPokemonItem] = useState<number | undefined>(undefined);
  const data = useMemo(() => {
    return pokemons.filter((item) => favorites.includes(String(item.data.id)));
  }, [favorites, pokemons]);
  const quantityOfPokemons = data.length;
  const textPokemon = quantityOfPokemons === 1 ? "pokémon" : "pokémons";
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
      <h1 className="quantity">
        Olá, você tem {quantityOfPokemons} {textPokemon} salvo
        {quantityOfPokemons === 1 ? "" : "s"}!
      </h1>
      <div className="item-card-favorites">
        {data.map((item) => (
          <CardItem
            item={item}
            setPokemonId={setPokemonItem}
            key={item.data.id}
          />
        ))}
      </div>
      {pokemonItem && (
        <ModalDetail
          open={Boolean(pokemonItem)}
          closeModal={() => setPokemonItem(undefined)}
          pokemonId={pokemonItem}
        />
      )}
    </div>
  );
};
