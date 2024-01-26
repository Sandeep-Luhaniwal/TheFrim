import React, { useEffect } from 'react'
import Testnimalslider from '../common/Testnimalslider'
import CasesHero from '../caseSection/CasesHero'
import Tabcases from '../Tabcases'
import { useLocation } from 'react-router-dom'

const Cases = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname])
    return (
        <>
            <CasesHero />
            <Tabcases />
            <div className="section-color">
                <Testnimalslider />
            </div>
        </>
    )
}

export default Cases