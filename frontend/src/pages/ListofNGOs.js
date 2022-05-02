import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {AiFillHome} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GiLaptop} from 'react-icons/gi';

const ListofNGOs = () => {
  return (
    <div>
        <h1 className='text-center my-4 '>List of NGOs</h1>
        <Container>
            <Row className='my-5'>
                <Col className='mt-2'>
                    <h4 style={{color:'#b95250'}}><b>Smile India</b></h4>
                    <AiFillHome className='ngoicon'/>Dr. Vikram Sarabhai Road, Behind ATIRA, Ahmedabad 380015<br/>
                    <BsFillTelephoneFill className='ngoicon'/>079-2630 8156<br/>
                    <GiLaptop className='ngoicon'/><a href='https://smileindia.com/' className='text-lowercase'>https://smileindia.com/</a>
                </Col>
                <Col className='mt-2'>
                <h4 style={{color:'#b95250'}}><b>Smile India</b></h4>
                    <AiFillHome className='ngoicon'/>Dr. Vikram Sarabhai Road, Behind ATIRA, Ahmedabad 380015<br/>
                    <BsFillTelephoneFill className='ngoicon'/>079-2630 8156<br/>
                    <GiLaptop className='ngoicon'/><a href='https://smileindia.com/' className='text-lowercase'>https://smileindia.com/</a>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col className='mt-2'>
                    <h4 style={{color:'#b95250'}}><b>Smile India</b></h4>
                    <AiFillHome className='ngoicon'/>Dr. Vikram Sarabhai Road, Behind ATIRA, Ahmedabad 380015<br/>
                    <BsFillTelephoneFill className='ngoicon'/>079-2630 8156<br/>
                    <GiLaptop className='ngoicon'/><a href='https://smileindia.com/' className='text-lowercase'>https://smileindia.com/</a>
                </Col>
                <Col className='mt-2'>
                <h4 style={{color:'#b95250'}}><b>Smile India</b></h4>
                    <AiFillHome className='ngoicon'/>Dr. Vikram Sarabhai Road, Behind ATIRA, Ahmedabad 380015<br/>
                    <BsFillTelephoneFill className='ngoicon'/>079-2630 8156<br/>
                    <GiLaptop className='ngoicon'/><a href='https://smileindia.com/' className='text-lowercase'>https://smileindia.com/</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ListofNGOs