import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.main};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ theme }) => theme.fonts.title};
        color: ${({ theme }) => theme.colors.main};
    }

    h3 {
        font-size: 1.3rem;
    }

    h4 {
        font-size: 1.1rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        object-fit: cover;
    }

    section {
        min-height: calc(100vh - 48.58px - 48.59px - 4rem - 226px);
    }


    #disqus_thread {
        width: 100%;
        margin: 20px 0;
    }
`;
