import styled from "styled-components";

export const StyledNavbar = styled.nav`
  .inner {
    border-top: ${({ theme }) => `1px solid ${theme.colors.border}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48.59px;
  }
  ul {
    list-style: none;
  }
  .linksList {
    display: flex;
    justify-content: center;
  }

  .link {
    font-size: 1rem;
    padding: 0 0.55rem;
    color: ${({ theme }) => theme.colors.main};
    transition: ${({ theme }) => theme.transitions.link};

    &:hover {
      color: ${({ theme }) => theme.colors.lightMain};
    }
  }
  .menuIcon,
  .searchIcon {
    display: none;
  }

  @media screen and (max-width: 485px) {
    background-color: ${({ theme }) => theme.colors.main};
    .inner {
      justify-content: space-between;
    }
    .linksList {
      display: none;
    }
    .menuIcon,
    .searchIcon {
      display: inline-block;
      font-size: 1.3rem;
      &:hover {
        cursor: pointer;
      }
      path {
        fill: #fff;
      }
    }

    .searchbar {
      .inputContainer {
        border: none;
      }

      .form {
        background-color: #fff;
      }
    }
  }
`;
