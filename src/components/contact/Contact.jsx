import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap'

const Contact = () => {
  const form = useRef()
  const [fullName, setFullName] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  const nameChangeHandler = (event) => {
    event.preventDefault()
    // setFullName(event.target.value)
    console.log(event.target.value)
  }


  const sendEmail = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_79lyfpo', 'template_qtv7hsl', form.current, 'gmFc-xPYQOovWlFKC')
      .then((result) => {
         console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

    const inputData = {
      fullName: fullName,
      emailInput: emailInput,
      messageInput: messageInput
    }

    console.log(inputData)

    setFullName('')
    setEmailInput('')
    setMessageInput('')
  }

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
            <a href='https://api.whatsapp.com/send?phone+17736304105' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <MdOutlineEmail />
            <h4></h4>
            <h5></h5>
            <a href='https://api.linkedin.com/v2/messages'></a>
          </article> */}
        </div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Label>Full Name</Form.Label>
          <FormControl 
            type='text'
            name='name'
            value={fullName}
            onChange={nameChangeHandler}
          />
        </Form>
        <form>
          <input type="text" name='name' required onChange={nameChangeHandler}/>
          <input type="email" name='email' placeholder='Email' />
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact