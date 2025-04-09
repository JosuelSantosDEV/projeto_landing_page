import { createGlobalStyle, css } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    
    }

    body {
        font-family: ${({ theme }) => theme.fonts.family.default};
        font-size: ${({ theme }) => theme.fonts.sizes.medium};
    
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.fonts.family.secondary};
        margin: ${({ theme }) => theme.spacings.large} 0;
    }

    p {
        ${
            ({theme}) => css`
            
                margin: ${theme.spacings.medium} 0;

            `
        };
    }

    ul, ol {
        ${
            ({theme}) => css`
            
                margin: ${theme.spacings.medium};
                padding: ${theme.spacings.medium};

            `
        };
    }

    a {
        ${
            ({theme}) => css`
            
                color: ${theme.colors.secondaryColor};
                text-decoration: none;

            `
        };
    }


`;