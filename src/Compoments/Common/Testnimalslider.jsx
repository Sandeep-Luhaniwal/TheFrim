import React, { useState } from 'react';
import Slider from 'react-slick';
import quatoe from '../../assets/images/webp/quatoe.webp';
import { TestCard } from './Helper';

const Testnimalslider = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    var settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        // fade: true,
        speed: 300,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    };
    var settingslider = {
        slidesToShow: 1,
        autoplay: false,
        speed: 300,
        fade: true,
    };
    return (
        <>
            <section className="py-5 overflow-hidden">
                <div className="myContainer py-4 py-lg-5 d-flex justify-content-center" >
                    <div className="max-w-865 w-100">
                        <h2 className="sub-heading text-center">
                            Our <span className="z-1 position-relative">Testimonials<span className='heading-line'></span></span>
                        </h2>
                        <div className='Slider1 pt-3'>
                            <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                {...settings}
                            >
                                {TestCard.map((test) => {
                                    return (
                                        <div className="position-relative my-5">
                                            <img src={test.img} alt="images" className='z-2 position-relative' />
                                            <div className="z-1 position-absolute circles">
                                                <div className="d-flex justify-content-center align-items-center Circle1">
                                                    <div className="Circle2"></div>
                                                </div>
                                                <img className='position-absolute quotes z-3' src={quatoe} alt="quote" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                        <div className="w-100">
                            <Slider asNavFor={nav2} arrows={false} ref={(slider1) => setNav1(slider1)}
                                dots={true} {...settingslider}
                            >
                                {TestCard.map((test) => {
                                    return (
                                        <div className='w-100'>
                                            <p className='normal-para text-center'>{test.paragraph}</p>
                                            <div className="py-4 my-1 d-flex justify-content-center gap-2 align-items-center">
                                                <p className='medial-para text-center'>{test.testname}</p>
                                                <p className='normal-para text-center'>{test.course}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testnimalslider