import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/avatar1.jpg'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'
import avt4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avt1,
    name: 'Mary Ola',
    review: 'Kingbee is an awesome person, it was really a pleasure working with him. He went in and out for me. I will definitely work with him over and over again'
  },
  {
    avatar: avt1,
    name: 'Akin Remi',
    review: 'Kingbee is an awesome person, it was really a pleasure working with him. So efficient and reliable. I will definitely work with him over and over again'
  },
  {
    avatar: avt1,
    name: 'Bella',
    review: 'Kingbee is an awesome person, it was really a pleasure working with him. So efficient and reliable. I will definitely work with him over and over again'
  },

  {
    avatar: avt1,
    name: 'Bella',
    review: 'Kingbee is an awesome person, it was really a pleasure working with him. So efficient and reliable. I will definitely work with him over and over again'
  } 
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clients Feedback</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='cleint__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>

            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
