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

export const WrapperMenu = styled.div`
    margin: auto 50px;
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
`

export const WrapperLink = styled.li`
    padding: 0 20px;
    cursor: pointer;
    margin: auto 10px;
    position: relative;
    cursor: pointer;
    transition: all .25s ease-in-out;

    &:hover {
        color: #2d909b;
        transform: scale(1.1);
    }

    &:before {
        content:"";
        position: absolute;
        top: 100%;
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
        top: 100%;
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