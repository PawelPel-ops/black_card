import styled from "styled-components";

export const AboutSection = styled.section`
    background: #ada9bb;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AboutContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const AboutContent = styled.div`
    margin: 100px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const AboutHeader = styled.h1`
    font-size: 3.2rem;
    max-width: 500px;
    text-align: center;
`

export const AboutDescription = styled.p`
    font-size: 1.6rem;
    max-width: 700px;
    text-align: center;
    margin: 20px 0 50px;
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const IconBox = styled.div`
    position: relative;
    margin: 10px;

    &::after {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 10px;
        border-radius: 5px;
        background: #2d909b;
        z-index: 1;
    }

    &:hover::after {
        top: 5px;
        width: 90%;
        height: 90%;
        transition: 0.25s;
    }
`

export const BackgroundBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative;
    color: #2c283d;
    z-index: 2;
    background-color: rgba(255,255,255,.1);
    box-shadow: 10px 10px 10px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
    cursor: pointer;
`

export const Description = styled.span`
    font-size: 1.2rem;
    text-align: center;
`