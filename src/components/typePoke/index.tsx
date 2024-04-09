import { PokemonTypes } from "../../types";
const typesPokemons = {
  fire: {
    background: "#FF3326",
    color: "#fffafa",
  },
  water: {
    background: "blue",
    color: "#fffafa",
  },
  grass: {
    background: "green",
    color: "#fffafa",
  },
  flying: {
    background: "lightblue",
    color: "black",
  },
  fighting: {
    background: "orange",
    color: "black",
  },
  poison: {
    background: "purple",
    color: "#fffafa",
  },
  electric: {
    background: "#FFCB05",
    color: "black",
  },
  ground: {
    background: "brown",
    color: "#fffafa",
  },
  rock: {
    background: "gray",
    color: "white",
  },
  psychic: {
    background: "pink",
    color: "black",
  },
  ice: {
    background: "lightblue",
    color: "black",
  },
  bug: {
    background: "green",
    color: "#fffafa",
  },
  ghost: {
    background: "purple",
    color: "#fffafa",
  },
  steel: {
    background: "gray",
    color: "black",
  },
  dragon: {
    background: "darkblue",
    color: "#fffafa",
  },
  dark: {
    background: "black",
    color: "#fffafa",
  },
  fairy: {
    background: "pink",
    color: "black",
  },
  normal: {
    background: "#FFCB05",
    color: "black",
  },
  Todos: {
    background: "#FFF",
    color: "#000",
  },
};

export type PropsType = {
  item: Partial<PokemonTypes>;
};

export const PokemonType = ({ item }: PropsType) => {
  const pokemon = typesPokemons[item];
  return (
    <li style={{ background: pokemon.background, color: pokemon.color }}>
      {item}
    </li>
  );
};
