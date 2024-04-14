import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PokemonContext } from "../../contexts/pokemons";

export const Heart = ({ id }: { id: string }) => {
  const { setFavorites, favorites } = useContext(PokemonContext);
  const isFavorites = favorites.includes(id);
  const [heart, setHeart] = useState(isFavorites);
  useEffect(() => {
    setHeart(favorites.includes(id));
  }, [favorites, id]);

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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
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
