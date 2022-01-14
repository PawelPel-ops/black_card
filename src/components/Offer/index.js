import React from 'react'
import {
    OfferSection,
    OfferContainer,
    OfferContent,
    OfferHeader,
    OffersWrapper,
    OfferBox,
    Price,
    Line,
    SmallHeader,
    Text,
    BtnBox,
    Btn,
    OfferLink
} from './OfferE'
import { allOffers } from './OfferData'

const Offer = () => {
    return (
        <OfferSection>
            <OfferContainer>
                <OfferContent>
                    <OfferHeader>Anim velit tempor officia nisi ea dolor excepteur quis elit.</OfferHeader>
                    <OffersWrapper>
                        {allOffers.map((obj, index) => {
                            return (
                                <OfferBox key={index} premium={obj.premium}>
                                    <Price premium={obj.premium}>{obj.price}</Price>
                                    <Line />
                                    <SmallHeader premium={obj.premium}>{obj.sheader}</SmallHeader>
                                    <Text premium={obj.premium}>{obj.des0}</Text>
                                    <Text premium={obj.premium}>{obj.des1}</Text>
                                    <Text premium={obj.premium}>{obj.des2}</Text>
                                    <Text premium={obj.premium}>{obj.des3}</Text>
                                    <Text premium={obj.premium}>{obj.des4}</Text>
                                    <BtnBox>
                                        <Btn className='btnBackground'/>
                                        <OfferLink to='/' className='btnLink'>Read more</OfferLink>
                                    </BtnBox>
                                </OfferBox>
                            )
                        })}
                    </OffersWrapper>
                </OfferContent>
            </OfferContainer>
        </OfferSection>
    )
}

export default Offer
