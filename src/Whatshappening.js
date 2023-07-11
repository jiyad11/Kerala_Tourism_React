import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import './Whatshappening.css'


function Whatshappening() {
    const images = [
        {image:'https://www.keralatourism.org/images/festivals/home-thumb/20171222121145_317_1.jpg',name:'Thiruvonam'},
        {image:'https://www.keralatourism.org/images/festivals/home-thumb/20160628064542_365_1.jpg',name:'Aanayoottu at vadakkumnatha temple'},
        {image:'https://www.keralatourism.org/images/festivals/home-thumb/20181108075932_170_1.jpg',name:'njangattiri aanayoottu'},
        {image:'https://www.keralatourism.org/images/festivals/home-thumb/20170710102310_123_1.jpg',name:'Athachamayam'},
        {image:'https://www.keralatourism.org/images/festivals/home-thumb/20131104154213_40_1.jpg',name:'pulikali'},
        {image:'https://www.keralatourism.org/images/festivals/home-thumb/20131031143502_34_1.jpg',name:'aranmula boat race'},
    ]
  return (
    <div className='divback'>
       
        <Container>
        
            <Row>
            <h3 className='head3'>What's happening</h3>
                {images.map((i)=>{
                    return(
                        <Col lg={2} md={4}>
                        
                        
                        <Card className='cardgrp'>
                            <Card.Img className='card-img' src={i.image}/>
                            <Card.Footer className='footer'>{i.name}</Card.Footer>
                            </Card>
                       
                        
                        
                        </Col>
                    )
                })}
            </Row>
            <Button className='btn-fest'>More Festival & Events</Button>
        </Container>
    </div>
  )
}

export default Whatshappening