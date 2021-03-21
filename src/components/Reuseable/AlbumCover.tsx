import React from 'react'
import './AlbumCover.scss'
import { albumType, userType } from '../../types'
import {useHistory} from "react-router-dom"
import { Container } from 'react-bootstrap'

type props = {
  album : albumType,
  user : userType
}

const AlbumCover = ({album, user}:props) => {
  const history = useHistory()

  const goToUserPage = (id:number) =>{
    history.push('/user/'+id)
  }

  return (
    <div className='album-cover'>
      <div className="cover">
        <Container>
        <div className="album-title">{album.title}</div>
        <div 
          className="user-data"
          onClick={()=> goToUserPage(album.userId)}>
          By {user.name} ({user.email})
        </div>
        </Container>
      </div>
    </div>
  )
}

export default AlbumCover
