import React, { useRef, useState } from 'react';
import Googlemapfrom from './Googlemapfrom'
import { Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Fromgoogle = () => {
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
    const [selection1, setSelection1] = useState('');

    const handleChange = (event) => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setMessage(result);
    };

    const handleChangenumber = (e) => {
        const result = e.target.value.replace(/[^0-9]/gi, '');
        setNumber(result);
    };
    
    const handlevalue = (e) => {
        const result = e.target.value.disabled;
        setSelection1(result);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage('');
        setNumber('');
        setSelection1('');

        emailjs.sendForm(
            "service_vnvpiol",
            "template_z8n0wyk",
            form.current,
            "RD5_7T5hu6SDQxhiW"
        )
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Submitted it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Submitted!',
                        'Your file has been submitted.',
                        'Success'
                    );
                };
            }
            );
        e.target.reset();
    };


    return (
        <>
            <section className='bg-white position-relative'>
                <div className='position-absolute w-100 top-0 start-0'>
                    <Googlemapfrom />
                </div>
                <div className="mb-250 mx-3 mx-lg-0">
                    <div className="max-w-950px fromBox br-15 z-2 position-relative top-150">
                        <h2 className='sub-heading text-center'>Get in <span className="z-1 position-relative">Touch <span className='heading-line'></span></span> </h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row className='justify-content-between pt-4 pt-md-5'>
                                <Col lg={5} sm={6}>
                                    <label htmlFor="fname" className='form-name'>Name</label>
                                    <input type="text"
                                        id='fname'
                                        name='fname'
                                        value={message}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter Your Name'
                                        className='py-1 input-border w-100 outline-none form-input' />
                                </Col>
                                <Col lg={5} sm={6} className='pt-3 pt-sm-0'>
                                    <label htmlFor="useremail" className='form-name'>Email</label>
                                    <input type="email"
                                        id='useremail'
                                        name='useremail'
                                        required
                                        placeholder='Enter Your Email'
                                        className='py-1 input-border w-100 outline-none form-input' />
                                </Col>
                                <Col lg={5} sm={6} className='pt-3 pt-sm-4 pt-lg-5'>
                                    <label htmlFor="usernumber" className='form-name'>Phone</label>
                                    <input type="tel"
                                        id='usernumber'
                                        name='usernumber'
                                        pattern="[6-9]{1}[0-9]{9}"
                                        title='Please enter your correct 10 digit number'
                                        minLength={10}
                                        maxLength={10}
                                        required
                                        value={number}
                                        placeholder='Enter your 10 digit mobile number'
                                        onChange={handleChangenumber}
                                        className='py-1 input-border w-100 outline-none form-input' />
                                </Col>
                                <Col lg={5} sm={6} className='pt-3 pt-sm-4 pt-lg-5'>
                                    <label htmlFor="subjectchoose" className='form-name'>Subject</label>
                                    <select id='subjectchoose' name='subjectchoose' required className='py-1 cursor-pointer input-border w-100 outline-none form-input'>
                                        <option onChange={handlevalue} className='form-input' value={selection1} selected>Choose your subject</option>
                                        <option className='form-input'>Front Developer</option>
                                        <option className='form-input'>Back-end Developer</option>
                                        <option className='form-input'>Full stack Developer</option>
                                    </select>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center mt-2 pt-4 pt-lg-5">
                                <input type='submit' required className='padding12_42 nav-btn' value='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fromgoogle