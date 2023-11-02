import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { QuestionIcon } from './Icon'
import graph from '../assets/images/webp/clinet-graph.webp'
import graph1 from '../assets/images/webp/client1.webp'
import bgClient from '../assets/images/webp/bg-client.webp'

const Clinet = () => {
    return (
        <>
            <section className='py-lg-5 py-2 section-color overflow-hidden'>
                <div className="myContainer py-4 py-md-5 my-lg-3">
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <h2 className='sub-heading'>Frustration of <span className="z-1 position-relative">Clients <span className='heading-line'></span></span></h2>
                            <div className="d-flex d-md-none justify-content-center mt-4">
                                <img src={graph} alt="graph" className='w_100 br-25 boxImgShdow' />
                            </div>
                            <p className="normal-para py-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <ul className='mb-0 pt-2 mt-1'>
                                <li className='normal-para'><QuestionIcon /><span className='ps-2'>Loren rasion gravida auem is bibenua tase</span></li>
                                <li className='pt-2 mt-1 normal-para'><QuestionIcon /><span className='ps-2'>Lorem Ipsum is simply dummy text of the.</span></li>
                                <li className='pt-2 mt-1 normal-para'><QuestionIcon /><span className='ps-2'>Printing and typesetting industry. Lorem Ipsum</span></li>
                                <li className='pt-2 mt-1 normal-para'><QuestionIcon /><span className='ps-2'>When an unknown printer took a galley of type and scrambled it</span></li>
                            </ul>
                        </Col>
                        <Col md={6} className='d-none d-md-block '>
                            <div className="position-relative">
                                <img src={bgClient} alt="client" className='graphImg2 position-absolute d-none d-lg-block' />
                                <div className="position-relative z-1">
                                    <div className="d-flex justify-content-end">
                                        <img src={graph} alt="graph" className='graphImg br-25 cursor-pointer boxImgShdow' />
                                    </div>
                                    <img src={graph1} alt="graph" className='graphImg1 br-25 position-absolute cursor-pointer boxImgShdow' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Clinet