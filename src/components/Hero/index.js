import React from 'react'
import {
    HeroSection,
    HeroContainer,
    HeroContent,
    WrapperText,
    SmallHeader,
    BigHeader,
    DescriptionHero,
    BtnBox,
    LinkScroll,
    WrapperCard,
    Card,
    Name,
    Chip,
    Circle1,
    Circle2,
    Line1,
    Number,
    DateContent,
    Date,
    Owner,
    WrapperLogo,
    Logo,
    Shape1,
    Shape2,
    LogoName
} from './HeroE'

const Hero = () => {
    return (
        <>
            <HeroSection>
                <HeroContainer>
                    <HeroContent>
                        <WrapperText>
                            <SmallHeader>Aute in Lorem voluptate ea voluptate proident</SmallHeader>
                            <BigHeader>Do aliqua pariatur eiusmod anim eu aliquip amet</BigHeader>
                            <DescriptionHero>Lorem consequat officia enim dolore consectetur tempor nostrud eu nisi veniam incididunt. Id fugiat aliquip pariatur cupidatat id veniam enim commodo.</DescriptionHero>
                            <BtnBox>
                                <LinkScroll to='/'>Contact Us</LinkScroll>
                            </BtnBox>
                        </WrapperText>
                        <WrapperCard>
                            <Card>
                                <Name>GlassMorphism Card</Name>
                                <Chip>
                                    <Circle1 />
                                    <Circle2 />
                                    <Line1 />
                                    <Line1 />
                                    <Line1 />
                                    <Line1 />
                                </Chip>
                                <Number>0000 1111 2222 3333</Number>
                                <DateContent>month/year</DateContent>
                                <Date>12/29</Date>
                                <Owner>lorem ipsum</Owner>
                                <WrapperLogo>
                                    <Logo>
                                        <Shape1 />
                                        <Shape2 />
                                    </Logo>
                                    <LogoName>GlassMorphism</LogoName>
                                </WrapperLogo>
                            </Card>
                        </WrapperCard>
                    </HeroContent>
                </HeroContainer>
            </HeroSection>
        </>
    )
}

export default Hero
