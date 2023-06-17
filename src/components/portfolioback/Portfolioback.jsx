import React from 'react'
import './portfolio.css'
// import IMG1 from '/assets/portfolio1.jpg'
// import IMG2 from '/assets/portfolio2.jpg'

const backEnd = [
  {
    id: 1,
    image: '/assets/backend1.jpg',
    title: 'Memories App',
    github: 'https://memories-2pcz.onrender.com',
    skills:'Mongo-Express-React-NodeMaterialUI-AuthenticationAuthorization-JWT-Cookies-SessionTimeOut'
  },
  {
    id: 2,
    image: '/assets/backend2.jpg',
    title: 'Coffee Shop App',
    github: 'https://coffeshopp.onrender.com/',
    skills:'Mongodb-Express-React-Node'
  },
  // {
  //   id: 3,
  //   image: '/assets/backend3.jpg',
  //   title: 'Pharmacy App',
  //   github: 'https://pharmacytestapp.herokuapp.com/',
  //   skills:'Mongodb-Express-React-Node'
  // }
]


const Portfolioback = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>BackEnd Projects</h2>

      <div className="container portfolio__container">
       {
         backEnd.map(({id,image,title,github,skills})=>{
           return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={process.env.PUBLIC_URL+image} alt="" />
            </div>
            <h3>{title}</h3>
            <h4 style={{color:'gray'}}>{skills}</h4>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className='btn ' rel="noopener noreferrer"  >Live Demo</a>
            </div>
          </article>
           )
         })
       }
        

      </div>
    </section >
    
  )
}

export default Portfolioback
