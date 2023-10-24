import React from 'react'
import footerLogo from '../../assets/images/webp/mainLogo.png'
import { Col, Row } from 'react-bootstrap'
import { FacbookIcon, IndinIcon, PrintersIcon, TwitterIcon, YoutubeIcon } from '../Icon'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className="pt-lg-5">
                <div className="myContainer py-4 py-md-5">
                    <Row className='d-flex justify-content-center'>
                        <Col md={10} lg={8} >
                            <div className='d-flex justify-content-center'>
                                <img src={footerLogo} alt="footerLogo" />
                            </div>
                            <div className='d-flex justify-content-between py-4 py-md-5 my-lg-3'>
                                <Link to="/" className='nav-text transition'>Home</Link>
                                <Link to="/solution" className='nav-text transition'>Solutions</Link>
                                <Link to="/case" className='nav-text transition'>Cases</Link>
                                <Link to="/aboutus" className='nav-text d-none d-sm-block transition'>About Us</Link>
                                <Link to="/blog" className='nav-text d-none d-sm-block transition'>Blog</Link>
                                <Link to="/contactus" className='nav-text d-none d-sm-block transition'>Contact Us</Link>
                            </div>
                            <div className='d-sm-none d-flex justify-content-between pb-4'>
                                <Link to="/aboutus" className='nav-text transition'>About Us</Link>
                                <Link to="/blog" className='nav-text transition'>Blog</Link>
                                <Link to="/contactus" className='nav-text transition'>Contact Us</Link>
                            </div>
                            <div className='d-flex justify-content-center gap-5 pb-4 pb-md-5'>
                                <a className='footer-icon transition' target='_' href='https://www.facebook.com/'>
                                    <FacbookIcon />
                                </a>
                                <a className='footer-icon transition' target='_' href='https://www.twitter.com/'>
                                    <TwitterIcon />
                                </a>
                                <a className='footer-icon transition' target='_' href='https://www.youtube.com/'>
                                    <YoutubeIcon />
                                </a>
                                <a className='footer-icon transition' target='_' href='https://in.indeed.com/'>
                                    <IndinIcon />
                                </a>
                                <a className='footer-icon transition' target='_' href='https://theprint.in/'>
                                    <PrintersIcon />
                                </a>
                            </div>
                            <p className="mb-0 text-center footer-privary">Copyrights ©2020 Thefirm. All Right Reserved</p>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Footer