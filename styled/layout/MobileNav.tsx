import styled from "styled-components";

export const MobileNavStyled = styled.nav`
  background: ${({ theme }) => theme.colors.main};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s linear;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  .inner {
    width: 100%;
  }

  .linksList {
    display: flex;
    flex-direction: column;
    text-align: center;

    li:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }

  .link {
    text-transform: capitalize;
    color: #fff;
    padding: 7px 10px;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    transition: ${({ theme }) => theme.transitions.link};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: ${({ theme }) => theme.colors.main};
    }
  }

  .btnClose {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  .searchbar {
    display: inline-block;
    margin: 0 auto 1.5rem;
    display: block;
    width: 70%;

    .inputContainer {
      display: flex;
      border: none;
      width: 100%;
    }

    .input {
      width: 100%;
    }

    .form {
      background-color: #fff;
    }
  }
`;
