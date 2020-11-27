import Link from "next/link";
import { Styled404Page } from "../styled/pages/Custom404";

export interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = () => {
  return (
    <Styled404Page>
      <h2 className="title">404 - Page Not Found.</h2>
      <p>The page you are looking fore does not exist.</p>
      <Link href={"/"}>
        <a>BACK TO HOME PAGE</a>
      </Link>
    </Styled404Page>
  );
};

export default Custom404;
