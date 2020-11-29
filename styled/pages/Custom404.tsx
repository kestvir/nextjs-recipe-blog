import styled from "styled-components";

export const Styled404Page = styled.section`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 1.5rem;
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
  .backHome {
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 1170px) {
    justify-content: center;
    text-align: center;
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
