import React, { useEffect } from 'react'
import Fromgoogle from '../common/Fromgoogle'
import Contactustext from '../common/Contantustext'
import Herocontact from '../common/Herocontact'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
  return (
    <>
      <Herocontact />
      <Contactustext />
      <Fromgoogle />
    </>
  )
}

export default Contact