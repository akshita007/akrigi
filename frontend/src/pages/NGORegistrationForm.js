/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from "react";
import {Button, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {registerNgo} from "../services/api";


const NGORegisterationForm = ()=>{
    const [username,setusername]= useState('');
    const [mob,setMob]= useState('');
    const [site,setSite]= useState('');
    const [email,setemail]= useState('');
    const [password,setpass]= useState('');
    const [cPassword,setCpass]= useState('');

//const [data,setData]=useState({});

const handleSubmitRegister = async ()=>{
    // console.log(data)
    if(username !== '' && email !=='' && password!==""  && mob!=="" && site!==""){
        if(password===cPassword){
            await registerNgo({username,email,site,mob,password});
            window.location.replace("/landingPage")
        }else{
            alert("Password and confirm password are not same!")
        }
        
    }else{
        alert("All fields are required")
    }
    
}
    return(
        <div>
            <Form>
                <Container style={{
                    width:"500px",
                    marginBottom:"50px"
                }}>
                <h1 style={{
                    textAlign:"center",
                    margin:"18px",
                    padding:"10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight:"bold",
                    fontSize:"2.5rem",
                    color:"brown"}}>NGO Registration</h1>
                    <Row className="align-items-center">
                        
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Username'
                                        type ='email'
                                        name='username'
                                        onChange = {(e)=>setusername(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Mobile number'
                                        type ='tel' 
                                        name='mob'
                                        onChange = {(e)=>setMob(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='NGO website'
                                        type ='text'
                                        name='site'
                                        onChange = {(e)=>setSite(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Email'
                                        name='email'
                                        onChange = {(e)=>setemail(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Password'
                                        name='password'
                                        onChange = {(e)=>setpass(e.target.value)} 
                                        type='password' required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup"
                                        placeholder='Confirm Password'
                                        name='cPassword'
                                        onChange = {(e)=>setCpass(e.target.value)}
                                        type='password' required/>
                        </InputGroup> 
                    </Row>
                    <div className="d-grid gap-2" style={{marginTop:"10px"}}>
                        <Button variant="primary" size="lg"  onClick = {()=>handleSubmitRegister()}>Register</Button>
                    </div>
                </Container>
            </Form>
        </div>
    )
}

export default NGORegisterationForm;