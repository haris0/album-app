import React from 'react'
import {Card} from 'react-bootstrap'
import {useHistory} from "react-router-dom";

type props ={
  id:number,
  userId:number,
  albumName:string,
}

const UserAlbumCard = ({id, userId, albumName}:props) => {
  const history = useHistory()

  const goToAlbumPage = () =>{
    history.push('/album/'+id)
  }

  return (
    <>
      <Card className='album-card'>
        <Card.Header onClick={goToAlbumPage} className='card-hover'>
          <div className="oneline">{albumName}</div>
        </Card.Header>
      </Card>
    </>
  )
}

export default UserAlbumCard
