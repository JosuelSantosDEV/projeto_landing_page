import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({children}) => <Styled.Container dangerouslySetInnerHTML={{__html: children}}/>

TextComponent.propTypes = {
    children: P.node.isRequired
}