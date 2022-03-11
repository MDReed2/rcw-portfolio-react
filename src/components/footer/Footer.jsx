import React from 'react'
import './footer.scss'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#"></a>
      <a href="#" className='footer__logo'>Reed Creative Werx</a>
      
      <ul className='permalink'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/meshiareed/"><AiFillLinkedin /></a>
        <a href="https://github.com/MDReed2"><AiFillGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Reed Creative Werx. All right reserved</small>
      </div>
    </footer>
  )     
}

export default Footer