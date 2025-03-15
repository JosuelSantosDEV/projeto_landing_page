import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({children}) => {
    return (
        <div>
            <Styled.Container>
                {children}
            </Styled.Container>
        </div>
    );
};

TextComponent.propTypes = {
    children: P.node.isRequired
}