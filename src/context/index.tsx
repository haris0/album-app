import React, { createContext, useContext, useState} from 'react'
import { favoriteContextType, photoType } from '../types'

const contextDefaultValues: favoriteContextType = {
  favoritePhotos: [],
  addFavoritePhoto: () => {},
  removeFavoritePhoto: () => {}
};

const FavoriteContex = createContext<favoriteContextType>(
  contextDefaultValues
)

const FavoriteContexProvider = (props:any) => {
  
  const [favoritePhotos, setFavoritePhotos] = useState<photoType[]>(contextDefaultValues.favoritePhotos);
  const addFavoritePhoto = (newPhoto: photoType) => setFavoritePhotos((photos) => [...photos, newPhoto]);
  const removeFavoritePhoto = (id:number) => setFavoritePhotos((photos) => photos.filter((item) => item.id !== id))

  return (
    <FavoriteContex.Provider value={{
      favoritePhotos,
      addFavoritePhoto,
      removeFavoritePhoto
    }}>
      {props.children}
    </FavoriteContex.Provider>
  );
};

export const useFavoritePhotos = () => {
  const {favoritePhotos} = useContext(FavoriteContex)

  return favoritePhotos
}

export const useAddFavoritePhotos = () => {
  const {addFavoritePhoto} = useContext(FavoriteContex)

  return (photo:photoType) => {
    addFavoritePhoto(photo);
  };
}

export const useRemoveFavoritePhotos = () => {
  const {removeFavoritePhoto} = useContext(FavoriteContex)

  return (id:number) => {
    removeFavoritePhoto(id);
  };
}

export default FavoriteContexProvider
