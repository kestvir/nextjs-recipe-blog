import Link from "next/link";
import SearchBar from "../SearchBar";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <ul className="nav__links-list">
            <li>
              <Link href={"/"}>
                <a className="nav__link">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/categories"}>
                <a className="nav__link">Recipes</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a className="nav__link">About</a>
              </Link>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
