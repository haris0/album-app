import React,{useRef} from 'react'
import './AlbumPage.scss'
import { useParams } from "react-router-dom";
import {useFetchAlbumPhotos} from '../../services'
import Header from '../Reuseable/Header'
import {Container} from 'react-bootstrap'
import ErrorText from '../Reuseable/ErrorText'
import Skeleton from '../Reuseable/Skeleton'
import PhotoCard from '../Reuseable/PhotoCard'
import AlbumCover from '../Reuseable/AlbumCover';

const AlbumPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchAlbumPhotos(id, isMounted);
  console.log(data)

  return (
    <div className='album-page'>
      <Header/>
      {loading &&
        <div className="cover">
          <Container>
            <div>
              <Skeleton widthSize='350px' heigthSize='40px'/>
            </div>
            <div style={{marginTop:'15px'}}>
              <Skeleton widthSize='120px' heigthSize='20px'/>
            </div>
          </Container>
        </div>
      }
      {!loading && data &&
        <>
          <AlbumCover album={data.data} user={data.data.userData} />
          <Container className='margin' style={{marginTop:'20px'}}>
            <PhotoCard photoList={data.data.photos}/>
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
