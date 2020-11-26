import Link from "next/link";
export interface NavLinksProps {
  closeMobileNav?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeMobileNav }) => {
  return (
    <>
      <li>
        <Link href={"/"}>
          <a onClick={closeMobileNav} className="link">
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/categories"}>
          <a onClick={closeMobileNav} className="link">
            Recipes
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/about"}>
          <a onClick={closeMobileNav} className="link">
            About
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
