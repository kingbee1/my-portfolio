import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    ghjj
    e.preventDefault();

    emailjs.sendForm('service_bzslk9m', 'template_owi1gm7', form.current, 'P5dvbpBiTb2SfsfkA').then(() => {
      jjjkkjk
    })
    e.target.reset()
  
  };

  return (
    
    <section id='contact'>
      {sendEmail === true ? (
        alert('great')
      ) : ''}
      <h5>Ready for business??</h5>
      <h2>Contact Me</h2>
      

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>abiodunhodonu@gmail.com</h5>
            <a href="mailto:abiodunhodonu@gmail.com" target='_blank'>Send me an email</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=2348089470944" target='_blank'>Chat me up</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Your email address' required />
          <textarea name='message' rows='7' placeholder='Type your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        {/* <div className='contact__message'>
          <div className='contact__success' id='success'>Message Sent</div>
        </div> */}

      </div>
      
    </section>
  )
}

export default Contact
