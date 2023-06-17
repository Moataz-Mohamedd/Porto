import React from 'react'
import './portfolio.css'
// import IMG1 from '/assets/portfolio1.jpg'
// import IMG2 from '/assets/portfolio2.jpg'

const frontEnd = [
  {
    id: 1,
    image: '/assets/portfolio1.jpg',
    title: 'Food Recipe App',
    github: 'https://foodappmoataz.onrender.com', 
    skills:'Html - SCSS - React'
  },
  {
    id: 2,
    image: '/assets/portfolio2.jpg',
    title: 'Movies App',
    github: 'https://moiveapp.onrender.com',
    skills:'Html - CSS - JavaScript - JQuery'
  },
  {
    id: 3,
    image: '/assets/portfolio3.jpg',
    title: 'Construction App',
    github: 'https://starconstrucion.onrender.com',
    skills:'Html - SCSS - JavaScript'
  },
  {
    id: 4,
    image: '/assets/portfolio4.jpg',
    title: 'Home App',
    github: 'https://houseagency.onrender.com',
    skills:'Html - CSS - JavaScript - JQuery'
  },
  {
    id: 7,
    image: '/assets/portfolio7.jpg',
    title: 'Captur App',
    github: 'https://capture-moataz-mohamedd.vercel.app/',
    skills:'Html -NextJs - Tailwind'
  }
]


const Portfoliofront = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>FrontEnd Projects</h2>

      <div className="container portfolio__container">
       {
         frontEnd.map(({id,image,title,github,skills})=>{
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

export default Portfoliofront
