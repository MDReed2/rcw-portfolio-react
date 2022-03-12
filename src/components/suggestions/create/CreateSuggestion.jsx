import React, { useState } from 'react'
import { Navigate } from 'react-router'
// import { NavLink } from 'react-router-dom'

import { createSuggestion } from '../../../api/suggestions'
// import { createSuggestionSuccess, createSuggestionFailure } from '../../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import SuggestionForm from '../form/SuggestionForm'


const CreateSuggestion = ({user, msgAlert}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createSuggestion(title, description, user)
      setCreatedId(res.data.suggestion._id)

      msgAlert({
        heading: 'Suggestion Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create suggestion',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if suggestion has been created,Navigate to the 'show' page
    return <Navigate to={`/suggestions/${createdId}`} />
  }

  return (
    <div>
      <h3>Create Suggestion</h3>
      <SuggestionForm 
        handleSubmit={handleSubmit}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </div>
  )
}

export default CreateSuggestion
