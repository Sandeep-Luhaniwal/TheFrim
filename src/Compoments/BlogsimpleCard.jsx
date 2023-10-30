import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BlogsCard } from './Common/Helper'

const BlogsimpleCard = () => {
    return (
        <>
            <div className="myContainer py-4 py-lg-5">
                <Row className='my-2 my-lg-4'>
                    {BlogsCard.map((blogteam) => {
                        return (
                            <Col sm={6} lg={4} className='pt-4 pt-lg-0'>
                                <div className='blogBox'>
                                    <img src={blogteam.img} alt="blogimg" className='w-100 br-15 blog-shadow' />
                                    <h3 className="blog-heading pt-4 ps-2">
                                        {blogteam.heading}
                                    </h3>
                                    <p className="pt-2 normal-para ps-2 pb-4">
                                        {blogteam.para}
                                    </p>
                                    <div className='pt-4 border-top-1px'></div>
                                    <div className="d-flex justify-content-center">
                                        <button className='padding12_30 tab-content-btn mt-2 transition'>{blogteam.btn}</button>
                                    </div>
                                </div>

                            </Col>
                        )
                    }
                    )}
                </Row>
            </div>
        </>
    )
}

export default BlogsimpleCard