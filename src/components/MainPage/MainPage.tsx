import React, { useState, useEffect } from 'react'
import './MainPage.scss'
import {HTTP, albums, users} from '../../services'
import {albumType, userType} from '../../type'
import Header from '../Reuseable/Header'
import {Container} from 'react-bootstrap'
import AlbumCardSkeleton from './child/AlbumCardSkeleton'
import AlbumCard from './child/AlbumCard'

const MainPage = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [dataAlbums, setDataAlbums] = useState<albumType[]>([])
  const [dataUsers, setDataUsers] = useState<userType[]>([])
  const [error, setError] = useState<any>()

  useEffect(()=>{
    const getAlbumUser = async() =>{
      setLoading(true)
      try {
        let [responseAlbum, responseUser] = await Promise.all([
           HTTP.get(albums),
           HTTP.get(users)
        ])
        setDataAlbums(responseAlbum.data)
        setDataUsers(responseUser.data)
        console.log(responseAlbum)
        console.log(responseUser)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    getAlbumUser()
  }, [])

  return (
    <div className='main-page'>
      <Header title='Album App'/>
      <Container className='margin'>
        <div className="display-grid">
          {loading && 
            <AlbumCardSkeleton/>
          }
          {!loading && dataAlbums && dataUsers &&
            dataAlbums.map(album => (
              <AlbumCard
                keyItem={album.id}
                albumName={album.title}
                userName={dataUsers[album.userId-1].name}/>
            ))
          }
          {!loading && error

          }
        </div>
      </Container>
    </div>
  )
}

export default MainPage
