import React, { createContext, useContext, useState, useEffect} from 'react'
import { favoriteContextType, photoType } from '../types'

let initState = []
if(localStorage.hasOwnProperty("favoritePhoto")){
  initState = JSON.parse(localStorage.getItem("favoritePhoto") || '[]');
}

const contextDefaultValues: favoriteContextType = {
  favoritePhotos: initState,
  addFavoritePhoto: () => {},
  removeFavoritePhoto: () => {},
};

const FavoriteContex = createContext<favoriteContextType>(
  contextDefaultValues
)

const FavoriteContexProvider = (props:any) => {
  
  const [favoritePhotos, setFavoritePhotos] = useState<photoType[]>(contextDefaultValues.favoritePhotos);
  const addFavoritePhoto = (newPhoto: photoType) => setFavoritePhotos((photos) => [...photos, newPhoto]);
  const removeFavoritePhoto = (id:number) => setFavoritePhotos((photos) => photos.filter((item) => item.id !== id))

  useEffect(() => {
    localStorage.setItem("favoritePhoto", JSON.stringify(favoritePhotos));
  }, [favoritePhotos]);

  return (
    <FavoriteContex.Provider value={{
      favoritePhotos,
      addFavoritePhoto,
      removeFavoritePhoto,
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

export const useCheckFavoritePhotos = () => {
  const {favoritePhotos} = useContext(FavoriteContex)
  return (id:number) => favoritePhotos.some((photo) => photo.id === id)
}

export const useCountFavoritePhotos = () => {
  const {favoritePhotos} = useContext(FavoriteContex)
  return favoritePhotos.length
}

export default FavoriteContexProvider
