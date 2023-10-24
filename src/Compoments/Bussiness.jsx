import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import tfimg from '../assets/images/webp/tf_img.png'
import { CoachingIcon, PartnerIcon, SeoIcon } from './Icon';

const Bussiness = () => {
    const [show, setShow] = useState(false);
    const btnHandleClick = () => {
        setShow(!show)
    }
    return (
        <>
            <section className='overflow-hidden'>
                <div className="myContainer py-2 py-lg-5">
                    <Row className='py-4 py-md-5 justify-content-between align-items-center'>
                        <Col md={7} lg={6}>
                            <h2 className='sub-heading d-md-none pb-4'>Perfect Solution for
                                Your <span className="z-1 position-relative">Bussiness <span className='heading-line'></span></span>
                            </h2>
                            <div className='position-relative '>
                                <img src={tfimg} alt="tf img" className='position-absolute ftimg d-none d-md-block' />
                                <div className="circlebox position-absolute"></div>
                                <div className="circlebox2 position-absolute"></div>
                                <div className="circlebox3 position-absolute"></div>
                                <div className="position-relative d-grid z-1">
                                    <div className="grid_1">
                                        <div className="bussinessBox">
                                            <div className="d-flex justify-content-center pb-1"> <CoachingIcon /></div>
                                            <h4 className='text-center pt-4'>Coaching</h4>
                                            <p className='normal-para text-center pt-2'>Loren rasion gravida auem is bibenua tase</p>
                                        </div>
                                    </div>
                                    <div className="grid_2 ps-83 pt-4 pt-sm-0">
                                        <div className="bussinessBox">
                                            <div className="d-flex justify-content-center pb-1"> <PartnerIcon /></div>
                                            <h4 className='text-center pt-4'>Digital Partner</h4>
                                            <p className='normal-para text-center pt-2'>Loren rasion gravida auem is bibenua tase</p>
                                        </div>
                                    </div>
                                    <div className="grid_3 pt-73">
                                        <div className="bussinessBox">
                                            <div className="d-flex justify-content-center pb-1"> <SeoIcon /></div>
                                            <h4 className='text-center pt-4'>SEO</h4>
                                            <p className='normal-para text-center pt-2'>Loren rasion gravida auem is bibenua tase</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={5} pt-4 pt-md-0>
                            <h2 className='sub-heading d-none d-md-block'>Perfect Solution for
                                Your <span className="z-1 position-relative">Bussiness <span className='heading-line'></span></span>
                            </h2>
                            <p className="normal-para py-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                {show && <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span>}
                            </p>
                            <button onClick={btnHandleClick} className='mt-4 nav-btn padding10_18'>
                                {show ? 'Remove here...' : 'Read More'}
                            </button>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Bussiness