import styled from "styled-components";

export const StyledNewsletterForm = styled.form`
  margin-top: 1.2rem;
  border: ${({ theme }) => `1px solid ${theme.colors.darkerBorder}`};
  padding: 1rem;

  input {
    width: 100%;
    height: 2rem;
    margin: 0.7rem 0;
    padding: 0 5px;
    &::placeholder {
      padding-left: 5px;
    }
  }

  button {
    background: ${({ theme }) => theme.colors.main};
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    border: none;
    padding: 0.5rem 0;
    width: 100%;
    transition: ${({ theme }) => theme.transitions.link};
    &:hover {
      background: ${({ theme }) => theme.colors.lightMain};
    }
  }
`;
