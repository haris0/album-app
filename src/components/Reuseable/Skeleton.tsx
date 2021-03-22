import React from 'react'
import './Skeleton.scss'

type propType = {
  widthSize:string,
  heigthSize?:string,
  paddingTop?:string
}

const Skeleton = ({widthSize, heigthSize, paddingTop}:propType) => {
  return (
    <div className='skeleton' style={{width:widthSize, height:heigthSize, paddingTop:paddingTop}}/>
  )
}


export default Skeleton
