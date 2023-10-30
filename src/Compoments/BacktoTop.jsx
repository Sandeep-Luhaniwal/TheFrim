import React from 'react'
import { TopIcon } from './Icon'



const BackToTop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='myContainer'>
                <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="backtotop"
                    ref={scrollTop} >
                    <div className='circleBg hover-bg d-flex justify-content-center align-items-center'>
                        <TopIcon/>
                    </div>
                </div>
            </div>


        </>

    )
}

export default BackToTop