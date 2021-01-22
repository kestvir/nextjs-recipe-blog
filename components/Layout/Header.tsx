import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "../../styled/layout/Header";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <span style={{ cursor: "pointer" }}>
          <Image src={"/logo.png"} width="220" height="220" />
        </span>
      </Link>
    </StyledHeader>
  );
};

export default Header;
