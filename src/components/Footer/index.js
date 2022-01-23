import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { footer_data } from './FooterData';
import {
    FooterSection,
    FooterContainer,
    FooterContent,
    ContentRow,
    CompanyContent,
    Logo,
    LogoDes,
    MediaContent,
    MediaHeader,
    MediaBox,
    IconBox,
    MediaContentBox,
    Media,
    LinksContent,
    LinksHeader,
    LinksWrapper,
    ListElement,
    LinkElement,
    FooterLine,
    FooterRow,
    CompanyName,
    DeveloperName
} from './FooterE'

const Footer = () => {
    // const MediaData = footer_data.media_data;

    return (
        <FooterSection>
            <FooterContainer>
                <FooterContent>
                    <ContentRow>
                        <CompanyContent>
                            <Logo>Logo</Logo>
                            <LogoDes>In reprehenderit consequat ex irure commodo ullamco veniam sunt in. Qui veniam nulla eu dolor minim esse tempor nostrud sint sunt nisi nulla ullamco enim. Sint nostrud eu duis ipsum do minim nisi elit magna nisi adipisicing fugiat veniam pariatur.</LogoDes>
                        </CompanyContent>
                        <MediaContent>
                            <MediaHeader>Get in Touch</MediaHeader>
                            <IconContext.Provider value={{ style: { fontSize: '2.6rem' } }}>
                                {footer_data.media_data.map((obj, index) => {
                                    return (
                                        <MediaBox key={index}>
                                            <IconBox>
                                                {obj.icon}
                                            </IconBox>
                                            <MediaContentBox>
                                                <Media>{obj.data}</Media>
                                            </MediaContentBox>
                                        </MediaBox>
                                    )
                                })}
                            </IconContext.Provider>
                        </MediaContent>
                        <LinksContent>
                            <LinksHeader>Links</LinksHeader>
                            <LinksWrapper>
                                {footer_data.link_data.map((obj, index) => {
                                    return (
                                        <ListElement key={index}>
                                            <LinkElement>{obj.link}</LinkElement>
                                        </ListElement>
                                    )
                                })}
                            </LinksWrapper>
                        </LinksContent>
                    </ContentRow>
                    <FooterLine />
                    <FooterRow>
                        <CompanyName>CompanyName © {new Date().getFullYear()} All rights reserved.</CompanyName>
                        <DeveloperName>Design and implementation: <a href="https://wah.netlify.app/"  target='_blank' rel="noreferrer">Web App House</a></DeveloperName>
                    </FooterRow>
                </FooterContent>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
