import React from 'react'
import Testnimalslider from '../Common/Testnimalslider'
import CasesHero from '../Heros/CasesHero'
import Tabcases from '../Tabcases'

const Cases = () => {
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