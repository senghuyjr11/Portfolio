import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>1+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>5+ Completed</small>
            </article>
          </div>

            {/* <p>I'm currently working as an Android Developer for Korean Company in Cambodia. I graduated full 
              course at Korea Software HRD and doing thesis for BA graduation at Nortun Univeristy.
            </p> */}

            <p>
              Hi, I'm Senghuy. Nice to meet you ^^ I'm interested in Software Engineering and currently working as a Software Engineer
              at KOSIGN in Cambodia. I’m looking to collaborate on people who work on IT side.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About