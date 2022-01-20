import React, { useState } from 'react'
import {
    TestimonialsSection,
    TestimonialsContainer,
    TestimonialsContent,
    TestimonialsHeader,
    BtnPrev,
    ArrowBox,
    PrevArrow,
    BtnNext,
    NextArrow,
    CarouselBox,
    Carousel,
    TestimonialWrapper,
    TBox,
    Testimonial,
    AvBox,
    Avatar,
    BgCircle,
    Name
} from './TestimonialsE'
import { AllTestimonials } from './TestimonialsData'

const Testimonials = () => {
    const [active, setActive] = useState(0);

    const handlePrev = () => {
        if(active === AllTestimonials.length-1){
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    const handleNext = () => {
        if(active === 0){
            setActive(AllTestimonials.length - 1)
        } else {
            setActive(active - 1)
        }
    }

    // console.log(AllTestimonials[active]);

    

    return (
        <TestimonialsSection>
            <TestimonialsContainer>
                <TestimonialsContent>
                    <TestimonialsHeader>Cillum exercitation veniam ullamco sint.</TestimonialsHeader>
                    <BtnPrev onClick={handlePrev}>
                        <ArrowBox>
                            <PrevArrow className='prevArrow' />
                        </ArrowBox>
                    </BtnPrev>
                    <BtnNext onClick={handleNext}>
                        <ArrowBox>
                            <NextArrow className="nextArrow" />
                        </ArrowBox>
                    </BtnNext>
                    <CarouselBox>
                        <Carousel style={{'transform': `translateX(-${AllTestimonials[active].id*600}px)`}}>
                        {AllTestimonials.map((obj, index) => {
                            return (
                                <TestimonialWrapper key={index} className={`${obj.id === active ? 'active' : ''}`}>
                                    <TBox>
                                        <Testimonial>{obj.des}</Testimonial>
                                    </TBox>
                                    <AvBox>
                                        <Avatar>
                                            <BgCircle />
                                        </Avatar>
                                        <Name>{obj.name}</Name>
                                    </AvBox>
                                </TestimonialWrapper>
                            )
                        })}
                        </Carousel>
                    </CarouselBox>
                </TestimonialsContent>
            </TestimonialsContainer>
        </TestimonialsSection>
    )
}

export default Testimonials
