import React, { useState } from 'react'
import CardList from './CardList';
import { BlogCard } from './common/Helper';

const Blog = () => {
    const [show, setShow] = useState(false);

    const btnHandleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <section className="section-color py-2 py-lg-5 position-relative">
                <div className="myContainer py-4 py-md-5">
                    <h2 className="sub-heading text-center">
                        Our <span className="z-1 position-relative">Blog<span className='heading-line'></span></span>
                    </h2>
                    <CardList cardData={BlogCard} show={show} />
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