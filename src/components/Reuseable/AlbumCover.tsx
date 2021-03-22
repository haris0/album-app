import React from 'react'
import './AlbumCover.scss'
import { Container } from 'react-bootstrap'
import { color } from '../../color'

type props ={
  userId?:number,
  children?: React.ReactNode
}

const AlbumCover = ({userId=11, children}:props) => {
  return (
    <div className='album-cover'>
      <div className="cover" style={{backgroundColor:color[userId-1]}}>
        <Container>
          {children}
        </Container>
      </div>
    </div>
  )
}

export default AlbumCover
