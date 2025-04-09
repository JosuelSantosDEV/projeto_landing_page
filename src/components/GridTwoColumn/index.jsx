import P from 'prop-types';
import* as Styled from './styles';
import {SectionBackground} from "../SectionBackground"
import {Heading} from "../Heading"
import {TextComponent} from "../TextComponent"


export const GridTwoColumn = ({title, text, srcImg, background = false}) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container >
               <Styled.TextContainer>
                    <Heading uppercase colorDark={!background} as='h2' >{title}</Heading>
                    <TextComponent>{text}</TextComponent>
               </Styled.TextContainer>
               <Styled.ImgContainer>
                    <Styled.image src={srcImg} alt={title} ></Styled.image>
               </Styled.ImgContainer>
            </Styled.Container>
        </SectionBackground>
    );
};

GridTwoColumn.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    srcImg: P.string.isRequired,
    background: P.bool
}