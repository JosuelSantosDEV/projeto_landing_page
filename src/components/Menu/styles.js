import styled, { css } from "styled-components";
import {Container as SectionContainerStyles} from "../SectionContainer/styles"
import {Title as HeadingStyles} from "../Heading/styles"


const menuVisible = (theme) => css`
    visibility: visible;
    opacity: 1;
`;

export const Container = styled.div`
    ${({theme, visible})=>css`
    
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${theme.colors.white};
        border-bottom: ${theme.colors.mediumGray};
        transition: all 300ms ease-in-out;

        ${SectionContainerStyles}{
            padding-top: 0;
            padding-bottom: 0;
        }
        ${HeadingStyles}{
            margin-top: 0;
            margin-bottom:0;
        }


        @media ${theme.media.lteMedium} {
            height: 100vh;
            visibility: hidden;
            opacity: 0;

            ${visible && menuVisible(theme)}

            ${SectionContainerStyles}{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
                margin: 0;
                overflow-y: auto;
            }
            ${HeadingStyles}{
                margin-bottom:${theme.spacings.large};
                display: flex;
                justify-content: center;
            }

        }

    
    `}
`;

export const MenuContainer = styled.div`
    ${({theme})=>css`

        display: flex;
        justify-content: space-between;
        align-items: center;
    
        @media ${theme.media.lteMedium} {
            display: block;
            text-align: center;
            padding: ${theme.spacings.xxlarge} 0;
        }

    `}
`;

export const Button = styled.button`
    ${({theme , visible})=>css`

        z-index: 6;
        position: fixed;
        top: 2rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;
        background: ${theme.colors.primaryColor};
        color: ${theme.colors.white};
        border: none;
        display: none;
        pointer-events: ${visible ? "none" : "all"};
        
        @media ${theme.media.lteMedium} {
            display: grid;
            place-content: center;
        }

        
    `}
    > svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`;