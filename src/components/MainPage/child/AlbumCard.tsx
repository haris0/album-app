import React from 'react'
import {Card} from 'react-bootstrap'
import {useHistory} from "react-router-dom";

type props ={
  id:number,
  userId:number,
  albumName:string,
  userName:string
}

const AlbumCard = ({id, userId, albumName,userName}:props) => {
  const history = useHistory()

  const goToAlbumPage = () =>{
    history.push('/album/'+id)
  }

  const goToUserPage = () =>{
    history.push('/user/'+userId)
  }

  return (
    <>
      <Card className='album-card'>
        <Card.Header onClick={goToAlbumPage} className='card-hover'>
          <div className="oneline">{albumName}</div>
        </Card.Header>
        <Card.Body onClick={goToUserPage} className='card-hover'>
          <Card.Subtitle className="text-muted">
            By {userName}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  )
}

export default AlbumCard
