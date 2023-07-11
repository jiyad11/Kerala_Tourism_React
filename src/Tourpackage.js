import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Tourpackage.css'

function Tourpackage() {
    const imagesTour = [
        {place:'Entire Kerala',para:"A Journey Through God's Own Country",images:'https://www.keralatourism.org/images/homecontentimage/entire-kerala.jpg',price:'INR 2000 to 118,000'},
        {place:'Central Kerala',para:"Trip to the soul of Kerala",images:'https://www.keralatourism.org/images/homecontentimage/central-kerala.jpg',price:'INR 1000 to 116,000'},
        {place:'Backwater',para:"Through the Streches of Emerald",images:'https://www.keralatourism.org/images/homecontentimage/backwater.jpg',price:'INR 1000 to 60,000'},
        {place:'South Kerala',para:"A Journey to Remember",images:'https://www.keralatourism.org/images/homecontentimage/south-kerala.jpg',price:'INR 1000 to 175,000'},
        {place:'Hill Station',para:"Explore the lush mist-clad hill stations",images:'https://www.keralatourism.org/images/homecontentimage/hill-station.jpg',price:'INR 2000 to 46,000'},
        {place:'Honeymoon',para:"Celebrate your Romance",images:'https://www.keralatourism.org/images/homecontentimage/honeymoon.jpg',price:'INR 2000 to 150,000'},
    ]
  return (
    <div className='divback-2'>
       <div className='div-heading'>
            <h1>Tour Packages</h1>
            <p className='p-head'>STOP. Breathe. Slow down. Embrace life. It’s time for Kerala!<br/>
            Plan your trip with amazing offers and packages.</p>
        </div>
         <Container>
            <Row>
            {imagesTour.map((i)=>{
                return(
                    <Col lg={4} md={6}>
                    <Card id='tour-card'>
                        <Card.Img src={i.images} />
                        <Card.Title className='card-t'>{i.place}</Card.Title>
                        <Card.Text className='card-text'>{i.para}</Card.Text>
                        {/* <Card.Footer className='card-f'>{i.price}</Card.Footer> */}
                        <span className='sp2'>{i.price}</span>
                    </Card>
                    </Col>
                )
            })}
            </Row>
           
         </Container>
         <div className='btn-pos'>
         <Button id='btn-findmore' className='btn rounded-0'>Find more packages</Button>
         </div>
    </div>
  )
}

export default Tourpackage