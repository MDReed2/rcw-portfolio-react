import React from 'react'
import DownloadCTA from './cta-download/DownloadCTA'

const CTA = () => {
  return (
    <div className='cta'>
      <DownloadCTA />
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA