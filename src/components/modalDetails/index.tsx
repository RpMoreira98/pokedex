import { useContext, useState } from "react";
import "./index.css";
import { PokemonContext } from "../../contexts/pokemons";
import { ProgressBar } from "../progressbar";
import { PokemonType } from "../typePoke";
import { CiBookmark } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
type ModalDetailProps = {
  open: boolean;
  closeModal: () => void;
  pokemonId: number;
};

export const ModalDetail = ({
  open,
  closeModal,
  pokemonId,
}: ModalDetailProps) => {
  const { pokemons } = useContext(PokemonContext);
  const pokemon = pokemons.find((item) => item.data.id === pokemonId);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    if (target.classList && target.classList.contains("overlay")) {
      closeModal();
    }
  };

  if (open && pokemon) {
    return (
      <div className="container-modal">
        <div className="overlay" onClick={handleOverlayClick} />
        <div className="modal">
          <div className="modal-details">
            <h1>
              Detalhes{" "}
              <button className="button-close" onClick={closeModal}>
                <IoMdClose />
              </button>
            </h1>
            <p>{pokemon.data.name}</p>
            <div className="img-modal">
              <img
                src={pokemon.data.sprites.front_default}
                alt=""
                className="img-modal-one"
              />
              <img
                src={pokemon.data.sprites.back_default}
                alt=""
                className="img-modal-one"
              />
            </div>
            <div className="starts">
              <p>{pokemon.data.height}m</p>
              <p>{pokemon.data.weight}KG</p>
            </div>
            <div className="types-modal">
              {pokemon.data.types.map((e) => (
                <PokemonType item={e.type.name} key={e.type.name} />
              ))}
            </div>
            <ul className="starts-modal">
              <span className="modal-statics">Estátisticas</span>
              <li>
                <p>HP</p>
                <div className="progress-modal">
                  <ProgressBar value={pokemon.data.stats[0].base_stat} />{" "}
                </div>
                <span>{pokemon.data.stats[0].base_stat}</span>
              </li>
              <li>
                <p>ATK</p>
                <div className="progress-modal">
                  <ProgressBar value={pokemon.data.stats[1].base_stat} />{" "}
                </div>
                <span>{pokemon.data.stats[1].base_stat}</span>
              </li>{" "}
              <li>
                <p>DEF</p>
                <div className="progress-modal">
                  <ProgressBar value={pokemon.data.stats[2].base_stat} />{" "}
                </div>
                <span>{pokemon.data.stats[2].base_stat}</span>
              </li>{" "}
              <li>
                <p>S.ATK</p>
                <div className="progress-modal">
                  <ProgressBar value={pokemon.data.stats[3].base_stat} />{" "}
                </div>
                <span>{pokemon.data.stats[3].base_stat}</span>
              </li>{" "}
              <li>
                <p>S.DEF</p>
                <div className="progress-modal">
                  <ProgressBar value={pokemon.data.stats[4].base_stat} />{" "}
                </div>
                <span>{pokemon.data.stats[4].base_stat}</span>
              </li>{" "}
              <li>
                <p>SPD</p>
                <div className="progress-modal">
                  <ProgressBar value={pokemon.data.stats[5].base_stat} />{" "}
                </div>
                <span>{pokemon.data.stats[5].base_stat}</span>
              </li>
            </ul>
            <button
              className={`button-book ${isBookmarked ? "bookmarked" : ""}`}
              onClick={handleToggleBookmark}
            >
              {isBookmarked ? "" : <CiBookmark />}
              {isBookmarked
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"}
            </button>
          </div>
        </div>
        <button className="modal-close" onClick={closeModal}></button>
      </div>
    );
  } else {
    return null;
  }
};
