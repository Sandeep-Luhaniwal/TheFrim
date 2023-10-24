import React, { useState } from 'react'
import { CrossIcon, MenuIcon, } from '../Icon'
import { Link, NavLink } from 'react-router-dom';
import MainLogo from '../../assets/images/webp/mainLogo.png'

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className='position-sticky z-100 top-0 start-0 py-2 bg-white'>
                <div className='myContainer'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='gap-4 d-flex  opcity align-items-center'>
                            <img src={MainLogo} alt="mainlogo" className='' />
                        </div>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-lg-none crossIconset'
                                onClick={() => setMenu(false)}>
                                <Link><CrossIcon /></Link>
                            </div>
                            <div className='d-flex gap-lg-4 gap-xl-5 align-items-center navActive'>
                                <NavLink to="/" onClick={() => setMenu(false)} className='nav-text transition'>Home</NavLink>
                                <NavLink to="/solution" onClick={() => setMenu(false)} className='nav-text transition'>Solutions</NavLink>
                                <NavLink to="/case" onClick={() => setMenu(false)} className='nav-text transition'>Cases</NavLink>
                                <NavLink to="/aboutus" onClick={() => setMenu(false)} className='nav-text transition'>About Us</NavLink>
                                <NavLink to="/blog" onClick={() => setMenu(false)} className='nav-text transition'>Blog</NavLink>
                                <NavLink to="/contactus" onClick={() => setMenu(false)} className='nav-text transition'>Contact Us</NavLink>
                                <button onClick={() => setMenu(false)} className='nav-btn padding10_18'>
                                    Let’s Fly
                                </button>
                            </div>
                        </div>
                        <div className='d-lg-none'>
                            <Link onClick={() => setMenu(true)}>
                                <MenuIcon /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar