import styled from "styled-components";

export const StyledRecipeListSection = styled.section`
  ul {
    list-style: none;
    li {
      text-align: center;
    }
    li:not(:nth-last-child(-n + 2)) {
      margin-bottom: 1rem;
    }
  }
`;
