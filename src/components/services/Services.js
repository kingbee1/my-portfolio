import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <articles className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I build fully responsive web applications from scratch.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I improve already existing website application.</p>
            </li>
            
          </ul>
        </articles>
        
        <articles className="service">
          <div className="service__head">
            <h3>Growth Hacking</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I research on new and innovative ways to reach target audiences.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I track website performance  with data analysis tools and identify opportunities for improvement.</p>
            </li>
          </ul>
        </articles>

      </div>
    </section>
  )
}

export default Services
