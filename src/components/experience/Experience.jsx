import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML - BugJs</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS - Sass</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Bootstrap - TailWind - MaterialUi</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React-Redux/Thunk</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Ajax-FetchApi-Axios</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NextJs</h4>
              <small className="text__light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
   
      </div>
    </section>
  )
}

export default Experience
