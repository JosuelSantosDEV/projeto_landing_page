import P from 'prop-types';
import* as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({title, html, background = false}) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container >
                <Heading uppercase colorDark={!background} as='h2' >{title}</Heading>
            </Styled.Container>
            <Styled.Html>
                <TextComponent>
                    {html}
                </TextComponent>
            </Styled.Html>
        </SectionBackground>
    );
};

GridContent.propTypes = {
    title: P.string.isRequired,
    html: P.string.isRequired,
    background: P.bool
}