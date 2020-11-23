import Link from "next/link";
export interface NavLinksProps {
  linkClassName: string;
  closeMobileNav?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  closeMobileNav,
  linkClassName,
}) => {
  return (
    <>
      <li>
        <Link href={"/"}>
          <a onClick={closeMobileNav} className={linkClassName}>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/categories"}>
          <a onClick={closeMobileNav} className={linkClassName}>
            Recipes
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/about"}>
          <a onClick={closeMobileNav} className={linkClassName}>
            About
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
