import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.main};
  color: #fff;
  display: flex;
  justify-content: center;
  border-top: 1px solid #eee;
  padding: 0.8rem 0;
  span {
    font-weight: 700;
  }

  @media screen and (max-width: 358px) {
    font-size: 0.8rem;
  }
`;
