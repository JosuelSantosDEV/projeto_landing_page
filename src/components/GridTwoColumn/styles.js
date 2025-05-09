import styled, { css } from "styled-components";
import {Title} from "../Heading/styles"

export const Container = styled.div`
    ${({theme})=>css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: ${theme.spacings.large};

        @media ${theme.media.lteMedium} {
            grid-template-columns: 1fr;
            text-align: center;
        }

        ${Title} {
            margin-bottom:${theme.spacings.large} ;
            
        }
    `}
`;

export const TextContainer = styled.div`
    ${({theme})=>css`
    
        @media ${theme.media.lteMedium} {
            margin-bottom: ${theme.spacings.large};
        }
    
    
    `}
`;

export const ImgContainer = styled.div`
    ${({theme})=>css``}
`;

export const image = styled.img`
    ${({theme})=>css``}
`;