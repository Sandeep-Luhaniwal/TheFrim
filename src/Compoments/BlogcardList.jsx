import React, { useState } from 'react'
import { CrossIcon, TimeIcon } from './Icon'

const BlogcardList = ({ data }) => {
    const [content, setContent] = useState(false);
    const handleClickContent = () => {
        setContent(!content) 
    }
    if (content === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    };
    return (
        <>
            <div className='blogBox'>
                <img src={data.img} alt="blogimg" className='w-100 br-15 blog-shadow' />
                <h3 className="blog-heading pt-4 ps-2">
                    {data.heading}
                </h3>
                <p className="pt-2 normal-para ps-2 pb-4">
                    {data.para}
                </p>
                <div className='py-4 border-top-1px d-flex flex-sm-column flex-md-row justify-content-between align-items-sm-start align-items-md-center justify-content-sm-start justify-content-md-between px-2 align-items-center'>
                    <div className="d-flex gap-2 align-items-center">
                        <img src={data.peopleImg} alt="peopleImg" />
                        <p className='name-people'>{data.teamName}</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center pt-sm-3 pt-md-0">
                        <TimeIcon />
                        <p className='blog-time pt-md-1'>28,Aug 2020, 09:48:00</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className='padding12_30 tab-content-btn mt-2' onClick={handleClickContent}>{data.btn}</button>
                </div>
                {content ? (
                    <div className='top-0 end-0 bottom-0 start-0 position-fixed z-200'>
                        <div className='d-flex px-3 justify-content-center align-items-center min-vh-100'>
                            <div onClick={() => setContent(!content)} className='w-100 h-100 top-0 start-0 bg-primary position-absolute opacity-25'></div>
                            <div className='popupModle position-relative z-100 br-15 p-4'>
                                <div className='position-absolute modalCross'>
                                    <button onClick={() => setContent(!content)} className='border-0 bg-transparent svgColor'>
                                        <CrossIcon />
                                    </button>
                                </div>
                                <div className='pb-3 pt-sm-4 py-md-4 d-flex flex-column flex-sm-row justify-content-sm-between'>
                                    <div className="d-flex gap-2 align-items-center">
                                        <img src={data.peopleImg} alt="peopleImg" />
                                        <p className='name-people'>{data.teamName}</p>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center pt-3 pt-sm-0">
                                        <TimeIcon />
                                        <p className='blog-time pt-md-1'>28,Aug 2020, 09:48:00</p>
                                    </div>
                                </div>
                                <h3 className="blog-heading pt-2 border-top-1px">
                                    {data.id}
                                </h3>
                                <p className="py-2 normal-para">
                                    {data.paragrah}
                                </p>
                                <div className="d-flex justify-content-center">
                                    <img src={data.img} alt="img" className='imgMap br-15' />
                                </div>

                            </div>
                        </div>
                    </div>
                ) : ("")}
            </div>

        </>
    )
}

export default BlogcardList