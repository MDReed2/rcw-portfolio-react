import React from 'react'
import { Link } from 'react-router-dom'

const CreatCTA = () => {
  return (
    <div>
      <p>Have a project in mind that you would like to see?</p>
      <Link to='/suggestions'>Create Suggestion</Link>
    </div>
  )
}

export default CreatCTA