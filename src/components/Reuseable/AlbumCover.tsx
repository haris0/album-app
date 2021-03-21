import React from 'react'
import './AlbumCover.scss'
import { albumType, userType } from '../../types'
import {useHistory} from "react-router-dom"

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
      <div className="album-title">{album.title}</div>
      <div 
        className="user-data"
        onClick={()=> goToUserPage(album.userId)}>
        By {user.name} ({user.email})
      </div>
    </div>
  )
}

export default AlbumCover
