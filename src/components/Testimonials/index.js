import React from 'react'
import {
    TestimonialsSection,
    TestimonialsContainer,
    TestimonialsContent,
    TestimonialsHeader,
    CarouselBox,
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
    return (
        <TestimonialsSection>
            <TestimonialsContainer>
                <TestimonialsContent>
                    <TestimonialsHeader>Cillum exercitation veniam ullamco sint.</TestimonialsHeader>
                    {/* <TestimonialWrapper>
                        <TBox>
                            <Testimonial>lorem bla bla bla</Testimonial>
                        </TBox>
                        <AvBox>
                            <Avatar>
                                <BgCircle />
                            </Avatar>
                            <Name>Bla Bla</Name>
                        </AvBox>
                    </TestimonialWrapper> */}
                    <CarouselBox>
                        {AllTestimonials.map((obj, index) => {
                            return (
                                <TestimonialWrapper key={index}>
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
                    </CarouselBox>
                </TestimonialsContent>
            </TestimonialsContainer>
        </TestimonialsSection>
    )
}

export default Testimonials
