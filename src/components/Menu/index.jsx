import P from 'prop-types';
import * as Styled from './styles';
import {SectionContainer} from "../SectionContainer"
import {LogoLink} from "../LogoLink"
import { NavLinks } from "../NavLinks"
import { Menu as MenuIcon, Close as CloseIcon} from '@styled-icons/material-outlined';
import { useState } from 'react';
import { useEffect } from 'react';

export const Menu = ({links, logoData}) => {

    const [visible, setVisible] = useState(false)

    

    return (
        <>
            <Styled.Button 
                visible={visible} 
                onClick={() => setVisible(true)} 
                aria-label='Open/Close menu' 
            >
                {!visible && <MenuIcon aria-label='Open menu' />}
                {visible && <CloseIcon aria-label='Close menu'/>}
            </Styled.Button>
            <Styled.Container visible={visible} onClick={() => setVisible(false)} >
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoLink {...logoData}/>
                        <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired
}