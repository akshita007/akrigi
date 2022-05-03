import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

const Donate = () => {
  return (
    <div>
       <Container fluid  className='donate '>
            <div className='text-center donateText' >
            <p className='fw-bold donateUpperheading' >Let's Spread Happiness</p>
            <h5 className='text-white mt-2'>We Deliver your Donations to the Right Place</h5>
            <Link to="/donateform">
            <Button  className='rounded-pill border border-dark mt-3 bookButton'  size='lg'  >Donate ⇥</Button> 
            </Link>
            
            </div>
       </Container>
    </div>
  )
}

export default Donate