import React from 'react'
import './testimonials.css'
// import AVTR1 from '/assets/avatar1.jpg'
// import AVTR2 from '/assets/avatar2.jpg'
// import AVTR3 from '/assets/avatar3.jpg'
// import AVTR4 from '/assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar:'/assets/avatar1.jpg',
    name:'Rob Percival',
    review:'The Complete Web Development Course 2.0 ( Udemy )'
  },
  {
    avatar:'/assets/avatar2.jpg',
    name:'Maximilian schwarzmuller',
    review:'React - The Complete Guide ( Udemy )'
  },
  {
    avatar:'/assets/avatar3.jpg',
    name:'Maximilian schwarzmuller',
    review:'Nextjs & React - The Complete Guide ( Udemy )'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>My Study</h5>
      <h2>Courses</h2>

      <Swiper className="container testimonial__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
    >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          {/* <div className="client__avatar">
            <img src={process.env.PUBLIC_URL+avatar} alt="avatar1" />
          </div> */}
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        
       
      </Swiper>
    </section >
  )
}

export default Testimonials
