export interface albumType {
  userId:number,
  userName:string,
  id:number,
  title:string
}

export interface userType{
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

export interface photoType{
  albumId: number,
  albumName?: string,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

export interface favoriteContextType{
  favoritePhotos : photoType[],
  addFavoritePhoto : (photo: photoType) => void
  removeFavoritePhoto : (id: number) => void
}

export interface commentType{
  comment: string,
  date: Date,
}

export interface commentsType{
  photoId: number,
  comments: commentType[]
}

export interface commentContextType{
  comments : commentsType[],
  addComment : (photoId:number, comment: commentType) => void
  getCommentCount : (photoId:number) => void
}