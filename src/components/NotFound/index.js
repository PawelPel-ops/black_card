import React from 'react'
import {
    NotFoundSection,
    NotFoundContent,
    Text,
    BtnBox,
    BtnBackground,
    BtnLink
} from './NotFoundE'

const NotFound = () => {
    return (
        <NotFoundSection>
            <NotFoundContent>
                <Text>Page does not exist</Text>
                <BtnBox>
                    <BtnBackground className='btnBackground'/>
                    <BtnLink to='/' className='btnLink'>Take me home</BtnLink>
                </BtnBox>
            </NotFoundContent>
        </NotFoundSection>
    )
}

export default NotFound
