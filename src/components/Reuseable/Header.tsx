import React from 'react'
import {Navbar, 
        Nav, 
        Button, 
        Badge,
        Container} from 'react-bootstrap'
import './Header.scss'

type props = {
  title:string
}

const Header = ({title}:props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{cursor:'pointer', fontWeight:'bold'}}>{title}</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Button className='fav-button'>
                Fav Photos <Badge variant="light">0</Badge>
              </Button>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
