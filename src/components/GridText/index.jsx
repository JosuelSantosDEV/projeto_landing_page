import P from 'prop-types';
import* as Styled from './styles';
import {SectionBackground} from "../SectionBackground"
import {Heading} from "../Heading"
import {TextComponent} from "../TextComponent"

export const GridText = ({title, description, grid, background}) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading size='huge' uppercase colorDark={!background} as='h2' >{title}</Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {
                        grid.map(elem => (
                            <Styled.GridElement key={elem.title} >
                                <Heading size='medium' colorDark={!background} as='h3' >{elem.title}</Heading>
                                <TextComponent>{elem.description}</TextComponent>
                            </Styled.GridElement>
                        ))
                    }
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>
    );
};

GridText.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    background: P.bool,
    grid: P.arrayOf(P.shape({
        title: P.string.isRequired,
        description: P.string.isRequired
    })).isRequired,
}