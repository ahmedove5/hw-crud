import React from 'react'
import { Navbar ,Container,Nav ,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Nvbar() {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/Creat">Creat</Link>
    <Link to="/Users">Users</Link>
      
    </Nav>
    </Container>
  </Navbar>

  <br />

  
  

 
    </div>
  )
}
