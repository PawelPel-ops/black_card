import React, { useState, useEffect } from 'react'
import {
    NavSection,
    NavContainer,
    NavContent,
    WrapperLogo,
    Logo,
    Hamburger,
    Line1,
    Line2,
    Line3,
    WrapperMenu,
    Menu,
    WrapperLink,
    LinkScroll
} from './NavE'

const Nav = () => {
    const [scrollNav, setScrollNav] = useState(false)
    const [open, setOpen] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 60) {
            setScrollNav(true)
        } else { 
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <NavSection scrollNav={scrollNav ? 1 : 0}>
                <NavContainer>
                    <NavContent>
                        <WrapperLogo>
                            <Logo>Logo</Logo>
                        </WrapperLogo>
                        <Hamburger  onClick={() => setOpen(!open)}>
                            <Line1 open={open}/>
                            <Line2 open={open}/>
                            <Line3 open={open}/>
                        </Hamburger>
                        <WrapperMenu open={open}>
                            <Menu>
                                <WrapperLink>
                                    <LinkScroll
                                        to='offer' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true}
                                        exact='true' 
                                        offset={-58}
                                    >Offer</LinkScroll>
                                </WrapperLink>
                                <WrapperLink>
                                    <LinkScroll 
                                        to='testimonials' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true}
                                        exact='true' 
                                        offset={-58}
                                    >Testimonials</LinkScroll>
                                </WrapperLink>
                                <WrapperLink>
                                    <LinkScroll
                                        to='contact' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true}
                                        exact='true' 
                                        offset={-58}
                                    >Contact</LinkScroll>
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
