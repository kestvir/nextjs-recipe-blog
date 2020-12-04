import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.main};
  color: #fff;
  display: flex;
  justify-content: center;
  border-top: 1px solid #eee;
  padding: 0.8rem 0;

  @media screen and (max-width: 486px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
