import React from 'react'
import './ImageBackground.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function ImageBackground() {
    const images = [
        {name:'Kayaking',image:'https://www.keralatourism.org/images/homecontentimage/desktop/kayakking2.jpg'},
        {name:'Rock Climbing',image:'https://www.keralatourism.org/images/homecontentimage/desktop/rock_climbing.jpg'},
        {name:'Boating',image:'https://www.keralatourism.org/images/homecontentimage/desktop/boating.jpg'},
        {name:'Nature Walk',image:'https://www.keralatourism.org/images/homecontentimage/desktop/natural_walk2.jpg'},
        {name:'Surfing',image:'https://www.keralatourism.org/images/homecontentimage/desktop/surfing1.jpg'},
        {name:'Parasailing',image:'https://www.keralatourism.org/images/homecontentimage/desktop/parasailing1.jpg'},
    ]
  return (
    <div >
        <section className='imgback'>
<h1 className='heading'>Things to do in Kerala</h1>
<Container>
<Row>
    {images.map((i)=>{
        return(
            <Col lg={4} md={4}>
            <Card className='Imgcard'>
                <Card.Img className='cardimg' src={i.image} />
                <Card.Title className='cardT'>{i.name}</Card.Title>
            </Card>
            </Col>
        )
    })}
</Row>
</Container>
<Button className='Btn-activity'>FIND MORE ACTIVITIES</Button>
</section>
<section>
    <h1 className='H'>What's New</h1>
    <p className='P'>Domestic Trade Fairs 2023-24 | Register Now <span className='sp'>International Trade Fair | May 2023</span></p>
    <Button className='btn-news'>More News</Button>
</section>
    </div>
  )
}

export default ImageBackground