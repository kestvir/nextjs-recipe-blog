import { StyledFooter } from "../../styled/layout/Footer";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      · Copyright © 2020 ... - Visos teisės saugomos ·
    </StyledFooter>
  );
};

export default Footer;
