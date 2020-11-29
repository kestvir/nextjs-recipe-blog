import styled from "styled-components";

export const StyledPost = styled.section`
  .ingredients {
    h4 {
      padding-left: 1rem;
    }
    ul {
      padding-left: 3rem;
      li {
        padding: 0.5rem 0;
      }
    }
    .part {
      padding-top: 1.2rem;
    }
    margin-bottom: 1rem;
  }

  .instructions {
    ol {
      padding-left: 2rem;
      li {
        padding: 0.4rem 0;
        line-height: 2rem;
      }
    }
    padding-bottom: 3rem;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  }

  .aboutRecipe {
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  .publishedOn {
    padding: 0.35rem 0;
  }
`;
