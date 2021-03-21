import React from 'react'
import './Page404.scss'
import Header from '../Reuseable/Header'
import page404 from '../../assets/page404.png'

const Page404 = () => {
  return (
    <div className='page-404'>
      <Header/>
      <div className="error-msg">
        <div className="error-text">
          Page not Found
        </div>
        <img 
          src={page404} 
          alt="Page Not Found" 
          className="error-img"/>
      </div>
    </div>
  )
}

export default Page404
