import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import data from "./Name";

const Resarch = () => {
    const [show, setShow] = useState(false);

    const btnHandleClick = () => {
        setShow(!show);
    }

    const [index, setIndex] = useState(0);
    const { name, id } = data[index];

    const prevBtn = () => {
        setIndex((i) => {
            const newIndex = i - 1;
            return loopIndex(newIndex);
        });
    };
    const nextBtn = () => {
        setIndex((i) => {
            const newIndex = i + 1;
            return loopIndex(newIndex);
        });
    };

    const loopIndex = (i) => {
        if (i < 0) {
            return data.length - 1;
        } else if (i > data.length - 1) {
            return 0;
        }
        return i;
    };
    console.log(nextBtn);
    return (
        <>
            <section className="py-2 py-lg-5">
                <div className="myContainer py-4 py-md-5">
                    <h2 className='sub-heading text-center'>Our Research & Case Studies</h2>
                    <Row className=' justify-content-center'>
                        <Col lg={9} md={11}>
                            <p className='text-center pt-4 normal-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                        </Col>
                    </Row>
                    <Row className='py-4 py-lg-5 align-items-center'>
                        <Col lg={5} md={6} className='order-1 order-md-0 position-relative z-1'>
                            <h3 className='sub-para'>Lorem Ipsum is simply</h3>
                            <p className='pt-2 normal-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                {show && <span className='mb-0'> Lorem ipsum is simply dummy text of the printing dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</span>}
                            </p>
                            <button type='button' onClick={btnHandleClick} className='nav-btn padding10_18 mt-4 transition'>
                                {show ? 'Remove here...' : 'Read More'}
                            </button>
                        </Col>
                        <Col lg={7} md={6} className='d-flex justify-content-center order-0 pb-4 pb-md-0'>
                            <div className='position-relative'>
                                <div className='researchBox position-absolute'>
                                </div>
                                <div className='sliderBox-reseacrh position-relative'>
                                    <img src={name} alt="img" className='w-100 p-12 br-25' />
                                    <div className='position-absolute arrow-btn d-flex'>
                                        <button onClick={prevBtn} className='prev-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                                                <path d="M8.5 16L1 8.5L8.5 1" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <button onClick={nextBtn} className='next-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                                                <path d="M1 1L8.5 8.5L1 16" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>
        </>
    )
}

export default Resarch