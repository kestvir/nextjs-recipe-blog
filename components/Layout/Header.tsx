import { faRProject } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "../../styled/layout/Header";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <Image src={"/logo.png"} width="220" height="220" quality="100" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
