import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>      
              </div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SCSS</h4>
                <small className='text-light'>Experienced</small>             
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>           
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>           
              </div>
            </article>

          </div>
        </div>
 
 {/* className='experience__details-icon' */}
        <div className="experience__secondend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>      
              </div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
                <small className='text-light'>Experienced</small>             
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Terminal</h4>
                <small className='text-light'>Experienced</small>           
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
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
