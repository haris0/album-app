import React, { useState, useEffect } from 'react'
import './MainPage.scss'
import {HTTP, albums, users} from '../../services'
import {albumType, userType} from '../../type'

const MainPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [dataAlbums, setDataAlbums] = useState<albumType[]|null>()
  const [dataUsers, setDataUsers] = useState<userType[]|null>()
  const [error, setError] = useState<any>()

  useEffect(()=>{
    const getAlbumUser = async() =>{
      setLoading(true)
      try {
        let [responseAlbum, responseUser] = await Promise.all([
           HTTP.get(albums),
           HTTP.get(users)
        ])
        console.log(responseAlbum)
        console.log(responseUser)
      } catch (error) {
        setError(error.data)
        console.log(error.data)
      }
      setLoading(false)
    }
    getAlbumUser()
  }, [])

  return (
    <div>
      Main Page
    </div>
  )
}

export default MainPage
