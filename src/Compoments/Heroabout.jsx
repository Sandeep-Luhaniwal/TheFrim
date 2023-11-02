import React from 'react'
import { Col, Row } from 'react-bootstrap'
import aboutHero from '../assets/images/webp/aboutHero_img.webp'

const Heroabout = () => {
    return (
        <>
            <section className="section-color py-2 py-xl-5">
                <div className="myContainer py-4 py-lg-5">
                    <Row className='align-items-center'>
                        <Col lg={6} className='order-1'>
                            <h2 className='sub-heading d-none d-lg-block'>Lorem <span className="z-1 position-relative">Ipsum<span className='heading-line'></span></span> </h2>
                            <p className='normal-para pt-2 pe-xl-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='d-flex mt-4 mt-md-5 pt-xl-4 gap-4'>
                                <button className='nav-btn padding10_18'>
                                    Digital Partners
                                </button>
                                <button className='nav-btn padding10_18 d-none d-sm-block'>
                                    Coaching
                                </button>
                            </div>
                            <button className='nav-btn padding10_18 d-sm-none mt-4'>
                                Coaching
                            </button>
                        </Col>
                        <Col lg={6} className='ps-lg-5 order-0 order-lg-1'>
                            <h2 className='sub-heading d-lg-none'>Lorem <span className="z-1 position-relative">Ipsum<span className='heading-line'></span></span> </h2>
                            <div className="d-flex justify-content-center py-3 py-lg-0">
                                <div className="position-relative">
                                    <div className='bottom-cricle position-absolute'></div>
                                    <img src={aboutHero} alt="aoutHero" className='aboutImg br-25 imgBorder z-1 position-relative' />
                                </div>
                           </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Heroabout