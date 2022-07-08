import React from 'react'
import './pixels.scss'

import Luhrs from './../../assets/luhrs_night.png'
import { Card } from 'react-bootstrap'

const imageData = [
  {
    id: 1,
    image: Luhrs,
  },
]

const Pixels = () => {
  return (
    <section id='pixels'>
      <h5>My Creative Side</h5>
      <h2>Pixels</h2>

      <div className='container pixels__container'>
        {
          imageData.map(({id, image}) => {
            return (
              <div>
                <Card key={id}>
                  <Card.Img src={image}/>
                </Card>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pixels