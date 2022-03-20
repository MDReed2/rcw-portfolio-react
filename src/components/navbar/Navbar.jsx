import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
// import { AiOutlineLogin } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineMenu, MdOutlineMessage } from 'react-icons/md'



const Navbar = (props) => {
  const [activeNav, setActiveNav] = useState('/')

  // const authenticatedOptions = (
  //   <>
  //     <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
  //     <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
      
  //   </>
  // )

  // const unauthenticatedOptions = (
  //   <>
  //     <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
  //     <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  //   </>
  // )

  // const alwaysOptions = (
  //   <>
  //     <NavLink to='/' className='nav-link'>Home</NavLink>
  //   </>
  // )

  const onHome = () => {
    setActiveNav('#')
    props.headerRef.current.scrollIntoView({behavior: "smooth"})
  }

  const onAbout = () => {
    setActiveNav('#about')
    props.aboutRef.current.scrollIntoView()
  }

  // const onSignIn = () => {
  //   setActiveNav('/sign-in')
  // }

  // const onSignOut = () => {
  //   setActiveNav('/sign-out')
  // }


  return (
    <nav>
      <a href='#' onClick={onHome} className={activeNav === '/' ? 'active' : ''} title="Home"><AiOutlineHome /></a>
      <a href='#about' onClick={onAbout} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineMenu /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
      {/* <NavLink to='/sign-in' onClick={onSignIn} className={activeNav === '/sign-in' ? 'active' : ''} title="Sign In"><AiOutlineLogin /></NavLink> */}
      {/* <NavLink to='/sign-out' onClick={onSignOut} className={activeNav === '/sign-out' ? 'active' : ''} title="Sign Out"><RiLogoutCircleLine /></NavLink> */}
    </nav>
  )
}

export default Navbar