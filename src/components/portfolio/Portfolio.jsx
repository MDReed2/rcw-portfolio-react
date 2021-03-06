import React from 'react'
// import { Link } from 'react-router-dom'
import './portfolio.scss'
import { AiFillGithub } from 'react-icons/ai'
import TRUEFOODIE from '../../assets/true-foodie.png'
import JOTIT from '../../assets/jotit.png'
import TICTACTOE from '../../assets/tictactoe.png'
// import CreatCTA from '../suggestions/create/CreatCTA'

const data = [
  {
    id: 1,
    image: TRUEFOODIE,
    title: 'True Foodie',
    description: 'HTML ◦ CSS ◦ JavaScript ◦ Express',
    github: 'https://github.com/MDReed2/true-foodie-client',
    demo: 'https://mdreed2.github.io/true-foodie-client/'
  },
  {
    id: 2,
    image: JOTIT,
    title: 'Jotit',
    description: 'HTML ◦ CSS ◦ JavaScript ◦ Express ◦ React',
    github: 'https://github.com/MDReed2/project-frontend',
    demo: 'https://house-slytherin.github.io/project-frontend/'
  },
  {
    id: 3,
    image: TICTACTOE,
    title: 'Tic Tac Toe',
    description: 'HTML ◦ CSS ◦ JavaScript',
    github: 'https://github.com/MDReed2/TicTacToe-Game',
    demo: 'https://mdreed2.github.io/TicTacToe-Game/'
  }
]

const Portfolio = (props) => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <div>
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <h6>{description}</h6>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank' rel="noreferrer"><AiFillGithub /> GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>
      {/* <div className='suggestions'>
        {props.user ? <CreatCTA /> : ''}
        <p>Have a project in mind that you would like to see?</p>
        <a href='#suggestions'><Link to='/suggestions'>Create Suggestion</Link></a>
        <a href='#suggestionList'><Link to='/suggestions/owner'>View Suggestions</Link></a>
      </div> */}
    </section>
  )
}

export default Portfolio