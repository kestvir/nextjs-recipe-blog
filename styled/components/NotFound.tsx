import styled from "styled-components";

export const StyledNotFound = styled.div`
  p {
    margin-bottom: 0.5rem;
  }

  .searchbar {
    .form {
      width: 100%;
    }

    .inputContainer {
      border: none;
      padding: 0;
      height: 36px;
      width: 100%;
    }

    input {
      background: #eaeaea;
      padding: 0 0.4rem;
      height: 100%;
      width: 90%;
    }

    button {
      width: 10%;
      height: 100%;
      background: ${({ theme }) => theme.colors.main};
      transition: ${({ theme }) => theme.transitions.link};
      &:hover {
        background: ${({ theme }) => theme.colors.lightMain};
      }
      path {
        fill: #fff;
      }
    }
  }
`;
