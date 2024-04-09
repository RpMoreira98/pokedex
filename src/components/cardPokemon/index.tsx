import { useContext, useMemo, useState } from "react";
import "./index.css";
import { PokemonContext } from "../../contexts/pokemons";
import { ModalDetail } from "../modalDetails";
import { PokemonTypes } from "../../types";
import { CardItem } from "./item";

export const CardPokemon = () => {
  const { pokemons } = useContext(PokemonContext);
  const [pokemonId, setPokemonId] = useState<number | undefined>(undefined);
  const filtered = pokemons
    .map((item) => item.data.types.map((e) => e.type.name))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);
  filtered.unshift("Todos");

  const [selectedType, setSelectedType] = useState<PokemonTypes>("Todos");

  const umnome = useMemo(() => {
    if (selectedType === "Todos") {
      return pokemons;
    }
    return selectedType
      ? pokemons.filter((item) =>
          item.data.types.some(
            (itemType) => itemType.type.name === selectedType
          )
        )
      : pokemons;
  }, [pokemons, selectedType]);

  return (
    <div className="card-pokemon">
      <div className="buttons-types">
        {filtered.map((pokemonType) => (
          <button
            key={pokemonType}
            onClick={() => setSelectedType(pokemonType)}
            data-active={selectedType === pokemonType}
          >
            {pokemonType.charAt(0).toLocaleUpperCase() + pokemonType.slice(1)}
          </button>
        ))}
      </div>
      <div className="card-information">
        {umnome.map((item) => (
          <CardItem
            item={item}
            setPokemonId={setPokemonId}
            key={item.data.id}
          />
        ))}
        {pokemonId && (
          <ModalDetail
            open={Boolean(pokemonId)}
            closeModal={() => setPokemonId(undefined)}
            pokemonId={pokemonId}
          />
        )}
      </div>
    </div>
  );
};
