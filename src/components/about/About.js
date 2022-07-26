import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
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

          <p>I am an easy going person that just finds peace in getting to the root of a problem 
            and solving it.
            I love building apps that solve everyday challenge of people around me because the goal
            is to make the world a better place by writing onr line of code at a time.
            If you are willing and ready to turn ideas into reality, then we should talk.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>

    </section>
  )
}

export default About
