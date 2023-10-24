import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BlogCard } from './Common/Helper'
import { TimeIcon } from './Icon'

const Blog = () => {
    const [show, setShow] = useState(false);

    const btnHandleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <section className="section-color py-2 py-lg-5">
                <div className="myContainer py-4 py-md-5">
                    <h2 className="sub-heading text-center">
                        Our <span className="z-1 position-relative">Blog<span className='heading-line'></span></span>
                    </h2>
                    <Row className='mt-2 mt-md-3 mt-lg-4 pt-lg-3'>
                        {BlogCard.map((blogteam) => {
                            return (
                                <Col sm={6} lg={4} className='pt-4'>
                                    <div className='blogBox'>
                                        <img src={blogteam.img} alt="blogimg" className='w-100 br-15 blog-shadow' />
                                        <h3 className="blog-heading pt-4 ps-2">
                                            {blogteam.heading}
                                        </h3>
                                        <p className="pt-2 normal-para ps-2 pb-4">
                                            {blogteam.para}
                                        </p>
                                        <div className='py-4 border-top-1px d-flex flex-sm-column flex-md-row justify-content-between align-items-sm-start align-items-md-center justify-content-sm-start justify-content-md-between px-2 align-items-center'>
                                            <div className="d-flex gap-2 align-items-center">
                                                <img src={blogteam.peopleImg} alt="peopleImg" />
                                                <p className='name-people'>{blogteam.teamName}</p>
                                            </div>
                                            <div className="d-flex gap-2 align-items-center pt-sm-3 pt-md-0">
                                                <TimeIcon />
                                                <p className='blog-time pt-md-1'>28,Aug 2020, 09:48:00</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className='padding12_30 tab-content-btn mt-2'>{blogteam.btn}</button>
                                        </div>
                                    </div>

                                </Col>
                            )
                        }
                        )}
                    </Row>
                    <div className="d-flex justify-content-center pt-4 mt-md-2">
                        <button className='padding10_18 nav-btn transition' onClick={btnHandleClick} type='button'>
                            {show ? "Remove here" : "View More"}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog