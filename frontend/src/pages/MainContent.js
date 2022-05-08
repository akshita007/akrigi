import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { productList } from "../services/api";
import { Link } from "react-router-dom";
 
 const MainContent = () => {
   const [products,setProducts]=useState([]);

   const fetchProducts=async()=>{
     const data =await productList();
     const products=data;
     setProducts(products);
   };

  useEffect(()=>{
    fetchProducts();
  },[]);

   return(
       
       <Container className="my-5">
           <Row xs={1} md={4} >
               {products.map((item) =>(
                    <Col className="d-flex justify-content-center mb-3">
                      <Link to={`/product/${item._id}`} style={{textDecoration:"none",color:"black"}}>
                        <Card style={{ width: '20rem',height:'500px'}} key={item.id} >
                        <Card.Img variant="top" src={`/productImages/${item.images[0].filename}`} style={{height:'310px',width:'100%'}}/>
                        <Card.Body className="product-style">
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Subtitle className="p-des mb-2">{item.desc}</Card.Subtitle>
                          <p >Rs.{item.price}</p>
                          <Button variant="primary">
                            <Link to="/cart" style={{textDecoration:"none",color:"white"}}>Add to Cart</Link>
                          </Button>
                        </Card.Body>
                        </Card>                    
                     </Link>
                    </Col>
               ))}
           </Row>
       </Container>
   )
 }
 
 export default MainContent