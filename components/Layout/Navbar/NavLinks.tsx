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
            Pradžia
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/receptai"}>
          <a onClick={closeMobileNav} className="link">
            Receptai
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/apie"}>
          <a onClick={closeMobileNav} className="link">
            Apie
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
