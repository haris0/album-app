import React from 'react'
import './PhotoCard.scss'
import { photoType } from '../../types'
import bookmark from '../../assets/bookmark.png'
import bookmarked from '../../assets/bookmarked.png'
import {Card} from 'react-bootstrap'
import {useAddFavoritePhotos, 
        useCheckFavoritePhotos,
        useRemoveFavoritePhotos} from '../../context/FavoriteContex'
import {useHistory} from 'react-router-dom'

type props = {
  photoList: photoType[]
}

const PhotoCard = ({photoList}:props) => {

  const history = useHistory()

  const favoritePhotos = useAddFavoritePhotos()
  const unfavoritePhotos = useRemoveFavoritePhotos()
  const checkFavorite = useCheckFavoritePhotos()

  const handleFavPhoto = (photos:photoType) =>{
    favoritePhotos(photos)
  }

  const handleUnFavPhoto = (id:number) =>{
    unfavoritePhotos(id)
  }
  
  const goToDeatilPhoto = (id:number) =>{
    history.push('/photo/'+id)
  }

  return (
    <div className='photo-card'>
      <div className="display-grid">
        {photoList.map((photo:photoType) => (
          <Card key={photo.id}>
            <Card.Img variant="top" src={photo.thumbnailUrl} />
            <Card.Body>
              <Card.Subtitle 
              className='photo-title'
              onClick={()=> goToDeatilPhoto(photo.id)}>
                {photo.title}
              </Card.Subtitle>
              <div className="action">
                <div 
                  className="comment"
                  onClick={()=> goToDeatilPhoto(photo.id)}>
                    No Commnent
                  </div>
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
