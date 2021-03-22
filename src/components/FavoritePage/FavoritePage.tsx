import React from 'react'
import './FavoritePage.scss'
import {useFavoritePhotos} from '../../context/FavoriteContex'
import AlbumCover from '../Reuseable/AlbumCover'
import Header from '../Reuseable/Header'
import {Container} from 'react-bootstrap'
import PhotoCard from '../Reuseable/PhotoCard'
import bookmarked from '../../assets/bookmarked.png'

const FavoritePage = () => {

  const favoritePhotos = useFavoritePhotos();
  console.log(favoritePhotos)

  return (
    <div className='favorite-page'>
      <Header showFav={false}/>
      <AlbumCover>
        <div className="album-title">Favorite Photos</div>
        <div> By Me </div>
      </AlbumCover>
      <Container style={{marginTop:'1.5rem', marginBottom:'1.5rem'}}>
        {favoritePhotos.length > 0 ?
          <PhotoCard photoList={favoritePhotos} showAlbum={true}/> :
          <div className="no-favorite">
            You don't have a favorite photo
            <br/>
            <img 
              className="img-bookmark" 
              src={bookmarked} 
              alt="Bookmark"/>
          </div>
        }
      </Container>
    </div>
  )
}

export default FavoritePage
