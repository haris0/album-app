import React from 'react'
import './Skeleton.scss'

type propType = {
  widthSize:string,
  heigthSize:string
}

const Skeleton = ({widthSize, heigthSize}:propType) => {
  return (
    <div className='skeleton' style={{width:widthSize, height:heigthSize}}/>
  )
}


export default Skeleton
