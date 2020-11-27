import { useRouter } from "next/router";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledSearchbar } from "../styled/components/Searchbar";

export interface SearchBarProps {
  closeMobileNav?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ closeMobileNav }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();

  const searchForRecipes = (e) => {
    e.preventDefault();
    if (closeMobileNav) closeMobileNav();

    router.push(`/search?v=${searchValue}`);
    setSearchValue("");
  };

  return (
    <StyledSearchbar className="searchbar">
      <form className="form" onSubmit={searchForRecipes}>
        <div className="inputContainer">
          <input
            className="input"
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </StyledSearchbar>
  );
};

export default SearchBar;
