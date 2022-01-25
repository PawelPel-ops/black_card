import styled, { keyframes } from "styled-components";

export const PreloaderSection = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(to left, #2c283d, #5a556d);
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.25s ease;
`
export const PreloaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const Header = styled.h3`
    font-size: 3.2rem;
    color: #ada9bb;
    margin-bottom: 70px;
`
export const AnimationBox = styled.div`
    position: relative;
    margin: 0 auto;
    width: 120px;
`
export const Move1 = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`
export const Element1 = styled.div`
    width: 120px;
    height: 120px;
    border: 2px solid #ada9bb;
    animation: ${Move1} 3s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
`
export const Element2 = styled.div`
    width: 120px;
    height: 120px;
    border: 2px solid #ada9bb;
    animation: ${Move1} 4s linear infinite;
    animation-delay: 0.4s;
    position: absolute;
    top: 0;
    left: 0;
`
export const Element3 = styled.div`
    width: 120px;
    height: 120px;
    border: 2px solid #ada9bb;
    animation: ${Move1} 5s linear infinite;
    animation-delay: 0.8s;
    position: absolute;
    top: 0;
    left: 0;
`
export const Element4 = styled.div`
    width: 120px;
    height: 120px;
    border: 2px solid #ada9bb;
    animation: ${Move1} 6s linear infinite;
    animation-delay: 1.2s;
    position: absolute;
    top: 0;
    left: 0;
`
