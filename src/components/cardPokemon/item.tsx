import { Pokemon } from "../../types";
import { Heart } from "../HeartPokemon";
import { PokemonType } from "../typePoke";

type PropsCardItem = {
  item: Pokemon;
  setPokemonId?: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const CardItem = ({ item, setPokemonId }: PropsCardItem) => {
  return (
    <div className="card" key={item.data.id}>
      <div className="heart-pokemon">
        <Heart id={String(item.data.id)} />
      </div>
      <div className="div-img">
        <img src={item.data.sprites.front_default} alt="" />
      </div>
      <h3 className="pokemon-nome">
        {item.data.name.charAt(0).toLocaleUpperCase() + item.data.name.slice(1)}
      </h3>
      <span className="id-pokemon">ID: {item.data.id}</span>
      <ul>
        {item.data.types.map((e) => (
          <PokemonType item={e.type.name} key={e.type.name} />
        ))}
      </ul>
      <button
        className="button-pokemon"
        onClick={() => {
          setPokemonId?.(item.data.id);
        }}
      >
        Ver detalhes
      </button>
    </div>
  );
};
