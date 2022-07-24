import React from 'react'
import CV from '../../assets/Hodonu Abiodun FE Resume 2022.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Talk to Me?</a>
    </div>
  )
}

export default CTA
