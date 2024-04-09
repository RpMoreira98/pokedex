import { IoIosSearch } from "react-icons/io";
import "./index.css";
import { SetStateAction, useState } from "react";
import { CardPokemonSearch } from "../searchCard";

export const SearchComponent = () => {
  const [searchItem, setSearchItem] = useState("");
  const handleEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchItem(event.target.value);
  };
  return (
    <div className="seach-item">
      <div className="container-search">
        <input
          type="text"
          placeholder="Digite o nome de um pokemon."
          value={searchItem}
          onChange={handleSearch}
        />
        <span className="search-icon" onClick={handleEvent}>
          <IoIosSearch style={{ background: "transparent" }} />
        </span>
      </div>
      <CardPokemonSearch searchTerm={searchItem} />
    </div>
  );
};
