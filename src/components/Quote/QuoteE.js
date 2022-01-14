import styled from "styled-components";
import background_img from '../../images/quote.jpg'

export const QuoteSection = styled.section`
    width: 100%;
    height: 300px;
    background: url(${background_img}) no-repeat top fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
    }
`

export const QuoteContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const QuoteContent = styled.div`
    margin: auto 100px;
    text-align: center;
`

export const QuoteHeader = styled.h3`
    font-size: 3.2rem;
    color: #ada9bb;
    position: relative;
    z-index: 3;
`