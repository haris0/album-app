export interface albumType {
  userId:number,
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
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}