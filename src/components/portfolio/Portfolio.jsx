import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.scss'
import { AiFillGithub } from 'react-icons/ai'
import IMG from '../../assets/project-img-example.png'
import CreatCTA from '../suggestions/create/CreatCTA'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'True Foodie',
    github: 'https://github.com/MDReed2/true-foodie-client',
    demo: 'https://mdreed2.github.io/true-foodie-client/'
  },
  {
    id: 2,
    image: IMG,
    title: 'Jot-it',
    github: 'https://github.com/MDReed2/project-frontend',
    demo: 'https://house-slytherin.github.io/project-frontend/'
  }
]

const Portfolio = (props) => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <div>
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'><AiFillGithub /> GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank'> Live Demo</a>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>
      <div className='suggestions'>
        {props.user ? <CreatCTA /> : ''}
        <p>Have a project in mind that you would like to see?</p>
        <a href='#suggestions'><Link to='/suggestions'>Create Suggestion</Link></a>
      </div>
    </section>
  )
}

export default Portfolio