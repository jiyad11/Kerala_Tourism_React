import React from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap'
import './Cardcarousel.css';

function Cardcarousel() {
  
  const images = [
    {image:'https://www.keralatourism.org/images/homecontentimage/desktop/oppana.jpg'},
    {image:'https://www.keralatourism.org/images/homecontentimage/desktop/wayanadu-churam.jpg'},
    {image:'https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda3.jpg'},
    {image:'https://www.keralatourism.org/images/homecontentimage/desktop/valiyaparamba1.jpg'},
    {image:'https://www.keralatourism.org/images/homecontentimage/desktop/akkulam.jpg'},
    {image:'https://www.keralatourism.org/images/homecontentimage/desktop/en_uru.jpg'}
  ]
  const arrow = '>'
  return (
    <div>
      <Container>
      
      <h2 className='text-center'>EXPERIENCE KERALA</h2>
      <Container>
        
          <Row>
            {images.map((i)=>{
              return(
                <Col lg={2} md={4}>
           
            
            <Card className='Tcard-img'>
            
              <Card.Img  src={i.image}/>
              <div className='overlay'>
                <div className='overlay-text'>hi hiw are youe</div>
              </div>
              </Card>
    
                </Col>
            
              )
            }
            )}
           
            </Row>
            </Container>
            <Button  className='cardbutton'>FIND MORE EXPERIENCE {arrow}</Button>
            
            
              
              
            
       
            </Container>
    </div>
  )
}

export default Cardcarousel