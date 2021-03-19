import React from 'react'
import './DetailPhoto.scss'
import { useParams } from "react-router-dom";

const DetailPhoto = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  return (
    <div>
      Detail Page {id}
    </div>
  )
}

export default DetailPhoto
