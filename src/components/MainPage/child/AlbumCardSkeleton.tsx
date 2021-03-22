import React from 'react'
import Skeleton from '../../Reuseable/Skeleton'
import {Card} from 'react-bootstrap'

const AlbumCardSkeleton = () => {
  return (
    <>
      {[...Array(8)].map(i =>
          <Card key={i}>
          <Card.Header>
            <Skeleton widthSize='100%' heigthSize='20px'/>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="text-muted">
              <Skeleton widthSize='auto' heigthSize='20'/>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default AlbumCardSkeleton
