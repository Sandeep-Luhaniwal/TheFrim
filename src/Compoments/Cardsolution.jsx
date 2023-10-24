import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from '../assets/images/webp/solution_img1.png'
import img2 from '../assets/images/webp/solution_img2.png'
import img3 from '../assets/images/webp/solution_img3.png'

const Cardsolution = () => {
    return (
        <>
            <section className="overflow-hidden py-2 py-lg-5">
                <div className="myContainer p-4 py-lg-5">
                    <Row className='justify-content-between align-items-center'>
                        <Col md={6}>
                            <h3 className='sub-para'>Coaching</h3>
                            <p className="normal-para pt-2 mt-1 pe-xl-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                        </Col>
                        <Col md={6} lg={5} className=' d-flex justify-content-center justify-content-md-end py-4 py-md-0'>
                            <div className="position-relative">
                                <div className="bottom-cricle position-absolute"></div>
                                <img src={img1} alt="img1" className='z-1 position-relative boxsolution imgBorder br-25' />
                            </div>
                        </Col>
                        <Col md={6} lg={5} className='py-lg-5 py-4 order-1 order-md-0 d-flex justify-content-center justify-content-md-start'>
                            <div className="position-relative">
                                <div className="bottom-cricle position-absolute"></div>
                                <img src={img2} alt="img1" className='z-1 position-relative boxsolution imgBorder br-25' />
                            </div>
                        </Col>
                        <Col md={6} className='py-lg-5 order-0 ps-md-4 ps-lg-5'>
                            <h3 className='sub-para'>Digital Partner</h3>
                            <p className="normal-para pt-2 mt-1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                        </Col>
                        <Col md={6} className='mb-md-5 order-2'>
                            <h3 className='sub-para'>SEO</h3>
                            <p className="normal-para pt-2 mt-1 pe-xl-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                            </p>
                        </Col>
                        <Col md={6} lg={5}  className='mb-md-5 order-3 d-flex justify-content-center justify-content-md-end py-4 py-md-0'>
                            <div className="position-relative">
                                <div className="bottom-cricle position-absolute"></div>
                                <img src={img3} alt="img1" className='z-1 position-relative boxsolution imgBorder br-25' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Cardsolution