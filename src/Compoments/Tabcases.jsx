import React, { useState } from 'react'
import tabImg from '../assets/images/webp/Brand.webp'
import tabImg1 from '../assets/images/webp/reporting.webp'
import tabImg2 from '../assets/images/webp/data-anilayis.webp'
import { Row, Col } from 'react-bootstrap';
import { BellIcon } from './Icon';
import { TabCard } from './Common/Helper'

const Tabcases = () => {
    const [activetab, setActivetab] = useState("First");
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const btnHandleClick2 = () => {
        setShow2(!show2);
    }
    const btnHandleClick3 = () => {
        setShow3(!show3);
    }
    const btnHandleClick4 = () => {
        setShow4(!show4);
    }

    const handleTabClick = (tab) => {
        setActivetab(tab);
    };
    return (
        <>
            <div className="py-2 py-lg-5">
                <div className="myContainer py-4 py-md-5">
                    <h2 className="sub-heading text-center">
                        Our <span className="z-1 position-relative">Cases<span className='heading-line'></span></span>
                    </h2>
                    <p className="normal-para text-center py-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  <span className="d-lg-block">the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</span> type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div className=' d-flex justify-content-end d-md-none'>
                        <div className='pt-3 pb-4'>
                            <input type="search" required placeholder='Search' className='py-1 input-border w-100 outline-none seacrh' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <ul className='ps-0 webkit-scrollbar-hidden mb-0 d-flex overflow-auto py-4 py-md-5 gap-5 ps-35 ps-lg-0'>
                            <li onClick={() => handleTabClick("First")} className='cursor-pointer position-relative'>
                                <span className={`padding12_36 whitespace tab-btn position-relative ${activetab === "First" ? "bg_primary text-white active-color" : ""}`}>
                                    Show All</span>
                            </li>
                            <li onClick={() => handleTabClick("Second")} className='cursor-pointer position-relative'>
                                <span className={`padding12_36 whitespace tab-btn position-relative ${activetab === "Second" ? "bg_primary text-white active-color" : ""}`}>
                                    Coaching
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("Third")} className='cursor-pointer position-relative'>
                                <span className={`padding12_12 whitespace tab-btn position-relative ${activetab === "Third" ? "bg_primary text-white active-color" : ""}`}>
                                    Digital Partners</span>
                            </li>
                            <li onClick={() => handleTabClick("Fourth")} className='cursor-pointer position-relative'>
                                <span className={`padding12_36 whitespace tab-btn position-relative ${activetab === "Fourth" ? "bg_primary text-white active-color" : ""}`}>
                                    SEO</span>
                            </li>
                        </ul>
                        <div className='d-none d-md-block ms-md-4'>
                            <input type="search" required placeholder='Search' className='py-1 input-border w-100 outline-none seacrh' />
                        </div>
                    </div>

                    <div className='w-100 mt-3 px-md-4 px-2'>
                        {activetab === "First" && (
                            <div className='px-sm-2 px-lg-3'>
                                <Row className='pt-lg-3'>
                                    {TabCard.map((tabcard) => {
                                        return (
                                            <Col sm={6} lg={4} className='pt-4'>
                                                <div className='blogBox'>
                                                    <img src={tabcard.img} alt="blogimg" className='w-100 br-15 blog-shadow' />
                                                    <h3 className="blog-heading pt-4 ps-2">
                                                        {tabcard.heading}
                                                    </h3>
                                                    <p className="pt-2 normal-para ps-2 pb-4">
                                                        {tabcard.paragraph}
                                                    </p>
                                                    <div className='py-3 border-top-1px d-flex flex-sm-column flex-md-row justify-content-between align-items-sm-start align-items-md-center justify-content-sm-start justify-content-md-between px-2 align-items-center'>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button className='padding12_30 tab-content-btn'>{tabcard.btn}</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                    )}
                                </Row>
                            </div>
                        )}
                        {activetab === "Second" && (
                            <div className='tabBox'>
                                <Row className='align-items-center'>
                                    <Col md={6}>
                                        <div className='p-2 content-box d-none d-md-block'>
                                            <img className='br-25 w-100' src={tabImg} alt="tabImg" />
                                        </div>
                                    </Col>
                                    <Col md={6} className='d-flex gap-4'>
                                        <div className='d-none d-lg-block'>
                                            <div className="bellIcon d-flex justify-content-center align-items-center">
                                                <BellIcon />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex align-items-center gap-4'>
                                                <h2 className='sub-heading'>Branding</h2>
                                                <div className="bellIcon d-flex justify-content-center align-items-center d-md-none">
                                                    <BellIcon />
                                                </div>
                                            </div>
                                            <div className='d-md-none pt-4 pb-2'>
                                                <div className='p-2 content-box'>
                                                    <img className='br-25 w-100' src={tabImg} alt="tabImg" />
                                                </div>
                                            </div>
                                            <p className="normal-para py-3">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                {show2 && <span className='mb-0'> Lorem ipsum is simply dummy text of the printing dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</span>}
                                            </p>
                                            <button type='button' onClick={btnHandleClick2} className='tab-content-btn padding12_30 mt-2 mt-md-3 transition'>
                                                {show2 ? 'Remove here...' : 'Show More'}
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                        {activetab === "Third" && (
                            <div className='tabBox'>
                                <Row className='align-items-center'>
                                    <Col md={6}>
                                        <div className='p-2 content-box d-none d-md-block'>
                                            <img className='br-25 w-100 tab-img-mh' src={tabImg1} alt="tabImg" />
                                        </div>
                                    </Col>
                                    <Col md={6} className='d-flex gap-4'>
                                        <div className='d-none d-lg-block'>
                                            <div className="bellIcon d-flex justify-content-center align-items-center">
                                                <BellIcon />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex align-items-center gap-4'>
                                                <h2 className='sub-heading'>Reporting</h2>
                                                <div className="bellIcon d-flex justify-content-center align-items-center d-md-none">
                                                    <BellIcon />
                                                </div>
                                            </div>
                                            <div className='d-md-none pt-4 pb-2'>
                                                <div className='p-2 content-box'>
                                                    <img className='br-25 w-100 tab-img-mh' src={tabImg1} alt="tabImg" />
                                                </div>
                                            </div>
                                            <p className="normal-para py-3">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                {show3 && <span className='mb-0'> Lorem ipsum is simply dummy text of the printing dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</span>}
                                            </p>
                                            <button type='button' onClick={btnHandleClick3} className='tab-content-btn padding12_30 mt-2 mt-md-3 transition'>
                                                {show3 ? 'Remove here...' : 'Show More'}
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                        {activetab === "Fourth" && (
                            <div className='tabBox'>
                                <Row className='align-items-center'>
                                    <Col md={6}>
                                        <div className='p-2 content-box d-none d-md-block'>
                                            <img className='br-25 w-100' src={tabImg2} alt="tabImg2" />
                                        </div>
                                    </Col>
                                    <Col md={6} className='d-flex gap-4'>
                                        <div className='d-none d-lg-block'>
                                            <div className="bellIcon d-flex justify-content-center align-items-center">
                                                <BellIcon />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex align-items-center gap-4'>
                                                <h2 className='sub-heading'>Data Analysis</h2>
                                                <div className="bellIcon d-flex justify-content-center align-items-center d-md-none">
                                                    <BellIcon />
                                                </div>
                                            </div>
                                            <div className='d-md-none pt-4 pb-2'>
                                                <div className='p-2 content-box'>
                                                    <img className='br-25 w-100' src={tabImg2} alt="tabImg2" />
                                                </div>
                                            </div>
                                            <p className="normal-para py-3">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                                {show4 && <span className='mb-0'> Lorem ipsum is simply dummy text of the printing dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</span>}
                                            </p>
                                            <button type='button' onClick={btnHandleClick4} className='tab-content-btn padding12_30 mt-2 mt-md-3 transition'>
                                                {show4 ? 'Remove here...' : 'Show More'}
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabcases