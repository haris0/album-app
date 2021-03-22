import React,{useRef} from 'react'
import './DetailPhoto.scss'
import { useParams } from "react-router-dom"
import {useFetchPhoto} from '../../services'
import Header from '../Reuseable/Header'
import { Container, 
         Form, 
         InputGroup, 
         Button,
         FormControl,
         Row,
         Col} from 'react-bootstrap'
import send from '../../assets/send.png'
import ErrorText from '../Reuseable/ErrorText'
import DetailPhotoSkeleton from './child/DetailPhotoSkeleton'

const DetailPhoto = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchPhoto(id, isMounted);
  console.log(data)

  const handleSupmit = (e:any) =>{
    e.preventDefault();
    console.log('Komen')
  }

  const comments = [
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, . Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, . Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt'},
    {date:'1 Maret 2021', comment:'Lorem ipsum dolor sit amet, . Ita ne hoc quidem modo paria peccata sunt'},
  ]

  return (
    <div className='detail-photo'>
      <Header/>
      {loading &&
        <DetailPhotoSkeleton/>
      }
      {!loading && data &&
        <>
        <Container className='container-margin'>
          <Row>
            <Col sm={4}>
              <div className='photo-div'>
                <img
                  src={data.data.url} 
                  alt="Detail"
                  className='photo-detail'/>
                <div className="photo-title">{data.data.title}</div>
              </div>
            </Col>
            <Col sm={8}>
              <div className="comment-div">
                <div className="comment-title">
                  Photo's Comment
                </div>
                {comments.map((comment, idx)=>(
                  <div className="comment" key={idx}>
                    <div className="name">Anoniymous | {comment.date}</div>
                    <div className="commnet-text">{comment.comment}</div>
                    <hr/>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="comment-input">
          <Container>
            <Form onSubmit={(e)=> handleSupmit(e)}>
              <InputGroup className="mb-3 margin-input">
                <FormControl
                  placeholder="Comment"
                  aria-label="Comment"
                />
                <InputGroup.Append>
                  <Button 
                    variant="outline-secondary" 
                    type='submit'
                    className='send-button'>
                    <img src={send} alt="send" className='send-img'/>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Container>
        </div>
        </>
      }
      {!loading && error &&
        <ErrorText/>
      }
    </div>
  )
}

export default DetailPhoto
