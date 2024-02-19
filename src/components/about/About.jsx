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
              <small>2+ Years Working</small>
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
              Welcome to my portfolio! I'm Senghuy, a software engineer currently studying as a GKS-G Student in South Korea.
              I thrive on solving complex problems and turning ideas into functional applications. Whether it’s front-end development, 
              back-end architecture, or full-stack projects, I’m always up for a coding challenge.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About