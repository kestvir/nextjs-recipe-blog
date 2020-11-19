import Link from "next/link";

export interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = () => {
  return (
    <div className="custom404">
      <h2 className="custom404__title">404 - Page Not Found.</h2>
      <p>The page you are looking fore does not exist.</p>
      <Link href={"/"}>
        <a>BACK TO HOME PAGE</a>
      </Link>
    </div>
  );
};

export default Custom404;
