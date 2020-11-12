import Link from "next/link";

export interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav>
            <div className="container">
                <ul className="nav-links-list">
                    <li>
                        <Link href={"/"}>
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li >
                        <Link href={"/recipes"}>
                            <a className="nav-link">Recipes</a>
                        </Link>
                    </li>
                    <li >
                        <Link href={"/about"}>
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;