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
        right: 10%;
        background: #2c283d;
        border-radius: 50%;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        width: 15vw;
        height: 15vw;
        top: 8%;
        left: 15%;
        background: #54786d;
        border-radius: 50%;
        z-index: 1;
    }
`

export const TestimonialsContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    // height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const TestimonialsContent = styled.div`
    margin: 100px 50px;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TestimonialsHeader = styled.h2`
    font-size: 3.2rem;
`

export const BtnPrev = styled.div`
    position: absolute;
    // top: 50%;
    bottom: -40px;
    right: 30%;
    // transform: translateY(-50%);
    // right: -80px;
    cursor: pointer;
    z-index: 2;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
        width: 10px;
        height: 30px;
        border-radius: 5px;
        background: #2d909b;
        z-index: 1;
    }

    &:hover::after {
        left: 1px;
        width: 85%;
        height: 85%;
        transition: 0.25s;
    }

    &:hover .prevArrow {
        transform: scale(1.4) rotate(45deg);
        transition: 0.25s ease;
    }
`

export const ArrowBox = styled.div`
    font-size: 3.2rem;
    background-color: rgba(255,255,255,.1);
    box-shadow: 10px 10px 10px rgba(0,0,0,.6);
    border-radius: 15px;
    border-top: 1px solid rgba(255,255,255,.5);
    border-left: 1px solid rgba(255,255,255,.5);
    backdrop-filter: blur(10px);
    padding: 20px;
    position: relative;
    z-index: 5;
`

export const PrevArrow = styled.div`
    width: 20px;
    height: 20px;
    border-top: 2px solid rgba(0,0,0,.4);
    border-right: 2px solid rgba(0,0,0,.4);
    transform: rotate(45deg);
    position: relative;
    }
`

export const BtnNext = styled.div`
    position: absolute;
    // top: 50%;
    // transform: translateY(-50%);
    bottom: -40px;
    left: 30%;
    // left: -80px;
    cursor: pointer;
    z-index: 2;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
        width: 10px;
        height: 30px;
        border-radius: 5px;
        background: #2d909b;
        z-index: 1;
    }

    &:hover::after {
        left: 1px;
        width: 85%;
        height: 85%;
        transition: 0.25s;
    }

    &:hover .nextArrow {
        transform: scale(1.4) rotate(-45deg);
        transition: 0.25s ease;
    }
`

export const NextArrow = styled.div`
    width: 20px;
    height: 20px;
    border-top: 2px solid rgba(0,0,0,.4);
    border-left: 2px solid rgba(0,0,0,.4);
    transform: rotate(-45deg);
`

export const CarouselBox = styled.div`
    max-width: 500px;
    width: 90vw;
    position: relative;
    // overflow: hidden;
`

export const Carousel = styled.div`
    display: flex;
    transition: transform 0.3s ease;
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
    max-width: 400px;
    margin: 50px 100px;

    &:first-child{
        margin-left: 50px;
    }
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
    width: 400px;
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