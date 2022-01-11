import React from 'react'
import {
    NavSection,
    NavContainer,
    NavContent,
    WrapperLogo,
    Logo,
    WrapperMenu,
    Menu,
    WrapperLink,
    LinkScroll
} from './NavE'

const Nav = () => {
    return (
        <>
            <NavSection>
                <NavContainer>
                    <NavContent>
                        <WrapperLogo>
                            <Logo>Logo</Logo>
                        </WrapperLogo>
                        <WrapperMenu>
                            <Menu>
                                <WrapperLink>
                                    <LinkScroll to='/'>Link 1</LinkScroll>
                                </WrapperLink>
                                <WrapperLink>
                                    <LinkScroll to='/'>Link 2</LinkScroll>
                                </WrapperLink>
                                <WrapperLink>
                                    <LinkScroll to='/'>Link 3</LinkScroll>
                                </WrapperLink>
                            </Menu>
                        </WrapperMenu>
                    </NavContent>
                </NavContainer>    
            </NavSection>    
        </>
    )
}

export default Nav
