import React, { useEffect } from 'react'
import Aboutlorem from '../Aboutlorem'
import Aboutdetails from '../Aboutdetails'
import Heroabout from '../Heroabout'
import { useLocation } from 'react-router-dom'

const AboutUs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname])
    return (
        <>
            <Heroabout />
            <Aboutlorem />
            <Aboutdetails />
        </>
    )
}

export default AboutUs