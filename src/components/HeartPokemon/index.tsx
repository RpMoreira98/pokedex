import { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PokemonContext } from "../../contexts/pokemons";

export const Heart = ({ id }: { id: string }) => {
  const { setFavorites, favorites } = useContext(PokemonContext);
  const isFavorites = favorites.includes(id);
  const [heart, setHeart] = useState(isFavorites);
  const handleHeartClick = () => {
    setFavorites((state) => {
      if (!id) {
        return state;
      }
      const index = state.findIndex((item) => item === id);
      if (index === -1) {
        state.push(id);
        setHeart(true);
      } else {
        state.splice(index, 1);
        setHeart(false);
      }
      return state;
    });
  };
  return (
    <div onClick={handleHeartClick} className="heart-pokemon">
      {heart ? (
        <FaHeart style={{ background: "transparent", color: "red" }} />
      ) : (
        <FaRegHeart style={{ background: "transparent" }} />
      )}
    </div>
  );
};
