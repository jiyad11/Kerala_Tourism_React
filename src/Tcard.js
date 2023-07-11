import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Tcard.css'

function Tcard() {
    const cards = [
        {title:'Ramakkalmedu',image:'https://www.keralatourism.org/images/homecontentimage/desktop/ramakalmedu-2.jpg'},
        {title:'Peppara Wildlife Sanctuary',image:'https://www.keralatourism.org/images/homecontentimage/desktop/peppara-1.jpg'},
        {title:'Kizhunna Beach',image:'https://www.keralatourism.org/images/homecontentimage/desktop/kizhunna_beach-2.jpg'},
        {title:'Madhur Temple',image:'https://www.keralatourism.org/images/homecontentimage/desktop/madhur-3.jpg'},
        {title:'Valapattanam',image:'https://www.keralatourism.org/images/homecontentimage/desktop/valapattanam-1.jpg'},
        {title:'Banasura Sagar Dam',image:'https://www.keralatourism.org/images/homecontentimage/desktop/banasura-3.jpg'},
        {title:'Bekkal Fort',image:'https://www.keralatourism.org/images/homecontentimage/desktop/bekal-fort-22.jpg'},
        {title:'Vembanad Kayal',image:'https://www.keralatourism.org/images/homecontentimage/desktop/vembanadu-lake-3.jpg'},
        
    ]
    const arrow = '>'
  return (
    
    <div >
      <section className='divsize'>
      <h2 className='H'>TOP DESTINATIONS</h2>
      <Container>
      
    <Row>
    
            {cards.map((i)=>{
              return(
                <Col lg={3} md={6}>
           
            
            <Card className='Tcard'>
            
              <Card.Img className='t-img' src={i.image}/>
              <Card.Title className='T-title'>{i.title}</Card.Title>
              </Card>
             
            
            </Col>
              )
            }
            )}
            </Row>
            
            </Container>
            <Button className='Tbutton'>EXPLORE OUR DESTINATIONS {arrow} </Button>
            </section>
            </div>
            
  )
}

export default Tcard