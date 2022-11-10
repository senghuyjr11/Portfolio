import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
        <div className="service__head">
            <h3>Mobile Development AOS & Flutter</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyze App Feature.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design UX/UI.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Screen Design UI.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement with API and test app logic.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Release Application to App Store & Play Store.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintenance & update version application.</p>
            </li>

          </ul>
        </article>

        {/* End of UX/UI */}


        <article className="service">
        <div className="service__head">
            <h3>Database Analyze</h3>
          </div>

          <ul className="service__list">

          <li>
              <BiCheck className='service__list-icon'/>
              <p>Collect flow data from client.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyze data scale and scope of project.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design database relationship.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design table row and column.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Define datatype.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing data input and output process.</p>
            </li>

          </ul>
        </article>

        <article className="service">
        <div className="service__head">
            <h3>API Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement auth security.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide JWT for each End Point.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement crud that have relational with Database.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide end point from crud to client.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create API end point with modern technology.</p>
            </li>

          </ul>
        </article>

        {/* End of API */}

      </div>
    </section>
  )
}

export default Service