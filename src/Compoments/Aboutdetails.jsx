import React from 'react'
import { QuestionIcon } from './Icon'

const Aboutdetails = () => {
    return (
        <>
            <section className="section-color py-2 py-lg-5">
                <div className="myContainer py-4 py-lg-5">
                    <h2 className='sub-heading ps-md-4'>Lorem <span className="z-1 position-relative">Ipsum<span className='heading-line'></span></span> </h2>
                    <p className='normal-para pt-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <div className='d-flex gap-2 pt-4 mt-1'>
                        <div className="pt-1 pe-1">
                            <QuestionIcon />
                        </div>
                        <p className='normal-para'>
                            Loren rasion gravida auem is bibenua tase. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content 
                        </p>
                    </div>
                    <div className='d-flex gap-2 pt-2'>
                        <div className="pt-1 pe-1">
                            <QuestionIcon />
                        </div>
                        <p className='normal-para'>
                            Lorem Ipsum is simply dummy text of the. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </p>
                    </div>
                    <div className='d-flex gap-2 pt-2'>
                        <div className="pt-1 pe-1">
                            <QuestionIcon />
                        </div>
                        <p className='normal-para'>
                            Printing and typesetting industry. Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs.
                        </p>
                    </div>
                    <div className='d-flex gap-2 pt-2'>
                        <div className="pt-1 pe-1">
                            <QuestionIcon />
                        </div>
                        <p className='normal-para'>
                            When an unknown printer took a galley of type and scrambled it
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutdetails