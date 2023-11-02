import React from 'react'
import { Col, Row } from 'react-bootstrap'
import herocontant from '../../assets/images/webp/herocontentimg.webp'

const Herocontact = () => {
    return (
        <>
            <section className='bg-gradian pt-4 pt-md-0 position-relative'>
                <div className="myContainer pt-4 pt-md-0 d-flex flex-column justify-content-center h-660">
                    <Row className='pb-3 align-items-center'>
                        <Col md={6} lg={5}>
                            <h1 className='main-heading'>Our Digital Journey</h1>
                            <p className='pt-3 pb-4 normal-para'>Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                <span className="d-lg-block">the industry's standard dummy.</span></p>
                        </Col>
                        <Col md={6} lg={7} >
                            <img src={herocontant} alt="herocotant" className='herocontant' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Herocontact