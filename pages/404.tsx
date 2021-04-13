import { Styled404Page } from "../styled/pages/Custom404";
import { StyledNotFound } from "../styled/components/NotFound";
import SearchBar from "../components/SearchBar";

export interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = () => {
  return (
    <Styled404Page>
      <h4 className="title">404 - puslapis nerastas.</h4>
      <StyledNotFound>
        <p>
          Deja, toks puslapis nerastas. Patikslinkite, ko ieškote ir mėginkite
          ieškoti dar kartą.
        </p>
        <SearchBar />
      </StyledNotFound>
    </Styled404Page>
  );
};

export default Custom404;
