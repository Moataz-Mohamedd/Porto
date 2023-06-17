import React from 'react'
import './MyExperience.css'
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
    name:'Egypt FWD | 2021',
    review:'Web development',
    link:'Credential: WGKVCMWR'
  },
  {
    avatar:'/assets/avatar2.jpg',
    name:'ITI | 2021',
    review:'ReactJs',
    link:'Verification code: BdcQVGf90k'
  },
  {
    avatar:'/assets/avatar3.jpg',
    name:'ITI | 2021',
    review:'TypeScript Fundamentals',
    link:'Verification code: Doez6pkuIo'
  }
]

const MyExperience = () => {
  return (
    <section id='testimonials'>
      <h5>My Certificates</h5>
      <h2>Certificates</h2>

      <Swiper className="container testimonial__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
    >
        {
          data.map(({avatar,name,review,link},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          {/* <div className="client__avatar">
            <img src={process.env.PUBLIC_URL+avatar} alt="avatar1" />
          </div> */}
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
            <small className='client__review'>
             {link}
            </small>
        </SwiperSlide>
            )
          })
        }
        
       
      </Swiper>
    </section >
  )
}

export default MyExperience
