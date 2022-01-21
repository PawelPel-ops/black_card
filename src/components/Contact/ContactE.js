import styled from "styled-components";

export const ContactSection = styled.section`
    background: #ada9bb;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        width: 25vw;
        height: 25vw;
        bottom: 5%;
        left: 10%;
        background: #2d909b;
        border-radius: 50%;
        z-index: 1;
    }
`
export const ContactContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ContactContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 100px 50px 200px;
    width: 100%;
    position: relative;
    z-index: 2;
`

export const Column = styled.div`
    max-width: 600px;
    min-height: 500px;
    padding: 50px;
    color: #2c283d;
    background-color: rgba(255,255,255,.1);
    box-shadow: 20px 20px 20px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
`

export const AdressHeader = styled.h3`
    font-size: 3.2rem;
`
export const AdressDes = styled.span`
    font-size: 1.6rem;
`
export const AdressBox = styled.div`
    margin: 20px auto;
    display: flex;
`
export const IconBox = styled.div`
    margin: 5px;
`
export const IconDes = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
`
export const IconName = styled.span`
    font-size: 1.6rem;
`
export const IconData = styled.span`
    font-size: 1.1rem;
`