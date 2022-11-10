import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocails = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/senghuyjr11" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/senghuy-chea-8419a01ab/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/senghuy_/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocails