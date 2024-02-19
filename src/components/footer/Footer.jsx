import React from 'react'
import './footer.css'
import {FaFacebookMessenger, FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Senghuy</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/senghuyjr11" target="_blank"><FaGithub/></a>
        <a href="https://m.me/senghuy.chea" target="_blank"><FaFacebookMessenger /></a>
        <a href="https://www.instagram.com/senghuyjr11/" target="_blank"><FaInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Senghuy Jr11. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer