import React from 'react'
import {Card} from 'react-bootstrap'

type props ={
  keyItem:number
  albumName:string,
  userName:string
}

const AlbumCard = ({keyItem, albumName,userName}:props) => {
  return (
    <>
      <Card key={keyItem} style={{cursor:'pointer'}}>
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
