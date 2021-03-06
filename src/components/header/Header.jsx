import React from 'react'
import './header.scss'
import CTA from './CTA'
import ME from './../../assets/SD-350px.png'
import HeaderSocials from './HeaderSocials'

const Header = (props) => {
  return (
    <header ref={props.forwardRef}>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Meshia Reed</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA user={props.user} />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header