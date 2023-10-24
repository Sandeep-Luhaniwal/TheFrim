import React from 'react'
import Testnimalslider from '../Common/Testnimalslider'
import Bussiness from '../Bussiness'
import BlogsimpleCard from '../BlogsimpleCard'
import Cardsolution from '../Cardsolution'

const Solution = () => {
  return (
    <>
      <Bussiness />
      <div className="section-color">
        <BlogsimpleCard />
      </div>
      <Cardsolution />
      <div className="section-color">
        <Testnimalslider />
      </div>
    </>
  )
}

export default Solution