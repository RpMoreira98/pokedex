export type Pokemon = {
  data: {
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    types: {
      type: {
        name: PokemonTypes;
      };
    }[];
    sprites: {
      back_default: string;
      front_default: string;
    };
  };
};

export type PokemonTypes =
  | "fire"
  | "water"
  | "grass"
  | "flying"
  | "fighting"
  | "poison"
  | "electric"
  | "ground"
  | "rock"
  | "psychic"
  | "ice"
  | "bug"
  | "ghost"
  | "steel"
  | "dragon"
  | "dark"
  | "fairy"
  | "normal"
  | "Todos";
