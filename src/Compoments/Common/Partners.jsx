import React from 'react'
import Slider from "react-slick";
import Patnership_1 from '../../assets/images/webp/window.webp'
import Patnership_2 from '../../assets/images/webp/google.webp'
import Patnership_3 from '../../assets/images/webp/firefox.webp'
import Patnership_4 from '../../assets/images/webp/safari.webp'



const Partner = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <>
            <section className='bg-white py-4 py-md-5 overflow-hidden'>
                <div className='position-relative myContainer px-lg-5 px-xl-4 px-xxl-0 py-lg-5'>
                    <h2 className='sub-heading text-center'>Our <span className="z-1 position-relative">Partner <span className='heading-line'></span></span> </h2>
                    <Slider {...settings} className='op-hover d-flex align-items-center py-lg-4'>
                        <div className='px-2 d-flex justify-content-center align-items-center py-4'>
                            <div className='partnerBox d-flex justify-content-center align-items-center'>
                                <img height={64} width={64} className='cursor-poiner' src={Patnership_1} alt="bitcoin" />
                            </div>
                        </div>
                        <div className='px-2 d-flex justify-content-center align-items-center py-4'>
                            <div className="partnerBox d-flex justify-content-center align-items-center">
                                <img height={76} width={168} className='cursor-poiner' src={Patnership_2} alt="bitcoin" />
                            </div>
                        </div>
                        <div className='px-2 d-flex justify-content-center align-items-center py-4'>
                            <div className="partnerBox d-flex justify-content-center align-items-center">
                                <img height={60} width={163} className='cursor-poiner' src={Patnership_3} alt="bitcoin" />
                            </div>
                        </div>
                        <div className='px-2 d-flex justify-content-center align-items-center py-4'>
                            <div className="partnerBox d-flex justify-content-center align-items-center">
                                <img height={80} width={160} className='cursor-poiner' src={Patnership_4} alt="bitcoin" />
                            </div>
                        </div>
                        <div className='px-2 d-flex justify-content-center align-items-center py-4'>
                            <div className="partnerBox d-flex justify-content-center align-items-center">
                                <img height={64} width={64} className='cursor-poiner' src={Patnership_1} alt="bitcoin" />
                            </div>
                        </div>

                    </Slider>
                </div>
            </section>

        </>
    )
}


export default Partner