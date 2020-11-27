import SearchBar from "../../SearchBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";
import { StyledNavbar } from "../../../styled/layout/Navbar";
import { StyledContainer } from "../../../styled/layout/Grid";

export interface NavbarProps {
  displayMobileNav: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ displayMobileNav }) => {
  return (
    <StyledNavbar>
      <StyledContainer>
        <div className="inner">
          <FontAwesomeIcon
            onClick={displayMobileNav}
            className="menuIcon"
            icon={faBars}
          />

          <ul className="linksList">
            <NavLinks />
          </ul>

          <SearchBar />
        </div>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navbar;
