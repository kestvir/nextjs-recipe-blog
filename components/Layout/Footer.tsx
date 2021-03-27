import { StyledFooter } from "../../styled/layout/Footer";
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()} <b>Ritos Virtuvėje</b> - Visos teisės
        saugomos
      </p>
    </StyledFooter>
  );
};

export default Footer;
