import { useContext, useEffect, useMemo } from "react";
import { PokemonContext } from "../../contexts/pokemons";
import { CardItem } from "../cardPokemon/item";

export const FavoriteCard = () => {
  const { pokemons, favorites } = useContext(PokemonContext);
  const data = useMemo(() => {
    return pokemons.filter((item) => favorites.includes(String(item.data.id)));
  }, [favorites, pokemons]);
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  if (!favorites.length) {
    return <div>vazio, roxo, infinito, azul e vermelho</div>;
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
