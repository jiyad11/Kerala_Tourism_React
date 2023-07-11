import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Photogallery.css'
import { HiOutlinePhoto, HiOutlinePhotograph } from 'react-icons/hi'

function PhotoGallery() {
const gallery = [
    {name:'beaches',image:'https://www.keralatourism.org/images/homecontentimage/desktop/beach.jpg'},
    {name:'kerala panorama',image:'https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg'},
    {name:'pilgrim centers',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-3.jpg'},
    {name:'artforms',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-4.jpg'},
    {name:'festivals',image:'https://www.keralatourism.org/images/homecontentimage/desktop/festivals-1.jpg'},
    {name:'place of interest',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-6.jpg'},
    {name:'waterfalls',image:'https://www.keralatourism.org/images/homecontentimage/desktop/waterfall.jpg'},
    {name:'monuments',image:'https://www.keralatourism.org/images/homecontentimage/desktop/places-of-interest.jpg'},
    {name:'wildlife',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-9.jpg'},
    {name:'hills',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-10.jpg'},
    {name:'ayurveda',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-11.jpg'},
    {name:'backwaters',image:'https://www.keralatourism.org/images/homecontentimage/desktop/img-12.jpg'},
    
]
  return (
    <div className='text-center'>
        <h3 className='heading-h3'>Explore photo gallery</h3>
        
        <Row>
            {gallery.map((i)=>{
                return(
                    <Col lg={2} md={4} sm={4}>
                    <Card className='c-card'>
                        <Card.Img className='c-image' src={i.image} />
                        <Card.Footer className='card-f'>{i.name}</Card.Footer>
                    </Card>
                    </Col>
                )
            })}
            <Col>
            
            </Col>
        </Row>
       <Button className='btn-gallery'>Browse our gallery <HiOutlinePhotograph/> </Button>
    </div>
  )
}

export default PhotoGallery