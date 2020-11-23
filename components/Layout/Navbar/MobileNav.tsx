import NavLinks from "./NavLinks";

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
      <ul className="mobileNav__linksList">
        <NavLinks
          closeMobileNav={closeMobileNav}
          linkClassName="mobileNav__link"
        />
      </ul>
    </div>
  );
};

export default MobileNav;
