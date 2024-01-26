import React, { useEffect } from 'react'
import Hero from '../common/Hero'
import Partner from '../common/Partners'
import Clinet from '../Clinet'
import Bussiness from '../Bussiness'
import Reason from '../Reason'
import Resarch from '../Resarch'
import Blog from '../Blog'
import Testnimalslider from '../common/Testnimalslider'
import Fromgoogle from '../common/Fromgoogle'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname])
    return (
        <>
            <Hero />
            <Partner />
            <Clinet />
            <Bussiness />
            <Reason />
            <Resarch />
            <Blog />
            <Testnimalslider />
            <Fromgoogle />
        </>
    )
}

export default Home