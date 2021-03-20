import React,{useRef} from 'react'
import './DetailPhoto.scss'
import { useParams } from "react-router-dom";
import {useFetchPhoto} from '../../services'

const DetailPhoto = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchPhoto(id, isMounted);
  console.log(data)

  return (
    <div>
      Detail Page {id}
    </div>
  )
}

export default DetailPhoto
