import React from 'react'
import './UserPage.scss'
import { useParams } from "react-router-dom";

const UserPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  return (
    <div>
      User Page {id}
    </div>
  )
}

export default UserPage
