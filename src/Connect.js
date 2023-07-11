import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter , FaWhatsapp, FaYoutube} from 'react-icons/fa'
import './Connect.css'

function Connect() {
  return (
    <div className='div-connect'>
        <h3 className='h3-connect'>Connect with us</h3>
        <Row>
            <Col>
                <ul className='ul-1'>
                    <li className='li-1'><FaYoutube size={40}/></li>
                    <li className='li-2'><FaFacebook size={40}/></li>
                    <li className='li-3'><FaTwitter size={40}/></li>
                    <li className='li-4'><FaInstagram size={40}/></li>
                    <li className='li-5'><FaWhatsapp size={40}/></li>
                    <li className='li-6'><FaPinterest size={40}/></li>
                    <li className='li-7'><FaLinkedin size={40}/></li>

                </ul>
                    
            </Col>
        </Row>
        <h3 className='h3-footer'><span style={{color: 'skyblue'}}>#KeralaTourism</span> is Live & Trending. Don't forget to follow & share your Kerala experience
</h3>
    </div>
  )
}

export default Connect