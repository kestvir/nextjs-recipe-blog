import styled from "styled-components";

export const Styled404Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 3rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.3rem;
  }
  a {
    color: ${({ theme }) => theme.colors.lightMain};
    text-decoration: underline;
    transition: ${({ theme }) => theme.transitions.link};
    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  @media screen and (max-width: 1170px) {
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    .title {
      font-size: 2rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media screen and (max-width: 365px) {
    .title {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
