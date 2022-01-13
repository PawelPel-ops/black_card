import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Info from '../components/Info'
import { infoObjOne, infoObjTwo } from '../components/Info/InfoData'

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            {/* <Info {...infoObjOne} />
            <Info {...infoObjTwo} /> */}
            <Info />
        </>
    )
}

export default Home
