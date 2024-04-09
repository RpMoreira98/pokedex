import { useContext, useEffect, useState } from "react";
import { Pokemon } from "../../types";
import "../cardPokemon/index.css";
import { PokemonContext } from "../../contexts/pokemons";
import { ModalDetail } from "../modalDetails";
import { CardItem } from "../cardPokemon/item";

type Props = {
  searchTerm: string;
};

export const CardPokemonSearch = ({ searchTerm }: Props) => {
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const { pokemons } = useContext(PokemonContext);
  const [pokemonId, setPokemonId] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filtered = pokemons.filter((item) =>
        item.data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon([]);
    }
  }, [searchTerm, pokemons]);

  return (
    <div className="card-information">
      {filteredPokemon.map((item) => (
        <CardItem item={item} setPokemonId={setPokemonId} key={item.data.id} />
      ))}
      {pokemonId && (
        <ModalDetail
          open={Boolean(pokemonId)}
          closeModal={() => setPokemonId(undefined)}
          pokemonId={pokemonId}
        />
      )}
    </div>
  );
};
