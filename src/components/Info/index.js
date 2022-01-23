import React, { useState } from 'react'
import {
    InfoSection,
    InfoContainer,
    InfoContent,
    InfoRow,
    InfoColumn1,
    BoxImg,
    Img,
    InfoColumn2,
    InfoHeader,
    ContentWrapper,
    TextWrapper,
    Border,
    Text,
    Description,
    BtnBox,
    BtnBackground,
    Btn,
    LinkScroll
} from './InfoE'
import { infoDatas } from './InfoData'

const Info = () => {
    const [selectedDes, setSelectedDes] = useState(1)

    return (
        <InfoSection id='offer'>
            <InfoContainer>
                {infoDatas.map((obj, index) => {
                    return (
                    <InfoContent key={index}>
                        <InfoRow imgStart={obj.imgStart}>
                            <InfoColumn1 >
                                <BoxImg>
                                    <Img src={obj.img} alt={obj.alt} width='400px' height='400px'/>
                                </BoxImg>
                            </InfoColumn1>
                            <InfoColumn2>
                                <InfoHeader>{obj.big_header}</InfoHeader>
                                {obj.details.map((item, index) => {
                                    return (
                                    <ContentWrapper key={index}>
                                        <TextWrapper>
                                            <Border onClick={() => setSelectedDes(item.id)} className={selectedDes === item.id ? 'active' : ''}>{selectedDes === item.id ? '-' : '+'}</Border>
                                            <Text>{item.header}</Text>
                                        </TextWrapper>
                                        { selectedDes === item.id && <Description>{item.des}</Description> }
                                    </ContentWrapper> 
                                    )
                                })}
                                <BtnBox>
                                    <BtnBackground className='btnBackground'/>
                                    <Btn className='btnLink'>
                                        <LinkScroll
                                            to='contact' 
                                            smooth={true} 
                                            duration={500} 
                                            spy='true' 
                                            exact='true' 
                                            offset={-58}
                                        >Contact Us</LinkScroll>
                                    </Btn>
                                </BtnBox>
                            </InfoColumn2>
                        </InfoRow>
                    </InfoContent> 
                    )
                })}
            </InfoContainer>
        </InfoSection>
    )
}

export default Info
