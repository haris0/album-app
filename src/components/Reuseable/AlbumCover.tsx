import React from 'react'
import './AlbumCover.scss'
import { Container } from 'react-bootstrap'

const AlbumCover = ({children}:any) => {
  return (
    <div className='album-cover'>
      <div className="cover">
        <Container>
          {children}
        </Container>
      </div>
    </div>
  )
}

export default AlbumCover
