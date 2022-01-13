import React from 'react'
import {
    AboutSection,
    AboutContainer,
    AboutContent,
    AboutHeader,
    AboutDescription,
    IconsWrapper,
    IconBox,
    BackgroundBox,
    Description
} from './AboutE'
import { AboutElements } from './AboutData'
import { IconContext } from "react-icons";

const About = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <AboutContent>
                    <AboutHeader>Proident officia anim do magna veniam amet Lorem eiusmod tempor veniam.</AboutHeader>
                    <AboutDescription>In id ullamco anim cillum sint consectetur eu commodo id cillum eiusmod laboris dolore. Proident esse cupidatat amet amet in non eu cillum sit. Proident culpa tempor nulla magna deserunt nisi voluptate esse.</AboutDescription>
                    <IconsWrapper>
                        {AboutElements.map((obj, index) => {
                            return (
                                <IconBox key={index}>
                                    <BackgroundBox>
                                        <IconContext.Provider value={{ style: { fontSize: '3.6rem' } }}>
                                            {obj.icon}
                                        </IconContext.Provider>
                                        <Description>{obj.text}</Description>
                                    </BackgroundBox>
                                </IconBox>
                            )
                        })}
                    </IconsWrapper>
                </AboutContent>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
