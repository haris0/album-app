import React,{useRef} from 'react'
import './DetailPhoto.scss'
import { useParams } from "react-router-dom";
import { photoType } from '../../type'
import {useFetch, photo} from '../../services'

const DetailPhoto = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetch(photo+'/'+id, isMounted);
  console.log(data)

  return (
    <div>
      Detail Page {id}
    </div>
  )
}

export default DetailPhoto
