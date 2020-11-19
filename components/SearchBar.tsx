import { useRouter } from "next/router";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();

  const searchForRecipes = (e) => {
    e.preventDefault();
    console.log(router);
    router.push(`/search?v=${searchValue}`);
    setSearchValue("");
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={searchForRecipes}>
        <div className="searchbar__inputContainer">
          <input
            className="searchbar__input"
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
