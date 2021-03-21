import React from 'react'
import './FavoritePage.scss'
import {useFavoritePhotos} from '../../context'

const FavoritePage = () => {

  const favoritePhotos = useFavoritePhotos();
  console.log(favoritePhotos)

  return (
    <div>
      Favorite Page
    </div>
  )
}

export default FavoritePage
