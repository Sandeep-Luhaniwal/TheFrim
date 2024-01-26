import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BlogsCard } from './common/Helper';
import { CrossIcon } from './Icon';

const BlogsimpleCard = () => {
    const [modalContent, setModalContent] = useState(null);

    const handleClickContent = (blogData) => {
        setModalContent(blogData);
    };

    const handleCloseModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <div className="myContainer py-4 py-lg-5">
                <Row className='my-2 my-lg-4'>
                    {BlogsCard.map((blogteam) => {
                        return (
                            <Col sm={6} lg={4} className='pt-4 pt-lg-0' key={blogteam.id}>
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
                                        <button
                                            className='padding12_30 tab-content-btn mt-2 transition'
                                            onClick={() => handleClickContent(blogteam)}
                                        >
                                            {blogteam.btn}
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                {modalContent && (
                    <div className='top-0 end-0 bottom-0 start-0 position-fixed z-200'>
                        <div className='d-flex px-3 justify-content-center align-items-center min-vh-100'>
                            <div onClick={handleCloseModal} className='w-100 h-100 top-0 start-0 bg-primary position-absolute opacity-25'></div>
                            <div className='popupModle position-relative z-100 br-15 p-4'>
                                <div className='position-absolute modalCross'>
                                    <button onClick={() => setModalContent(!modalContent)} className='border-0 bg-transparent svgColor'>
                                        <CrossIcon />
                                    </button>
                                </div>
                                
                                <h3 className="blog-heading pt-2">
                                    {modalContent.id}
                                </h3>
                                <p className="py-2 normal-para">
                                    {modalContent.para}
                                </p>
                                <div className="d-flex justify-content-center">
                                    <img src={modalContent.img} alt="img" className='imgMap br-15' />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogsimpleCard;