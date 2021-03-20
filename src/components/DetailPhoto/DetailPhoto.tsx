import React,{useState, useEffect} from 'react'
import './DetailPhoto.scss'
import { useParams } from "react-router-dom";
import { photoType } from '../../type'
import {HTTP, photo} from '../../services'

const DetailPhoto = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<photoType|null>()
  const [error, setError] = useState<any>()

  useEffect(()=>{
    const getPhotoById = async() =>{
      setLoading(true)
      try {
        let response = await HTTP.get(photo+'/'+id)
        console.log(response)
      } catch (error) {
        setError(error.data)
      }
      setLoading(false)
    }
    getPhotoById()
  },[])

  return (
    <div>
      Detail Page {id}
    </div>
  )
}

export default DetailPhoto
