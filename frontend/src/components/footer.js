/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import "../App.css"
import { BsFacebook,BsPinterest } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <MDBFooter className='text-white text-center text-lg-left footerbg' >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase linkstyle mb-3'>Connect With Us</h5>
              <a href="#" className="text-white mx-2"><BsFacebook size={40} /></a>
              <a href="#" className="text-white mx-2" ><AiFillInstagram size={40}/></a>
              <a href="#" className="text-white mx-2"><BsPinterest size={40}/></a>
              <a href="#" className="text-white"><AiFillTwitterCircle size={45} /></a>
              
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase linkstyle mb-3'>Shop Department</h5>

            <ul className='list-unstyled mb-0 linkstyle'>
              <li>
              <Link to="/MainContent/Women" className='text-white'>
                  Women
                </Link>
              </li>
              <li>
              <Link to="/MainContent/Men" className='text-white'>
                  Men
                </Link>
              </li>
              <li>
              <Link to="/MainContent/Kids" className='text-white'>
                  kids
                </Link>
              </li>
              <li>
              <Link to="/MainContent/Accessories" className='text-white'>
                  Accessories
                </Link>
              </li>
              <li>
              <Link to="/MainContent/Bags" className='text-white'>
                  Bags
                </Link>
              </li>
              <li>
              <Link to="/MainContent/Books" className='text-white'>
                  Books
                </Link>
              </li>
              <li>
              <Link to="/MainContent/Shoes" className='text-white'>
                  Shoes
                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 linkstyle mb-3'>The Company</h5>
            
            <ul className='list-unstyled'>
              <li>
                <Link to="/aboutus" className="links" style={{color:"white"}}>
                  About Us
                  </Link>
              </li>
              <li>
                <Link to="/termsandcondition"  style={{color:"white"}}>
                  Terms and Condition
                </Link>
              </li>
              <li>
              <Link to="/faqs"  style={{color:"white"}}>
                  FAQs
                </Link>
              </li>
              <li>
              <Link to="/returnpolicy"  style={{color:"white"}}>
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="links"  style={{color:"white"}}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            
            <MDBRow >
            <h5 className='text-uppercase linkstyle'>sell on akrigi</h5>
            <Link to="/sellform" className="links"  style={{color:"white"}}>
                  Selling form
                </Link>
            </MDBRow>
            <MDBRow className="my-2">
            <h5 className='text-uppercase linkstyle my-2'>Donate on akrigi</h5>
              <Link to="/donate" className="links"  style={{color:"white"}}>Donate</Link>
              <Link to="/registerngo" className="links"  style={{color:"white"}}>Register NGO</Link>
              <Link to="/listofNGOs" className="links"  style={{color:"white"}}>List of NGOs</Link>
            </MDBRow>
              
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          Akrigi.com
        </a>
      </div>
    </MDBFooter>
 
    )
}

export default Footer

