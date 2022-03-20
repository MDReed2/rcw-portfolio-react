import React from 'react'
import CV from './../../../assets/MeshiaReed_Resume2022.pdf'

const DownloadCTA = () => {
  return (
    <a href={CV} download className='btn'>Download CV</a>
  )
}

export default DownloadCTA