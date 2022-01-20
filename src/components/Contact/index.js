import React from 'react'
import Address from './address';
import FormElement from './form';
import {
    ContactSection,
    ContactContainer,
    ContactContent,
    Column
} from './ContactE'

const Contact = () => {
    return (
        <ContactSection>
            <ContactContainer>
                <ContactContent>
                    <Column>
                        <Address />
                    </Column>
                    <Column>
                        <FormElement />
                    </Column>
                </ContactContent>
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
