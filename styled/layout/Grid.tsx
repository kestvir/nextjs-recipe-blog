import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90vw;
  max-width: 1068px;
  margin: 0 auto;
`;

export const Grid2 = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  -webkit-column-gap: 1.2rem;
  column-gap: 1.2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid3 = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  -webkit-column-gap: 1rem;
  column-gap: 1rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  -webkit-column-gap: 3rem;
  column-gap: 3rem;
  padding: 2rem 0;

  @media screen and (max-width: 1170px) {
    grid-template-columns: 1fr;
  }
`;
