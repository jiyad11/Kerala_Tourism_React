import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Planyourtrip.css'

function Planyourtrip() {
  const tripIcons = [
    {name:'where to stay',image:'https://www.keralatourism.org/images/kt/tr-icon-hotel.png'},
    {name:'E Brochures',image:'https://www.keralatourism.org/images/kt/tr-icon-brochure.png'},
    {name:'Visa on Arrival',image:'https://www.keralatourism.org/images/kt/tr-icon-visa.png'},
    {name:'Travel Info',image:'https://www.keralatourism.org/images/kt/tr-icon-info.png'},
    {name:'Travel Care',image:'https://www.keralatourism.org/images/kt/tr-icon-messageboard.png'},
    {name:'Toilets',image:'https://www.keralatourism.org/images/kt/tr-icon-toilets.png'},
    {name:'E Newsletter',image:'https://www.keralatourism.org/images/kt/tr-icon-newsletter.png'},
    {name:'Yathri Nivas',image:'https://www.keralatourism.org/images/yatri-logo.png'}
  ]
  return (
    <div>
        <h2 className='heading-2'>plan your trip</h2>
        <Row className='row-1'>
          {tripIcons.map((i)=>{
            return(
             
              // <Col>
                 
              // <div className='divback-icon'>
              // <img className='img-icons' src={i.image}/>
              // <footer className='footer-1'>{i.name}</footer>
              // </div>
              
              // </Col>
              <Col lg={1} md={2} sm={4} xs={4} className='text-center'>
                <div className='divback-icon'>
                  <img className='img-icons' src={i.image} />
                  <footer className='footer-1'>{i.name}</footer>
                </div>
              </Col>
             
            )
          })}
        </Row>
        <Container>
        
        {/* <Row>
          {tripIcons.slice(0, tripIcons.length - 2).map((i) => {
            return (
              <Col lg={2} md={4} sm={4} xs={4} className='text-center'>
                <div className='divback-icon'>
                  <img className='img-icons' src={i.image}  />
                  <footer className='footer-1'>{i.name}</footer>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className='justify-content-center'>
          {tripIcons.slice(tripIcons.length - 2).map((i) => {
            return (
              <Col lg={2} md={4} sm={4} xs={4} className='text-center'>
                <div className='divback-icon'>
                  <img className='img-icons' src={i.image}/>
                  <footer className='footer-1'>{i.name}</footer>
                </div>
              </Col>
            );
          })}
        </Row> */}
        <div id='div-search' className='text-center'>
        <label className='label-1'>
          search for accomodation
        </label>
        <input className='input-1' placeholder='Enter Keyword' type='text' />
        <button className='btn-search'>search</button>
        </div>
      </Container>
        
    </div>
  )
}

export default Planyourtrip