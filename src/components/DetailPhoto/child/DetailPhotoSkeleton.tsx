import React from 'react'
import { Container,
         Row,
         Col } from 'react-bootstrap'
import Skeleton from '../../Reuseable/Skeleton'

const DetailPhotoSkeleton = () => {
  return (
    <div>
      <Container className='container-margin'>
        <Row>
          <Col sm={4}>
            <div className='photo-div'>
              <Skeleton widthSize='100%' paddingTop='100%'/>
              <div className="photo-title">
                <Skeleton widthSize='100%' heigthSize='40px'/>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="comment-div">
              <div className="comment-title">
                Photo's Comment
              </div>
                <div className="comment">
                  <div style={{marginBottom:'10px'}}>
                    <Skeleton widthSize='100px' heigthSize='20px'/>
                  </div>
                  <div className="commnet-text">
                    <Skeleton widthSize='50%' heigthSize='20px'/>
                  </div>
                  <hr/>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailPhotoSkeleton
