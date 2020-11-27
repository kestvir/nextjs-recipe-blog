import styled from "styled-components";

export const StyledTitleWithBorder = styled.h2`
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.border}`};
  margin-bottom: 2.2rem;
  padding-bottom: 0.4rem;
`;
