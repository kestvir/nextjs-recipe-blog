import { StyledFooter } from "../../styled/layout/Footer";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <p>
        · Copyright © 2020 <span> Ritos Virtuvėje</span> - Visos teisės saugomos
        ·
      </p>
    </StyledFooter>
  );
};

export default Footer;
