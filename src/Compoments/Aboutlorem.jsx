import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imgcontent from '../assets/images/webp/blog_img1.webp'

const Aboutlorem = () => {
    return (
        <>
            <div className="myContainer py-2 py-lg-5">
                <Row className='align-items-center py-4 py-lg-5'>
                    <Col md={6} className='order-1 order-md-0 pt-4 pt-md-0'>
                        <div className='contantimg br-25'>
                            <img src={imgcontent} alt="imgcontent" className='w-100 br-25' />
                        </div>
                    </Col>
                    <Col md={6} className='order-0'>
                        <h2 className='sub-heading ps-md-4'>Lorem <span className="z-1 position-relative">Ipsum<span className='heading-line'></span></span> </h2>
                        <p className='normal-para ps-md-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</b>, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Aboutlorem