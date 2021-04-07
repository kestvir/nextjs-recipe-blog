import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import MobileNav from "../Layout/Navbar/MobileNav";
import Footer from "./Footer";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

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
      <ScrollUpButton
        style={{
          outline: "none",
          borderRadius: "50%",
          height: "35px",
          width: "35px",
          padding: "5px",
          backgroundColor: "#a19f9f",
        }}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
