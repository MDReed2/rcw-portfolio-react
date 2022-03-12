import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { showSuggestion, updateSuggestion } from '../../../api/suggestions'
import SuggestionForm from '../form/SuggestionForm'

const UpdateSuggestion = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showSuggestion(id, user)
        setTitle(res.data.job.title)
        setDescription(res.data.job.description)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load post',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateSuggestion(id, title, description, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update post',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/suggestions/${id}`} />
  }

  return (
    <div className='row mt-5'>
      <div className='form col-md-3 mx-auto mt-5'>
        <h3>Edit Suggestion Post</h3>
        <SuggestionForm
          handleSubmit={handleSubmit}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
        />
      </div>
    </div>
  )
}

export default UpdateSuggestion