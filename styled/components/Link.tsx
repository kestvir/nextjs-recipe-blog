import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fonts.size.recipeLink};
  transition: ${({ theme }) => theme.transitions.link};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightMain};
  }
`;
