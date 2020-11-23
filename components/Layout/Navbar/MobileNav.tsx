import NavLinks from "./NavLinks";
import SearchBar from "../../SearchBar";

export interface MobileNavProps {
  isOpen: boolean;
  closeMobileNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, closeMobileNav }) => {
  return (
    <div className={`mobileNav ${isOpen ? "showMobileNav" : ""} `}>
      <button className="mobileNav__btn--close" onClick={closeMobileNav}>
        X
      </button>

      <div className="mobileNav__inner">
        <SearchBar closeMobileNav={closeMobileNav} />
        <ul className="mobileNav__linksList">
          <NavLinks
            closeMobileNav={closeMobileNav}
            linkClassName="mobileNav__link"
          />
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
