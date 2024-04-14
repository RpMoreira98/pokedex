import { createContext, useEffect, useMemo, useState } from "react";
import { Pokemon } from "../types";
import axios from "axios";

type PokemonContextProps = {
  loading: boolean;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PokemonContext = createContext<PokemonContextProps>({
  loading: false,
  pokemons: [],
  setPokemons: () => {},
  favorites: [],
  setFavorites: () => {},
});

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);

      const endpoints = [];

      for (let i = 1; i < 25; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }

      const response = await axios.all<Pokemon>(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      setPokemons(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const value = useMemo(() => {
    return {
      loading,
      pokemons,
      setPokemons,
      favorites,
      setFavorites,
    };
  }, [favorites, loading, pokemons]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
