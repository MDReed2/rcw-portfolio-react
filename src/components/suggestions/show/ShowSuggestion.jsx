import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'
import { deleteSuggestion, showSuggestion } from '../../../api/suggestions'



const OneSuggestion = ({ user, msgAlert }) => {
  const [suggestion, setSuggestion] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showSuggestion(id, user)
        setSuggestion(res.data.suggestion)
        
      } catch (error) {
        msgAlert({
          heading: 'Suggestion failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [suggestion])

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  } 


  const handleDeleteClick = async () => {
    try {
      await deleteSuggestion(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete Suggestion',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If suggestion is `null`, we are loading
  if (!suggestion) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/suggestions' />
  } else {
    // We have a job, display it!
    return (
      <div>
        <div>
          <div>
            <h3>{suggestion.title}
            </h3>
            <p>Suggestion Description: {suggestion.description}</p>
            <h6></h6>
            <Link to={`/suggestions/${id}/edit`}>
              <Button variant='primary' type='submit'>Update Suggestion </Button>
            </Link>
            <Button variant='danger' onClick={handleDeleteClick}>Delete Job </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default OneSuggestion