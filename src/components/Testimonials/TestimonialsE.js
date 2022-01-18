import styled from "styled-components";

export const TestimonialsSection = styled.section`
    background: #ada9bb;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

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

    // &::before {
    //     content: '';
    //     position: absolute;
    //     width: 30vw;
    //     height: 30vw;
    //     top: 2vw;
    //     right: 5vw;
    //     background: #2d909b;
    //     border-radius: 50%;
    //     z-index: 1;
    // }
`

export const TestimonialsContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TestimonialsContent = styled.div`
    margin: 100px 50px;
    position: relative;
    z-index: 2;
    
`

export const TestimonialsHeader = styled.h2`
    font-size: 3.2rem;
`

export const CarouselBox = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: -500px;
`

export const TestimonialWrapper = styled.div`
    color: #2c283d;
    background-color: rgba(255,255,255,.1);
    padding: 20px;
    box-shadow: 20px 20px 20px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
    width: 400px;
    // height: ;
    margin: 50px;
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
`

export const TBox = styled.div`
    margin: 10px;
`

export const Testimonial = styled.p`
    font-size: 1.6rem;
`

export const AvBox = styled.div`
    display: flex;
    margin: 10px auto;
`

export const Avatar = styled.div`
    margin: 5px;
`

export const BgCircle = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.3);
    position: relative;
    overflow: hidden;

    &::after{
        content: '';
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 70%;
        height: 70%;
        border-radius: 20px;
        background: rgba(255, 255, 255, .3);
    }

    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 40%;
        border-radius: 50%;
        background: rgba(255, 255, 255, .3);
    }
`

export const Name = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    margin: 2px 15px;
`