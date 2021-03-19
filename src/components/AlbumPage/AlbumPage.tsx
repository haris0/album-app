import React,{useState, useEffect} from 'react'
import './AlbumPage.scss'
import { useParams } from "react-router-dom";
import { photoType } from '../../type'
import {HTTP, albums} from '../../services'

const AlbumPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<photoType[]|null>()
  const [error, setError] = useState<any>()

  useEffect(()=>{
    const getPhotos = async() =>{
      setLoading(true)
      try {
        let response = await HTTP.get(albums+'/'+id+'/photos')
        console.log(response)
      } catch (error) {
        setError(error.data)
      }
      setLoading(false)
    }
    getPhotos()
  },[])

  return (
    <div>
      Album Page {id}
    </div>
  )
}

export default AlbumPage
