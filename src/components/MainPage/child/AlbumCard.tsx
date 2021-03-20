import React from 'react'
import {Card} from 'react-bootstrap'

type props ={
  albumName:string,
  userName:string
}

const AlbumCard = ({albumName,userName}:props) => {
  return (
    <>
      <Card className='album-card'>
        <Card.Header>
          <div className="oneline">{albumName}</div>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="text-muted">
            By {userName}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  )
}

export default AlbumCard
