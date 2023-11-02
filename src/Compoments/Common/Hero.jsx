import React from 'react'
import heroImg from '../../assets/images/webp/hero-main-img.webp'
import { Row, Col } from 'react-bootstrap'

const Hero = () => {
    return (
        <>
            <section className='hero-bg bg-white'>
                <div className="myContainer">
                    <Row className='py176_152'>
                        <Col md={6} className='d-md-none'>
                            <img src={heroImg} alt="hero" className='hero-img' />
                        </Col>
                        <Col md={6} className='pt-4 pt-md-0'>
                            <h1 className='main-heading mb-2 pb-1'>Get Bussiness
                                <span className='d-md-block'> Solutions with TheFirm.</span></h1>
                            <p className='normal-para pt-3'>Lorem Ipsum is simply dummy text of the printing
                                <span className="d-lg-block"> and typesetting industry. Lorem Ipsum has been</span>
                                the industry's standard dummy.</p>
                            <button className='my-4 nav-btn padding12_20'>
                                Get in Touch
                            </button>
                        </Col>

                    </Row>
                </div>
            </section >
        </>
    )
}

export default Hero