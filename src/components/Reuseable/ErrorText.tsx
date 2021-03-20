import React from 'react'
import error from '../../assets/error.png'
import './ErrorText.scss'

const ErrorText = () => {
  return (
    <div className='error'>
      <div className='error-title'>Error</div>
      <div className='error-msg'>Something went wrong on load data</div>
      <img src={error} alt="Error"/>
    </div>
  )
}

export default ErrorText
