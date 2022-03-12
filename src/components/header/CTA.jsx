import React from 'react'
import DownloadCTA from './cta-download/DownloadCTA'

const CTA = (props) => {
  return (
    <div className='cta'>
      {props.user ? <DownloadCTA />: ''}
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA