import React,{useRef} from 'react'
import './AlbumPage.scss'
import { useParams } from "react-router-dom"
import {useFetchAlbumPhotos} from '../../services'
import Header from '../Reuseable/Header'
import {Container} from 'react-bootstrap'
import ErrorText from '../Reuseable/ErrorText'
import Skeleton from '../Reuseable/Skeleton'
import PhotoCard from '../Reuseable/PhotoCard'
import AlbumCover from '../Reuseable/AlbumCover'
import {useHistory} from "react-router-dom"

const AlbumPage = () => {

  const history = useHistory()
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchAlbumPhotos(id, isMounted);
  console.log(data)

  const goToUserPage = (id:number) =>{
    history.push('/user/'+id)
  }

  return (
    <div className='album-page'>
      <Header/>
      {loading &&
        <AlbumCover>
          <div>
            <Skeleton widthSize='80%' heigthSize='40px'/>
          </div>
          <div style={{marginTop:'15px'}}>
            <Skeleton widthSize='30%' heigthSize='20px'/>
          </div>
        </AlbumCover>
      }
      {!loading && data &&
        <>
          <AlbumCover userId={parseInt(data.data.userData.id)}>
            <div className="album-title">{data.data.title}</div>
            <div 
              className="user-data"
              onClick={()=> goToUserPage(data.data.userId)}>
              By {data.data.userData.name} ({data.data.userData.email})
            </div>
          </AlbumCover>
          <Container style={{marginTop:'1.5rem', marginBottom:'1.5rem'}}>
            <PhotoCard photoList={data.data.photos} albumName={data.data.title}/>
          </Container>
        </>
      }
      {!loading && error &&
        <ErrorText/>
      }
    </div>
  )
}

export default AlbumPage
