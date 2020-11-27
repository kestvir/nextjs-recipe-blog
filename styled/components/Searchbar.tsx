import styled from "styled-components";

export const StyledSearchbar = styled.div`
  display: flex;
  align-self: stretch;

  .form {
    display: flex;
    align-self: stretch;
    margin: 3px;
  }

  .inputContainer {
    border-left: ${({ theme }) => `1px solid ${theme.colors.border}`};
    border-right: ${({ theme }) => `1px solid ${theme.colors.border}`};
    border-top: none;
    border-bottom: none;
    padding: 0.7rem 1rem;
  }

  .input {
    border: none;
    outline: none;
    &::placeholder {
      text-transform: uppercase;
      font-size: 0.65rem;
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
