import { useState } from "react";
import SearchBar from "../../SearchBar";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

export interface NavbarProps {
  displayMobileNav: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ displayMobileNav }) => {
  // const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <FontAwesomeIcon
            onClick={displayMobileNav}
            className="nav__menuIcon"
            icon={faBars}
          />

          {/* <FontAwesomeIcon
            onClick={() => setDisplayMobileNav(true)}
            className="nav__menuIcon"
            icon={faBars}
          /> */}

          {/* <MobileNav
            isOpen={displayMobileNav}
            closeMobileNav={() => setDisplayMobileNav(false)}
          /> */}

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
