import React, { forwardRef } from 'react'
import './about.scss'
import ME from '../../assets/rcw-about-img-.png'
import { FaAward, FaUsers } from 'react-icons/fa'
import { MdOutlineFolder } from 'react-icons/md'

const About = () => {
  return (
    <section id='about' ref={forwardRef}>
    <h5>Get to Know</h5>
    <h2>About</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='Meshia Reed'/>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>5 years</small>
          </article>
          <article className='about__card'>
            <FaUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10 clients</small>
          </article>
          <article className='about__card'>
          <MdOutlineFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ completed</small>
          </article>
        </div>
        <p className='card-text'>
          A devoted Software Engineer, who values taking initiative, being respectful, positively impacting organizations, fostering genuine connections with stakeholders, and among much more. 
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About