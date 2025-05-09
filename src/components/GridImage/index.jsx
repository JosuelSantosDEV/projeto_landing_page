import P from 'prop-types';
import* as Styled from './styles';
import {SectionBackground} from "../SectionBackground"
import {Heading} from "../Heading"
import {TextComponent} from "../TextComponent"

export const GridImage = ({title, description, grid, background = false}) => {
    return (
        <SectionBackground background={background}>
            <Styled.Container>
                <Heading size='huge' uppercase colorDark={!background} as='h2' >{title}</Heading>
                <TextComponent>{description}</TextComponent>
                <Styled.Grid>
                    {
                        grid.map(elem => (
                            <Styled.GridElement  key={Math.floor(Math.random() * 1000)} >
                                <Styled.Image src={elem.srcImg} alt={elem.altText} />
                            </Styled.GridElement>
                        ))
                    }
                </Styled.Grid>
            </Styled.Container>
        </SectionBackground>    );
};

GridImage.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    background: P.bool,
    grid: P.arrayOf(
        P.shape({
            altText: P.string.isRequired,
            srcImg: P.string.isRequired
        })
    ).isRequired
}

