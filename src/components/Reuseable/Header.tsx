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
          <Navbar.Brand style={{cursor:'pointer'}}>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Button className='fav-button'>
                Fav Photos <Badge variant="light">0</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
