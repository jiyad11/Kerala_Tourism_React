import React from 'react'
import { Carousel, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import './Navtour.css';

function Navtour() {
    const pics = [
        {image: '//www.keralatourism.org/images/banner/desktop/painting-1920x650.jpg'},
        {image:'https://www.keralatourism.org/images/banner/medium_desktop/nelliyampathy-1920x650.jpg'},
        {image:'https://www.keralatourism.org/images/banner/medium_desktop/riverreafting-1920x650.jpg'},
        {image:'https://www.keralatourism.org/images/banner/medium_desktop/kumarakom-1920x6502.jpg'},
        {image:'https://www.keralatourism.org/images/banner/medium_desktop/destination-wedding-1920x6503.jpg'}
    ]

  return (

    <div>
    <Navbar className='navbar' collapseOnSelect expand="lg">
      <Container>
      <img className='keralaimg' src='https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017'/>
        {/* <Navbar.Brand className='fs-3'  href="#home"><i>Keralatourism.Org</i> <p className='fs-6'>Welcome to God's Own Country</p></Navbar.Brand>  */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id='navsize' className='ms-auto' as='ul' >     
            <Nav.Link as='li'><a href='https://www.keralatourism.org/#experience-kerala'>EXPERIENCE KERALA</a></Nav.Link>
            <Nav.Link as='li'><a href=''>WHERE TO GO</a></Nav.Link>
            <Nav.Link as='li'><a href=''>WHERE TO STAY</a></Nav.Link>
            <Nav.Link as='li'><a href=''>THINGS TO DO</a></Nav.Link>
            <Nav.Link as='li'><a href=''>PLAN YOUR TRIP</a></Nav.Link>
            <Nav.Link as='li'><a href=''>TRAVEL CARE</a></Nav.Link>
            <Nav.Link as='li'><a href=''>E BROCHURES</a></Nav.Link>
            <Nav.Link as='li'><a href=''>E NEWSLETTER</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <Carousel className='carou'>
            {pics.map((i)=>
            {
                return (
                   <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={i.image}
                    alt='slide '
                     />
                     <Carousel.Caption>
                        <h3>{i.name}</h3>
                     </Carousel.Caption>
                   </Carousel.Item>
                )
            }

            )}
        </Carousel>
    </div>
  )
}

export default Navtour