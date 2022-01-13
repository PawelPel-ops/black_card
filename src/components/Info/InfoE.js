import styled from "styled-components";

export const InfoSection = styled.section`
    background: #ada9bb;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoContainer = styled.div`
    max-width: 1300px;
    width: 100%;
`

export const InfoContent = styled.div`
    display: flex;
    align-items: flex-end;
    color: #2c283d;
    position: relative;
    z-index: 2;
    height: 80%;
    width: 100%;
    background-color: rgba(255,255,255,.1);
    padding: 50px;
    box-shadow: 20px 20px 20px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
    margin: 100px 50px;
    color: #2c283d;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    width: 100%;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    }
`

export const InfoColumn1 = styled.div`
    margin-bottom: 15px;
    width: 100%;
    max-width: 800px;
    grid-area: col1;
`

export const BoxImg = styled.div`
    width: 400px;
    height: 400px;
    overflow: hidden;
    box-shadow: 10px 10px 10px rgba(0,0,0,.6);
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    &:hover {
        transform: scale(1.1);
        transition: 0.25s;
    }
`

export const InfoColumn2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
    width: 100%;
    max-width: 800px;
`

export const InfoHeader = styled.h3`
    font-size: 2.4rem;
`

export const ContentWrapper = styled.div`
    padding: 20px;
`

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Border = styled.div`
    border: 1px solid #2c283d;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    border-radius: 3px;
    margin: 10px;
    cursor: pointer;
`

export const Text = styled.h4`
    font-size: 1.6rem;
`

export const Description = styled.p`
    font-size: 1.6rem;
    margin-left: 35px;
`