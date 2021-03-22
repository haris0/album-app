import React from 'react'
import {Navbar, 
        Nav, 
        Button, 
        Badge,
        Container} from 'react-bootstrap'
import './Header.scss'
import {useHistory} from "react-router-dom";
import {useCountFavoritePhotos} from '../../context/FavoriteContex'

type props = {
  showFav?: boolean
}

const Header = ({showFav=true}:props) => {

  const favCount = useCountFavoritePhotos()
  const history = useHistory()
  const goToHome = () =>{
    if(window.location.pathname !== '/'){
      history.push('/')
    }
  }
  const goToFavorite = () =>{
    history.push('/favorite')
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{cursor:'pointer', fontWeight:'bold'}}
            onClick={goToHome}>
            Album App
          </Navbar.Brand>
          {showFav &&
            <>
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Button className='fav-button' onClick={goToFavorite}>
                  Fav Photos <Badge variant="light">{favCount}</Badge>
                </Button>
              </Nav>
            </>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
