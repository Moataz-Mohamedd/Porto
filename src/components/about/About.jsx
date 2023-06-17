import React from 'react'
import './about.css'
// import Me from '/assets/2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={process.env.PUBLIC_URL + '/assets/IMG_20191227_234057_100.jpg'} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years React (FrontEnd Developer)</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Courses</h5>
              <small>30+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>Passionate Web Developer with knowledge in various
            technologies with more than two years experience in
            React/Node. Seeking an opportunity where i can utilize
            my skills and knowledge to gain further experience.</p>
          <a href="#contact" className="btn bn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
