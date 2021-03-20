import React,{useRef} from 'react'
import './UserPage.scss'
import { useParams } from "react-router-dom"
import {useFetchUser} from '../../services'

const UserPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()

  const isMounted = useRef(true);
  const { loading, data , error } = useFetchUser(id, isMounted);
  console.log(data)

  return (
    <div>
      User Page {id}
    </div>
  )
}

export default UserPage
