import React, { useEffect } from 'react'
import Fromgoogle from '../Common/Fromgoogle'
import Contactustext from '../Common/Contantustext'
import Herocontact from '../Common/Herocontact'
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