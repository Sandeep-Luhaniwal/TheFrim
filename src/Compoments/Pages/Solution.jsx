import React, { useEffect } from 'react'
import Testnimalslider from '../Common/Testnimalslider'
import Bussiness from '../Bussiness'
import BlogsimpleCard from '../BlogsimpleCard'
import Cardsolution from '../Cardsolution'
import { useLocation } from 'react-router-dom'

const Solution = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
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