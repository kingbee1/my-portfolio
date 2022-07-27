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
              <p>I build fully responsive web applications. </p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/> 
              <p> I improve an already existing application or website visually and functionally by using better designs and modern technology. </p>
            </li>
          </ul>
        </articles>
        
        <articles className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I create sketches,prototype and visual mockups using figma.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I create easy to use intuitive user interface that are cutting edge.</p>
            </li>
          </ul>
        </articles>

        {/* <articles className="service">
          <div className="service__head">
            <h3>Technical Writing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I make technical jargons easily understandable to a layman.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/> 
              <p>I build Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam nulla magnam. </p>
            </li>
          </ul>
        </articles> */}


      </div>
    </section>
  )
}

export default Services
