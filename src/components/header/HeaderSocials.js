import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiBehance } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"> <FaGithub /> </a>
        <a href="https://behance.net" target="_blank"><SiBehance /></a>
    
    </div>
  )
}

export default HeaderSocials
