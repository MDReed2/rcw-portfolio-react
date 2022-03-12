import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = ({ msgAlert, setUser }) => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastNameInput = (event) => {
    setLastName(event.target.value)
  }
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }
  const handlePWInput = (event) => {
    setPassword(event.target.value)
  }
  const handlePWConfirmationInput = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  const onSignUp = async (event) => {
    event.preventDefault()

    try {
      await signUp(firstname, lastname, email, password, password_confirmation)
      const res = await signIn(email, password)
      setUser(res.data.user)
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }


  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        {/* <img className='background-image' src={Background} 
        alt='' /> */}
        <h3>Sign Up</h3>
        <Form onSubmit={onSignUp}>
          <Form.Group controlId='firstname'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type='text'
              name='firstname'
              value={firstname}
              placeholder='First Name'
              onChange={handleFirstNameInput}
            />
          </Form.Group>
          <Form.Group controlId='lastname'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type='text'
              name='lastname'
              value={lastname}
              placeholder='Last Name'
              onChange={handleLastNameInput}
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={handleEmailInput}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={handlePWInput}
            />
          </Form.Group>
          <Form.Group controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={password_confirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={handlePWConfirmationInput}
            />
          </Form.Group>
          <Button className='mt-2' variant='warning' type='submit'>Submit</Button>
          <small><NavLink to='/sign-in'>Back to Sign-In</NavLink></small>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
