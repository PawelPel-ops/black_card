import React, {useEffect, useRef} from 'react'
import {
    PreloaderSection,
    PreloaderContent,
    Header,
    AnimationBox,
    Element1,
    Element2,
    Element3,
    Element4
} from './PreloaderE'

const Preloader = () => {
    const preloadSection = useRef(null);

    useEffect(() => {
        window.onload = () => {
            setTimeout(()=> {
                preloadSection.current.style.opacity = '0';
                preloadSection.current.addEventListener('transitionend', () => {
                    preloadSection.current.style.display = 'none'
                })
            }, 3000)
        }
    })

    return (
        <PreloaderSection ref={preloadSection}>
            <PreloaderContent>
                <Header>Loading ...</Header>
                <AnimationBox>
                    <Element1 />
                    <Element2 />
                    <Element3 />
                    <Element4 />
                </AnimationBox>
            </PreloaderContent>
        </PreloaderSection>
    )
}

export default Preloader
