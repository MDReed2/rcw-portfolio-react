import React, { useEffect, useState } from 'react'
import { indexSuggestions } from '../../../api/suggestions'
import { Link, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'



const IndexSuggestions = ({ user, msgAlert }) => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const response = await indexSuggestions(user)
        setSuggestions(response.data.suggestions)
      } catch (error) {
        // Alert the user, that they failed to sign up
        msgAlert({
          heading: 'Suggestions cannot be displayed: ' + error.message,
          message: 'Cannot index Suggestions',
          // this will be red
          variant: 'danger'
        })
      }
    }
    getSuggestions()
  }, [])

    if (!user) {
    return <Navigate to='/' />
  }

  if (suggestions.length === 0) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  const suggestionList = suggestions.map(suggestion => (
    <div key={suggestion._id}>
      {/* <div className="top">
        <img className='left' alt="" />
        <img className='user' alt="" />
        <img className='right' alt="" />
      </div> */}
      <div className="bottom">
        <h3>
          <Link className='link link-warning' to={`/suggestions/${suggestion._id}`}>{suggestion.title}</Link>
        </h3>
        <div>
          {suggestion.description}
        </div>
      </div>
      {/* <h5>
        {suggestion.owner.username}
      </h5> */}
      {/* <h6>{suggestion.owner.username} Suggestion Posting</h6> */}
    </div>
  ))

  return (
    <div id='suggestions'>
      <h1>Suggestions List</h1>
      <div>
        {suggestionList}
      </div>
    </div>

  )
}

export default IndexSuggestions