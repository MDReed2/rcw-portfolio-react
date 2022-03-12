import React from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './form.scss'

const SuggestionForm = ({ handleSubmit, title, description, setTitle, setDescription }) => {
  return (
    <div id='suggestions'>
      <section>
        <h5>What Would You Like to See</h5>
        <h2>Suggestions</h2>
        <div className="container suggestion__container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder='Title'
                name='title'
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control className= 'textarea'as="textarea" row={5}
                placeholder='Enter description'
                name='description'
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </Form.Group>
            <Button variant='warning' type='submit'>Submit Suggestion</Button>
          </Form>
        </div>
      </section>
    </div>
  )
}

export default SuggestionForm