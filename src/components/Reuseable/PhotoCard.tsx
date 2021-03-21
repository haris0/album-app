import React from 'react'
import './PhotoCard.scss'
import { photoType } from '../../types'
import bookmark from '../../assets/bookmark.png'
import bookmarked from '../../assets/bookmarked.png'
import {Card} from 'react-bootstrap'
import {useAddFavoritePhotos, 
        useCheckFavoritePhotos,
        useRemoveFavoritePhotos} from '../../context'


type props = {
  photoList: photoType[]
}

const PhotoCard = ({photoList}:props) => {

  const favoritePhotos = useAddFavoritePhotos()
  const unfavoritePhotos = useRemoveFavoritePhotos()
  const checkFavorite = useCheckFavoritePhotos()

  const handleFavPhoto = (photos:photoType) =>{
    favoritePhotos(photos)
  }

  const handleUnFavPhoto = (id:number) =>{
    unfavoritePhotos(id)
  }

  return (
    <div className='photo-card'>
      <div className="display-grid">
        {photoList.map((photo:photoType) => (
          <Card key={photo.id}>
            <Card.Img variant="top" src={photo.thumbnailUrl} />
            <Card.Body>
              <Card.Subtitle className='photo-title'>{photo.title}</Card.Subtitle>
              <div className="action">
                <div className="comment">No Commnent</div>
                { checkFavorite(photo.id)?
                  <img 
                  className="bookmark" 
                  src={bookmarked} 
                  alt="Bookmarked"
                  onClick={() => handleUnFavPhoto(photo.id)}/> :
                  <img 
                  className="bookmark"
                  src={bookmark} 
                  alt="Bookmark"
                  onClick={() => handleFavPhoto(photo)}/>
                }
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PhotoCard
