import React, { useState } from 'react'
// import tabImg from '../assets/images/webp/Brand.webp'
// import tabImg1 from '../assets/images/webp/reporting.webp'
// import tabImg2 from '../assets/images/webp/data-anilayis.webp'
import { Row, Col } from 'react-bootstrap';
// import { BellIcon } from './Icon';
import { TabCard } from './common/Helper';

const Tabcases = () => {
    const [activetab, setActivetab] = useState("all");
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const handleTabClick = (tab) => {
        setActivetab(tab);
        setSelectedCard(null); // Reset selected card when changing tabs
        setSearchInput("");
    };

    const handleCardClick = (index) => {
        setSelectedCard(selectedCard === index ? null : index);
    };
    const filteredCards = activetab === 'all'
        ? TabCard.filter(card => card.heading.toLowerCase().includes(searchInput.toLowerCase()))
        : TabCard.filter(card => card.filter === activetab && card.heading.toLowerCase().includes(searchInput.toLowerCase()));
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
                            <input
                                name='search'
                                id='dataSearch'
                                type="search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder='Search'
                                className='py-1 input-border w-100 outline-none seacrh'
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <ul className='ps-0 webkit-scrollbar-hidden mb-0 d-flex overflow-auto py-4 py-md-5 gap-5 ps-35 ps-lg-0'>
                            <li onClick={() => handleTabClick("all")} className='cursor-pointer position-relative'>
                                <span className={`padding12_36 whitespace tab-btn position-relative ${activetab === "all" ? "bg_primary text-white active-color" : ""}`}>
                                    Show All</span>
                            </li>
                            <li onClick={() => handleTabClick("filter1")} className='cursor-pointer position-relative'>
                                <span className={`padding12_36 whitespace tab-btn position-relative ${activetab === "filter1" ? "bg_primary text-white active-color" : ""}`}>
                                    Coaching
                                </span>
                            </li>
                            <li onClick={() => handleTabClick("filter2")} className='cursor-pointer position-relative'>
                                <span className={`padding12_12 whitespace tab-btn position-relative ${activetab === "filter2" ? "bg_primary text-white active-color" : ""}`}>
                                    Digital Partners</span>
                            </li>
                            <li onClick={() => handleTabClick("filter3")} className='cursor-pointer position-relative'>
                                <span className={`padding12_36 whitespace tab-btn position-relative ${activetab === "filter3" ? "bg_primary text-white active-color" : ""}`}>
                                    SEO</span>
                            </li>
                        </ul>
                        <div className='d-none d-md-block ms-md-4'>
                            <input
                                name='search'
                                id='searchdata'
                                type="search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder='Search'
                                className='py-1 input-border w-100 outline-none seacrh'
                            />
                        </div>
                    </div>

                    <div className='w-100 mt-3 px-md-4 px-2'>
                        <div className='px-sm-2 px-lg-3'>
                            <Row className='pt-lg-3'>
                                {filteredCards.map((card, index) => (
                                    <Col sm={6} lg={4} className='pt-4'>
                                        <div className='blogBox'>
                                            <img src={card.img} alt="blogimg" className='w-100 br-15 blog-shadow' />
                                            <h3 className="blog-heading pt-4 ps-2">
                                                {card.heading}
                                            </h3>
                                            <p className="pt-2 normal-para ps-2 pb-4">
                                                {card.paragraph}
                                            </p>
                                            <div className='py-3 border-top-1px d-flex flex-sm-column flex-md-row justify-content-between align-items-sm-start align-items-md-center justify-content-sm-start justify-content-md-between px-2 align-items-center'>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                {/* <button className='padding12_30 tab-content-btn'>{card.btn}</button> */}
                                                <button onClick={() => handleCardClick(index)} className='padding12_30 tab-content-btn'>
                                                    {selectedCard === index ? 'Remove here...' : card.btn}
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabcases