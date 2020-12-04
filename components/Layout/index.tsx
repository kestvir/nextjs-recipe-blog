import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import MobileNav from "../Layout/Navbar/MobileNav";
import Footer from "./Footer";
import { useState } from "react";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <div>
      <Header />
      <Navbar displayMobileNav={() => setDisplayMobileNav(true)} />
      <MobileNav
        isOpen={displayMobileNav}
        closeMobileNav={() => setDisplayMobileNav(false)}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
