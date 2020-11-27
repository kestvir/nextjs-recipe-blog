import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  a {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main};
    transition: ${({ theme }) => theme.transitions.link};
    &:hover {
      color: ${({ theme }) => theme.colors.lightMain};
    }
  }

  .prev {
    span {
      span {
        margin-left: 0.2rem;
      }
    }
  }
  .next {
    span {
      margin-right: 0.2rem;
    }
    text-align: right;
  }
`;
