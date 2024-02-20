import React from 'react'
import {BsMessenger} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocails = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/senghuyjr11" target="_blank"><BsGithub/></a>
        <a href="https://m.me/senghuy.chea" target="_blank"><BsMessenger /></a>
        <a href="https://www.instagram.com/senghuyjr11/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocails