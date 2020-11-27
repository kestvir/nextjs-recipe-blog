import { StyledFooter } from "../../styled/layout/Footer";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>· Copyright © 2020 ... - All Rights Reserved ·</StyledFooter>
  );
};

export default Footer;
