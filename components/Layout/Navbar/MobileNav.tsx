import NavLinks from "./NavLinks";
import SearchBar from "../../SearchBar";
import { MobileNavStyled } from "../../../styled/MobileNav";

export interface MobileNavProps {
  isOpen: boolean;
  closeMobileNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, closeMobileNav }) => {
  return (
    <MobileNavStyled isOpen={isOpen}>
      <button className="btnClose" onClick={closeMobileNav}>
        X
      </button>

      <div className="inner">
        <SearchBar closeMobileNav={closeMobileNav} />
        <ul className="linksList">
          <NavLinks closeMobileNav={closeMobileNav} />
        </ul>
      </div>
    </MobileNavStyled>
  );
};

export default MobileNav;
