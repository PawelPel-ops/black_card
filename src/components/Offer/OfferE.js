import styled from "styled-components";
import { Link } from 'react-router-dom'

export const OfferSection = styled.section`
    background: #ada9bb;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 20vw;
        height: 20vw;
        bottom: 0;
        left: 5vw;
        background: #2c283d;
        border-radius: 50%;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        width: 30vw;
        height: 30vw;
        top: 2vw;
        right: 5vw;
        background: #2d909b;
        border-radius: 50%;
        z-index: 1;
    }
`

export const OfferContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const OfferContent = styled.div`
    margin: 100px 50px;
    position: relative;
    z-index: 2;
`

export const OfferHeader = styled.h2`
    font-size: 3.2rem;
    text-align: center;
`

export const OffersWrapper = styled.div`
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OfferBox = styled.div`
    color: #2c283d;
    position: relative;
    z-index: 2;
    background-color: ${({ premium }) => (premium ? "rgba(255,255,255,.3)" : "rgba(255,255,255,.1)")};
    padding: 20px;
    box-shadow: 20px 20px 20px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
    width: ${({ premium }) => (premium ? "280px" : "260px")};
    height: ${({ premium }) => (premium ? "380px" : "330px")};
    margin: auto 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Price = styled.span`
    font-size: ${({ premium }) => (premium ? "2.4rem" : "2.2rem")};
`

export const Line = styled.div`
    width: 75%;
    height: 1px;
    margin: 10px auto;
    background-color: #2c283d;
`

export const SmallHeader = styled.h4`
    font-size: ${({ premium }) => (premium ? "1.8rem" : "1.6rem")};
    margin: 10px auto;
`

export const Text = styled.span`
    font-size: ${({ premium }) => (premium ? "1.4rem" : "1.2rem")};
    margin: 5px auto;
`

export const BtnBox = styled.div`
    position: relative;
    background: rgba(0,0,0,.1);
    width: 180px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 30px 0;
    overflow: hidden;
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,.6);

    &:hover .btnLink {
        transform: scale(1.1);
        transition: 0.25s;
    }

    &:hover .btnBackground {
        width: 100%;
        transition: 0.25s;
    }
`

export const Btn = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background: #ada9bb;
    z-index: -1;
`

export const OfferLink = styled(Link)`
    font-size: 1.6rem;
    letter-spacing: 1px;
    color: #2c283d;
    text-decoration: none;
`