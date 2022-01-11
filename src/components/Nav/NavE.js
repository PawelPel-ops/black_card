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
`

export const LinkScroll = styled(LinkS)``