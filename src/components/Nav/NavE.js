import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const NavSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background-color: ${({ scrollNav }) => (scrollNav ? "#ada9bb" : "rgba(255,255,255,.1)")};
    box-shadow: ${({ scrollNav }) => (scrollNav ? "3px 5px 7px rgba(0,0,0,.5)" : "none")};
    transition: all 0.2s ease-in;
`

export const NavContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const NavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WrapperLogo = styled.div`
    margin: auto 50px;
`

export const Logo = styled.p`
    font-size: 1.6rem;
    padding: 10px;
`

export const Hamburger = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 40px;
    transition: all .5s ease-in-out;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 760px) {
        display: flex;
        margin-right: 30px;
    }
`

export const Line1 = styled.div`
    width: 25px;
    height: 4px;
    background-color: #2c283d;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    transform: ${({open}) => (open ? 'rotate(45deg) translateY(4px)' : 'translateY(-3px)')};
`

export const Line2 = styled.div`
    width: 22px;
    height: 2px;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    transform: ${({open}) => (open ? 'translateX(-20px)' : 'none')};
    background-color: ${({open}) => (open ? 'transparent' : '#2c283d')};
`

export const Line3 = styled.div`
    width: 25px;
    height: 4px;
    background-color: #2c283d;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    transform: ${({open}) => (open ? 'rotate(-45deg) translateY(-4px)' : 'translateY(3px)')};
`

export const WrapperMenu = styled.div`
    margin: auto 50px;
    position: relative;

    @media screen and (max-width: 760px) {
        max-height: ${({ open }) => (open ? "210px" : "0")};
        transition: max-height 0.2s ease-in;
        position: absolute;
        top: 80px;
        right: 0;
        z-index: 11;
        background-color: #ada9bb;
        box-shadow: 3px 5px 7px rgba(0,0,0,.5);
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media screen and (max-width: 760px) {
        flex-direction: column;
    }
`

export const WrapperLink = styled.li`
    padding: 15px 20px;
    cursor: pointer;
    margin: auto 10px;
    position: relative;
    cursor: pointer;
    transition: all .25s ease-in-out;

    @media screen and (max-width: 760px) {
        margin: auto 20px;
    }

    &:hover {
        color: #2d909b;
        transform: scale(1.1);
    }

    &:before {
        content:"";
        position: absolute;
        top: 70%;
        right: 50%;
        width: 0;
        height: 1.5px;
        transition: all .35s ease-in-out;
    }
    
    &:hover {
        &:before {
            width: 40%;
            background-color: #2d909b;
        }
    }
    
    &:after {
        content:"";
        position: absolute;
        top: 70%;
        left: 50%;
        width: 0;
        height: 1.5px;
        transition: all .35s ease-in-out;
    }
    
    &:hover {
        &:after {
            width: 40%;
            background-color: #2d909b;
        }
    }
`

export const LinkScroll = styled(LinkS)`
    font-size: 1.6rem;
`