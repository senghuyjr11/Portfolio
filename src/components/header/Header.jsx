import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/senghuy_pf.png'
import HeaderSocails from './HeaderSocails'

const Header = () => {
  return (
    <>
       <header>
         <div className="container header__container">
           <h5>Hi I'm</h5>
           <h1>Senghuy</h1>
           <h5 className="text-light">Software Engineer</h5>
           
           <CTA />
           <HeaderSocails />

           <div className="me">
             <img src={ME} alt="me" />
           </div>

           <a href="#contact" className='scroll_down'>Scroll Down</a>
         </div>
       </header>
    </>
  )
}

export default Header