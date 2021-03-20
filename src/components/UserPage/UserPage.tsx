import React,{useState, useEffect} from 'react'
import './UserPage.scss'
import { useParams } from "react-router-dom";
import {userType} from '../../type'
import {HTTP, users} from '../../services'

const UserPage = () => {
  interface ParamTypes {
    id: string
  }

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<userType|null>()
  const [error, setError] = useState<any>()

  useEffect(()=>{
    const getUserById = async() =>{
      setLoading(true)
      try {
        let response = await HTTP.get(users+'/'+id)
        console.log(response)
      } catch (error) {
        setError(error.data)
      }
      setLoading(false)
    }
    getUserById()
  },[])

  const { id } = useParams<ParamTypes>()
  return (
    <div>
      User Page {id}
    </div>
  )
}

export default UserPage
