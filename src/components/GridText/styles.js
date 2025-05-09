import styled, { css } from "styled-components";

import {Title as HeadingContainer}  from "../Heading/styles"
import {Container as TextContainer}  from "../TextComponent/styles"

export const Container = styled.div`
    ${({theme})=>css`
        ${TextContainer} {
            margin-bottom: ${theme.spacings.large}
        }

    `}
`;

export const Grid = styled.div`
    ${({theme})=>css`
        counter-reset: grid-counter;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacings.large};
    `}
`;

export const GridElement = styled.div`
    ${({theme})=>css`
        ${HeadingContainer}{
            position: relative;
            left: 5rem;
        }
        ${HeadingContainer}::before{
           counter-increment: grid-counter;
           content: counter(grid-counter);
           position: absolute;
           font-size: ${theme.fonts.sizes.xhuge};
           top: -3rem;
           left: -5rem;
           transform: rotate(5deg);
        }
    `}
`;