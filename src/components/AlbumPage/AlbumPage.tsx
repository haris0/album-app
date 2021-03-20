import React,{useRef} from 'react'
import './AlbumPage.scss'
import { useParams } from "react-router-dom";
import {useFetchAlbumPhotos} from '../../services'

const AlbumPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchAlbumPhotos(id, isMounted);
  console.log(data)

  return (
    <div>
      Album Page {id}
    </div>
  )
}

export default AlbumPage
