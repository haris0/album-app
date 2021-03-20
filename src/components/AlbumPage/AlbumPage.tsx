import React,{useRef} from 'react'
import './AlbumPage.scss'
import { useParams } from "react-router-dom";
import {useFetchAlbumPhotos} from '../../services'
import Header from '../Reuseable/Header'
import {Container, Card} from 'react-bootstrap'
import ErrorText from '../Reuseable/ErrorText'
import {photoType} from '../../type'
import {useHistory} from "react-router-dom";

const AlbumPage = () => {
  const history = useHistory()
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchAlbumPhotos(id, isMounted);
  console.log(data)

  const goToUserPage = (id:string) =>{
    history.push('/user/'+id)
  }

  return (
    <div className='album-page'>
      <Header/>
      {loading &&
        <div>Loading...</div>
      }
      {!loading && data &&
        <>
        <div className="cover">
          <Container>
            <div className="album-title">{data.data.title}</div>
            <div 
              className="user-data"
              onClick={()=> goToUserPage(data.data.userId)}>
              By {data.data.userData.name} ({data.data.userData.email}) 
            </div>
          </Container>
        </div>
        <Container className='margin' style={{marginTop:'20px'}}>
          <div className="display-grid">
            {data.data.photos.map((photo:photoType) => (
              <Card>
                <Card.Img variant="top" src={photo.thumbnailUrl} />
                <Card.Body>
                  <Card.Subtitle className='photo-title'>{photo.title}</Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          </div>
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
