import styled from "styled-components";
import { Link } from 'react-scroll'

export const HeroSection = styled.section`
    background: #ada9bb;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        width: 50vw;
        height: 50vw;
        bottom: -8vw;
        left: -15vw;
        background: #2d909b;
        border-radius: 50%;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        width: 29vw;
        height: 29vw;
        top: 2vw;
        right: -5vw;
        background: #54786d;
        border-radius: 50%;
        z-index: 1;
    }
`

export const HeroContainer = styled.div`
    max-width: 1300px;
`

export const HeroContent = styled.div`
    display: flex;
    align-items: flex-end;
    color: #2c283d;
    position: relative;
    z-index: 2;
    height: 80vh;
    width: 100%;
    background-color: rgba(255,255,255,.1);
    padding: 50px;
    box-shadow: 20px 20px 20px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
`

export const WrapperText = styled.div`
    max-width: 500px;
    margin-right: 100px;
`

export const SmallHeader = styled.h2`
    font-size: 1.6rem;
`

export const BigHeader = styled.h3`
    font-size: 3.2rem;
`

export const DescriptionHero = styled.p`
    font-size: 2.2rem;
`

export const BtnBox = styled.div`

`

export const LinkScroll = styled(Link)`

`

export const WrapperCard = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    background: #2C283D;
    width: 425px;
    height: 270px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 18px;
    overflow: hidden;
    box-shadow: 5px 5px 10px 3px rgba(0,0,0,.5);
    transform: rotate(-15deg);

    &::before {
        content: '';
        position: absolute;
        top: -200px;
        left: -100px;
        width: 350px;
        height: 350px;
        border: 2px solid #ada9bb;
        border-radius: 50%;
        z-index: 2;
    }

    &::after {
        content: '';
        position: absolute;
        top: 10px;
        left: -30px;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        box-shadow: 7px 7px 10px 4px rgba(0,0,0,.5);
        z-index: 1;
    }

    span {
        color: #ada9bb;
        text-shadow: 0.5px 0.5px 0 #000, 1px 1px 0 #000, 1.5px 1.5px 0 #000;
        letter-spacing: 1px;
    }
`

export const Name = styled.span`
    font-size: 1.7rem;
`

export const Chip = styled.div`
    background: linear-gradient(135deg, rgba(255,255,255,.8), rgba(255,255,255,.4), rgba(255,255,255,.2));
    width: 60px;
    height: 50px;
    border-radius: 5px;
    position: relative;
    margin: 33px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Circle1 = styled.div`
    position: absolute;
    background: #000;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;

    &::before {
        content: '';
        position: absolute;
        background: rgba(255,255,255,.6);
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
        width: 23px;
        height: 23px;
        border-radius: 50%;
    }
`

export const Circle2 = styled.div`
    position: absolute;
    background: #000;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;

    &::after {
        content: '';
        position: absolute;
        background: rgba(255,255,255,.6);
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
        width: 23px;
        height: 23px;
        border-radius: 50%;
    }
`

export const Line1 = styled.div`
    width: 100%;
    height: 1px;
    background: #000;
`

export const Number = styled.span`
    font-size: 1.8rem;
    margin-bottom: 7px;
`

export const DateContent = styled.span`
    font-size: 1rem;
    margin-bottom: 2px;
    text-transform: uppercase;
`

export const Date = styled.span`
    font-size: 1.6rem;
    margin-bottom: 7px;
`

export const Owner = styled.span`
    font-size: 1.4rem;
    text-transform: uppercase;
`

export const WrapperLogo = styled.div`
    position: absolute;
    bottom: 18px;
    right: 18px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

export const Shape1 = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid #d3cce8;
    transform: rotate(45deg);
`

export const Shape2 = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid #524d64;
    transform: rotate(45deg);
`

export const LogoName = styled.span`
    color: #ada9bb;
    text-shadow: 1px 1px #000;
    letter-spacing: 1px;
    font-size: 1rem;
    text-transform: uppercase;
`