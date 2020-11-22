import { useState } from "react";
import Link from "next/link";
import SearchBar from "../../SearchBar";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <FontAwesomeIcon
            onClick={() => setDisplayMobileNav(true)}
            className="nav__menuIcon"
            icon={faBars}
          />
          <FontAwesomeIcon className="nav__searchIcon" icon={faSearch} />

          <ul className="nav__links-list">
            <li>
              <Link href={"/"}>
                <a className="nav__link">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/categories"}>
                <a className="nav__link">Recipes</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a className="nav__link">About</a>
              </Link>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
