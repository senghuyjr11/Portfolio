import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Mobile Native AOS Java & Kotlin</h4>
                  <small className='text-light'>Working</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Android Jetpack Compose</h4>
                  <small className='text-light'>Explore more</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React Native</h4>
                  <small className='text-light'>Explore more</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Flutter</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML/JS/MDBootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

          </div>
        </div>

        {/* End of Frontend */}

        <div className="experience__backend">
          
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Spring Boot</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Database Analysis</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Laravel/PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Server Infrastruture</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience