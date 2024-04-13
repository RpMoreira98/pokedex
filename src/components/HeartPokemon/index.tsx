import { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PokemonContext } from "../../contexts/pokemons";

export const Heart = ({ id }: { id: string }) => {
  const { setFavorites, favorites } = useContext(PokemonContext);
  const isFavorites = favorites.includes(id);
  const [heart, setHeart] = useState(isFavorites);
  const handleHeartClick = () => {
    if (!id) {
      return;
    }
    const index = favorites.findIndex((item) => item === id);
    if (index === -1) {
      setFavorites([...favorites, id]);
      setHeart(true);
    } else {
      const newFavorites = favorites.filter((item) => item !== id);
      setFavorites(newFavorites);
      setHeart(false);
    }
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
