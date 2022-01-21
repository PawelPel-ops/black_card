import styled from "styled-components";

export const FooterSection = styled.section`
    background-color: #2c283d;
    color: #ada9bb;
    display: flex;
    justify-content: center;
`
export const FooterContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const FooterContent = styled.div`
    margin: 100px 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const ContentRow = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
export const CompanyContent = styled.div`
    max-width: 280px;
`
export const Logo = styled.span`
    font-size: 3.2rem;
`
export const LogoDes = styled.p`
    font-size: 1.6rem;
    margin-top: 10px;
`
export const MediaContent = styled.div`
    max-width: 220px;
`
export const MediaHeader = styled.h3`
    font-size: 3.2rem;
    margin-bottom: 10px;
`
export const MediaBox = styled.div`
    display: flex;
    align-items: center;
`
export const IconBox = styled.div`
    margin: 5px;
    cursor: pointer;
`
export const MediaContentBox = styled.div`
    margin: 0 5px 5px;
`
export const Media = styled.span`
    font-size: 1.6rem;
`
export const LinksContent = styled.div`
    max-width: 220px;
    width: 100%;
    margin-right: -20px;
`
export const LinksHeader = styled.h3`
    font-size: 3.2rem;
`
export const LinksWrapper = styled.div`
    margin-top: 10px;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
`
export const ListElement = styled.span`
    font-size: 1.6rem;
    cursor: pointer;
    margin: 5px 20px 5px 0;

    &:hover{
        text-decoration: underline;
    }
`
export const LinkElement = styled.a`
    font-size: 1.2rem;
`
export const FooterLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ada9bb;
    margin: 50px auto 25px;
`
export const FooterRow = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
export const CompanyName = styled.span`
    font-size: 1.2rem;
`
export const DeveloperName = styled.span`
    font-size: 1.2rem;

    a{
        text-decoration: none;
        color: #ada9bb;
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }
`