import React from 'react'
import './AlbumPage.scss'
import { useParams } from "react-router-dom";

const AlbumPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  return (
    <div>
      Album Page {id}
    </div>
  )
}

export default AlbumPage
