import React,{useRef} from 'react'
import './UserPage.scss'
import { useParams } from "react-router-dom"
import {useFetchUser} from '../../services'
import Header from '../Reuseable/Header'
import ErrorText from '../Reuseable/ErrorText'
import {Container,
        Row,
        Col,
        Card} from 'react-bootstrap'
import UserAlbumCard from './child/UserAlbumCard'
import {albumType} from '../../type'
import Skeleton from '../Reuseable/Skeleton'

const UserPage = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()

  const isMounted = useRef(true);
  const { loading, data , error } = useFetchUser(id, isMounted);
  console.log(data)
  const dummyImg = 'https://via.placeholder.com/200x200.png?text='

  return (
    <div className='user-page'>
      <Header/>
      <Container className='margin'>
        {loading &&
          <div className="user-data">
            <div className="avatar"/>
            <div className="text margin-left">
              <div style={{marginTop:'5px'}}>
                <Skeleton widthSize='200px' heigthSize='30px'></Skeleton>
              </div>
              <div style={{marginTop:'10px'}}>
                <Skeleton widthSize='100px' heigthSize='20px'></Skeleton>
              </div>
            </div>
          </div>
        }
        {!loading && data &&
          <>
          <div className="user-data">
            <img className="avatar" 
                src={dummyImg+data.data.name.charAt(0).toUpperCase()}
                alt={data.data.name}/>
            <div className="text margin-left">
              <div className="top user-name">{data.data.name}</div>
              <div>{data.data.website}</div>
            </div>
          </div>
          <hr/>
          <div>
          <Row>
            <Col sm={4} style={{marginBottom:'20px'}}>
              <div className='sub-title'>Personal Data</div>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs={4}>
                      <div><b>City</b></div>
                      <div><b>Company</b></div>
                      <div><b>Email</b></div>
                      <div><b>Phone</b></div>
                    </Col>
                    <Col>
                      <div>: {data.data.address.city}</div>
                      <div>: {data.data.company.name}</div>
                      <div>: {data.data.email}</div>
                      <div>: {data.data.phone}</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={8} >
              <div className='sub-title'>{data.data.name}'s Albums</div>
              <div className="display-grid">
                {data.data.userAlbum.map((album:albumType) => (
                  <UserAlbumCard
                    key={album.id}
                    id={album.id}
                    userId={album.userId}
                    albumName={album.title}/>
                ))}
              </div>
            </Col>
          </Row>
          </div>
          </>
        }
        {!loading && error &&
          <ErrorText/>
        }
      </Container>
    </div>
  )
}

export default UserPage
