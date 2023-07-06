import React from 'react'
import { Button, Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap'
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
      <h2 className='text-center'>EXPERIENCE KERALA</h2>
        
          <Row>
            {images.map((i)=>{
              return(
                <Col>
           
            
            <Card className='Tcard-img'>
            
              <Card.Img src={i.image}/>
              </Card>
              
             
            
            </Col>
              )
            }
            )}
            </Row>
            
              <Button  className='cardbutton'>FIND MORE EXPERIENCE {arrow}</Button>
              
            
       
        
    </div>
  )
}

export default Cardcarousel