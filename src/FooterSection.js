import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './FooterSection.css'

function FooterSection() {
  return (
    <div>
   <Container>
    
    <footer className='footer1'>
    <Row>
        <Col className='col-li1'>
        <ul>
            <h4 className='h4-li1'>Explore</h4>
            <li>Classification Schemes</li>
            <li>Governmental Affairs</li>
            <li>Media Room</li>
            <li>Tourism Events</li>
            <li>Maps</li>
            <li>Site Map</li>
        </ul>
        </Col>
        
        
        <Col className='col-li2'>
        <ul>
            <h4 className='h4-li2'>Travel Hub</h4>
            <li>Kerala at a Glance</li>
            <li>Travel Care</li>
            <li>Where to Stay</li>
            <li>How to?</li>
            <li>Travel Tips</li>
        </ul>
        </Col>
        <Col className='col-li3'>
        <ul>
            <h4 className='h4-li3'>Nature</h4>
            <li>Hills</li>
            <li>Backwaters</li>
            <li>Beaches</li>
            <li>Wildlife</li>
            <li>Waterfalls</li>
        </ul>
        </Col>   
        <Col className='col-li4'>
        <ul>
            <h4 className='h4-li4'>Places</h4>
            <li>Munnar</li>
            <li>Wayanad</li>
            <li>Kovalam</li>
            <li>Periyar</li>
            <li>Varkala</li>
        </ul>
        </Col> 
        <Col className='col-li5'>
        <ul>
            <h4 className='h4-li5'>Specialities</h4>
            <li>Ayurveda</li>
            <li>Monsoon</li>
            <li>Houseboat</li>
            <li>Kerala Food</li>
            <li>Festivals</li>
        </ul>
        </Col> 
        <Col className='col-li6'>
        <ul>
            <h4 className='h4-li6'>Videos/Photos</h4>
            <li>Videos</li>
            <li>Photos</li>
            <li>360° Videos</li>
            <li>Royalty Free Photos</li>
            <li>Wallpapers</li>
        </ul>
        </Col> 
        </Row>
    </footer>
    
   </Container>

    </div>
  )
}

export default FooterSection