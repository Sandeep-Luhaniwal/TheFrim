import React from 'react'
import { Col, Row } from 'react-bootstrap'
import herocases from '../../assets/images/webp/heroCase_img.png'

const CasesHero = () => {
    return (
        <>
            <section className='bg-gradian pt-4 pt-md-0 position-relative'>
                <div className="myContainer pt-4 pt-md-0 d-flex flex-column justify-content-center h-660">
                    <Row className='pb-3 align-items-center'>
                        <Col md={6} lg={5}>
                            <h1 className='main-heading'>Our Research <span className='d-lg-block'>& Case Studies</span></h1>
                            <p className='pt-3 pb-4 normal-para'>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                <span className="d-lg-block">the industry's standard dummy.</span>
                            </p>
                            <button className='mt-2 nav-btn padding12_20'>
                                Get in Touch
                            </button>
                        </Col>
                        <Col md={6} lg={7} className='mt-4 mt-md-0'>
                            <img src={herocases} alt="herocotant" className='herocontant br-25 br-37' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default CasesHero