import React, { useEffect } from 'react'
import Partners from '../common/Partners'
import Clinet from '../Clinet'
import { useLocation } from 'react-router-dom';

const Bloglink = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
  
  return (
    <>
      <Clinet />
      <Partners />
    </>
  )
}

export default Bloglink