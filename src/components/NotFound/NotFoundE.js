import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NotFoundSection = styled.section`
    background: #ada9bb;
    width: 100vw;
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
        right: 0;
        background: #54786d;
        border-radius: 50%;
        z-index: 1;
    }
`
export const NotFoundContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #2c283d;
    position: relative;
    z-index: 2;
    height: 80%;
    max-height: 700px;
    width: 80%;
    max-width: 1300px;
    background-color: rgba(255,255,255,.1);
    box-shadow: 20px 20px 20px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
`
export const Text = styled.span`
    font-size: 3.2rem;
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
    margin: 60px 0;
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
export const BtnBackground = styled.div`
    position: absolute;
   top: 0;
   left: 0;
   width: 10%;
   height: 100%;
   background: #ada9bb;
   z-index: -1;
`
export const BtnLink = styled(Link)`
    font-size: 1.6rem;
    letter-spacing: 1px;
    text-decoration: none;
    color: #2c283d;
`