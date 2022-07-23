import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { RiFolderOpenFill } from 'react-icons/ri'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me Better</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>3+ Years Working mate</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__card-icon' />
              <h5>Clients</h5>
              <small>125+ across the globe</small>
            </article>

            <article className='about__card'>
              <RiFolderOpenFill className='about__card-icon' />
              <h5>Projects</h5>
              <small>Over 50 Completed</small>
            </article>
          </div>

          <p>I will be back to talk shit about 
            myself later on. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus iure autem error eius numquam facere qui tenetur eaque sequi ab.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>

    </section>
  )
}

export default About
