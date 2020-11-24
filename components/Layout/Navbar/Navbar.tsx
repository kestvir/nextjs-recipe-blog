import SearchBar from "../../SearchBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";

export interface NavbarProps {
  displayMobileNav: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ displayMobileNav }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <FontAwesomeIcon
            onClick={displayMobileNav}
            className="nav__menuIcon"
            icon={faBars}
          />

          <ul className="nav__linksList">
            <NavLinks linkClassName="nav__link" />
          </ul>

          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
