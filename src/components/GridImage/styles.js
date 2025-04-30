import styled, { css } from "styled-components";

import {Title as HeadingContainer}  from "../Heading/styles"
import {Container as TextContainer}  from "../TextComponent/styles"

export const Container = styled.div`
    ${({theme})=>css`
        & > ${TextContainer} {
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
        overflow: hidden;
    `}
`;

export const Image = styled.img`
    ${({theme})=>css`
        width: 100%;

        transition: all 300ms;

        &:hover {
            transform: scale(1.25) rotate(10deg);
        }

    `}
`;