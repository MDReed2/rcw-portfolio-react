import React, { useState } from 'react'
import './navbar.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineMenu, MdOutlineMessage } from 'react-icons/md'


const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  // const activeClassHandler = () => {
  //   switch(activeNav === '#') {
  //     case '#about':
  
  //     break
  //     case '#experience':

  //     break
  //     case '#portfolio':

  //     break
  //     case '#contact':

  //     break
  //   }
  // }
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineMenu /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
    </nav>
  )
}

export default Navbar