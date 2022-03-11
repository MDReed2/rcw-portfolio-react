import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import './contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  const form = useRef()

  // const sendEmail = (event) => {
  //   event.preventDefault()

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
  //     .then((result) => {
        
  //     })
  // }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href='mailto=meshia.reed@reedcreativewerx.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone+17736304105' target='_blank'>Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <MdOutlineEmail />
            <h4></h4>
            <h5></h5>
            <a href='https://api.linkedin.com/v2/messages'></a>
          </article> */}
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' />
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact