import { StyledFooter } from "../../styled/layout/Footer";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <p>
        © 2020 <b>Ritos Virtuvėje</b> - Visos teisės saugomos
      </p>
    </StyledFooter>
  );
};

export default Footer;
