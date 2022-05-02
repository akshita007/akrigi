import React from "react";
import product_card from "./products";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
 
 const MainContent = () => {
   console.log(product_card);
   const listItems = product_card.map((item) =>
   <Col className="d-flex justify-content-center mb-3">
        
   <Card style={{ width: '15rem'}} key={item.id} >
  <Card.Img variant="top" src={item.thumb} style={{height:'310px'}}/>
  <Card.Body className="product-style">
    <Card.Title>{item.product_name}</Card.Title>
    <Card.Subtitle className="p-des mb-2">{item.description}</Card.Subtitle>
    <p >{item.currency}{item.price}</p>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
   </Col>     
   );
   return(
       
       <Container className="my-5">
           <Row xs={1} md={4} >
               {listItems}
           </Row>
       </Container>
   )
 }
 
 export default MainContent