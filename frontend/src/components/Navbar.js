/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from "react";
import {Nav ,Navbar,Container,Row,Modal,Button,Form,InputGroup, FormControl, FormGroup} from 'react-bootstrap';
// import {  MDBCol} from 'mdb-react-ui-kit';
// eslint-disable-next-line no-unused-vars
import { BsFacebook, BsFillPersonFill } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
import { FiLogIn} from "react-icons/fi";
import { MdPassword } from 'react-icons/md';
import { Link } from "react-router-dom";
import '../App.css'
import {loginUser, logoutUser} from '../services/api';
import { BiCart, BiCartAlt } from 'react-icons/bi';



const Navbartask = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [username,setUsername]= useState('');
  const [password,setpass]= useState('');
    
    const handleSubmitlogin = async ()=>{
        if(username !== '' && password !== ''){
            await loginUser(username,password);
            window.location.replace('/')
        }else{
            alert("All fields are required!")
        }
        
    }
    const logout = async ()=>{
      await logoutUser();
      window.location.reload("/");
    }


  return (
    <div className="navbarstyle">
      <Navbar collapseOnSelect expand="lg"  >
      <Container >
  <Navbar.Brand >
    <Link to = "/landingPage" ><img width="200px" height=" 50px" src = "/akrigiLogo.jpg" alt='logo' className='img-responsive' /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    {!localStorage.getItem('token')?(<p>{''}</p>)
    :(<Nav.Link className="text-dark linkstyle" style={{margin:'5px',padding:'7px'}} >Welcome!{localStorage.getItem("user")}</Nav.Link>)}
    {!localStorage.getItem('token')?
    (<Nav.Link className="text-dark linkstyle " onClick={handleShow} ><FiLogIn className="mx-1" />Login</Nav.Link>):
    (<>
      <Link to="/cart" style={{margin:'5px',padding:'7px'}} className="text-dark linkstyle"><BiCart className="mx-1" />Cart</Link>
      <Link to="/myOrder" style={{margin:'5px',padding:'7px'}} className="text-dark linkstyle"><BiCartAlt className="mx-1" />Orders</Link>
      <Button onClick={()=>logout()} className = "logoutbtn">LOGOUT</Button>
    </>)}
      {/* LOGIN MODAL */}
      <Modal show={show} onHide={handleClose} className="modalback">
        <Modal.Header closeButton className="modallook modalfont">
          <Modal.Title>SignIn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modallook">
        <Form>
          <Row className="align-items-center">
              <InputGroup className="mb-4"  ><InputGroup.Text id="basic-addon1"><BsFillPersonFill/></InputGroup.Text>
                <FormControl id="inlineFormInputGroup" 
                placeholder='Email' name="Email" type ="email"
                onChange = {(e)=>setUsername(e.target.value)}
                required/>
              </InputGroup>
              <InputGroup className="mb-4" ><InputGroup.Text id="basic-addon1"><MdPassword/></InputGroup.Text>
                <FormControl id="inlineFormInputGroup" 
                placeholder='Password' name="password"
                onChange = {(e)=>setpass(e.target.value)}
                type='password' required/>
              </InputGroup>
              <FormGroup className='mb-4'>
                <Form.Check type="checkbox" label="Remember Me"/>
              </FormGroup>
          </Row>
  <div className="d-grid gap-2" style={{marginTop:"10px"}}>
  <Button variant="primary" size="lg" onClick ={()=>handleSubmitlogin()}>SignIn</Button>
  {/* <div className="text-center">
  <MDBCol  className='mb-4 mb-md-0'>
            <h5 className='text-small linkstyle mb-3'>or Signin with</h5>
              <a href="#" className="text-white mx-2 "><BsFacebook size={40} color="#3b5998" /></a>
              <a href="#" className="text-white mx-2" ><FcGoogle size={40} color="black" /></a>
              
          </MDBCol>
</div> */}
</div>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Link to = "/register">Not an existing user? Register Here!</Link>
        </Modal.Footer>
        
      </Modal>

      {/* END OF LOGIN MODAL */}  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
  
    
  )
}

export default Navbartask 