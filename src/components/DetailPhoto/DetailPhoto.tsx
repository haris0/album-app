import React,{useRef, useState} from 'react'
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
import { useComments, 
         useAddComments,
         useGetCommentById } from '../../context/CommentContex'
import {commentType} from '../../types'

const convertDate =(dateComment:Date)=>{
  let dateFull = new Date(dateComment)
  let months = ["Januari ", 
                "Fabruari", 
                "Maret",
                "April",
                "Mei", 
                "Juni", 
                "July", 
                "Agustus", 
                "September", 
                "Oktober", 
                "November", 
                "Desember"]
  let year = dateFull.getFullYear()
  let date = dateFull.getDate()
  let monthsIdx = dateFull.getMonth()

  return date+" "+months[monthsIdx]+" "+year
}

const DetailPhoto = () => {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const isMounted = useRef(true);
  const { loading, data , error } = useFetchPhoto(id, isMounted);
  console.log(data)

  const allComment = useComments() 
  const addComment = useAddComments()
  const commentThisPhoto = useGetCommentById(parseInt(id))
  let comments:commentType[] = []
  if(commentThisPhoto) comments = commentThisPhoto.comments

  const [commentInput, setCommentInput] = useState<string>('')
  const handleInput = (e:any) => setCommentInput(e.target.value)

  const handleSupmit = (e:any) =>{
    e.preventDefault();
    let currentDate = new Date()
    let commentData:commentType = {
      comment:commentInput,
      date:currentDate
    }
    addComment(parseInt(id), commentData)
    setCommentInput('')
  }

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
                {comments.length > 0 ?
                  comments.map((comment, idx)=>(
                    <div className="comment" key={idx}>
                      <div className="name">Anoniymous | {convertDate(comment.date)}</div>
                      <div className="commnet-text">{comment.comment}</div>
                      <hr/>
                    </div>
                  )) :
                  <div><b>No comment</b></div>
                }
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
                  value={commentInput}
                  onChange={handleInput}
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
