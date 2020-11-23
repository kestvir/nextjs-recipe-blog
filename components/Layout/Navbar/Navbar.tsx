import { useState } from "react";
import Link from "next/link";
import SearchBar from "../../SearchBar";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

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

          <MobileNav
            isOpen={displayMobileNav}
            closeMobileNav={() => setDisplayMobileNav(false)}
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
