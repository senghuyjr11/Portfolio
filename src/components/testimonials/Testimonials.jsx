import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/suzy.jpg'
import AVTR2 from '../../assets/iu1.jpg'
import AVTR3 from '../../assets/jennie.jpg'
import AVTR4 from '../../assets/lalisa.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Suzy Bea',
    review: 'Senghuy is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.'
  },
  {
    avatar: AVTR2,
    name: 'IU',
    review: "Without doubt one of the most talented programmers out there.  I always go back to Warren when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed."
  },
  {
    avatar: AVTR3,
    name: 'Jennie',
    review: 'Senghuy is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.'
  },
  {
    avatar: AVTR4,
    name: 'Lisa',
    review: 'Senghuy is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
         >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials