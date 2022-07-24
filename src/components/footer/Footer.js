import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kingbee</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/abiodunhodonu/" target="_blank"> <FiLinkedin /> </a>
        <a href="https://www.instagram.com/beordo_/" target="_blank"> <BsInstagram /> </a>
        <a href="https://www.twitter.com/real_kingbee/" target="_blank"> <FiTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; 2022 Kingbee. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
