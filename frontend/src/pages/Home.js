import React from 'react'
import Slider from '../components/carousel'
import { Container,Row,Col } from 'react-bootstrap'
import Link from "react-router-dom"
import {Button,Image} from "react-bootstrap"
const Home = () => {
    return(
       <div>
            <Container>
                <Row className="m-4">
                <center><h3>What are you shopping of today?</h3></center>
                </Row>
                <Row className="m-2">
                   <Col className='d-flex justify-content-center'>
                    <Link to="/MainContent" className="links"><Image src='https://us.123rf.com/450wm/repinanatoly/repinanatoly1608/repinanatoly160800032/60888930-beautiful-face-of-young-woman-with-clean-fresh-skin-close-up-on-light-grey-background-beauty-portrai.jpg?ver=6' roundedCircle  height={120} width={120} />
                    <p className='d-flex justify-content-center mt-2 text-dark'>Women</p></Link>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <a href=''><Image src='https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859' roundedCircle  height={120} width={120} />
                    <p className='d-flex justify-content-center mt-2 text-dark'>Men</p></a>
                        
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <a href=''><Image src='https://static.onecms.io/wp-content/uploads/sites/24/2019/01/GettyImages-892959344.jpg' roundedCircle  height={120} width={120} />
                    <p className='d-flex justify-content-center mt-2 text-dark'>Kids</p></a>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <a href=''><Image src=' https://www.khattemeethedesires.com/wp-content/uploads/fashion-accessories-1-e1620388327280.jpg' roundedCircle  height={120} width={120} />
                    <p className='d-flex justify-content-center mt-2 text-dark'>Accessories</p></a>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                    <a href=''><Image src='https://rukminim1.flixcart.com/image/714/857/hand-messenger-bag/n/b/w/1252blue-enigma-hand-held-bag-signature-no-2-original-imae3uhzsfbhaq2x.jpeg?q=50'  roundedCircle  height={120} width={120} />
                    <p className='d-flex justify-content-center mt-2 text-dark'>Bags</p></a>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <a href=''><Image src=' https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?k=20&m=1304915362&s=170667a&w=0&h=CkAZZSAvlHh-WJno1Mj0NkwHexBT30cQGmTNO5j8M2Q=' roundedCircle  height={120} width={120} />
                        <p className='d-flex justify-content-center mt-2 text-dark'>Books</p></a>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <a href=''><Image src=' https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' roundedCircle  height={120} width={120} />
                        <p className='d-flex justify-content-center mt-2 text-dark'>Shoes</p></a>
                    </Col>
                </Row>
            </Container>
            <Slider/>
        <Container fluid className='my-5'>
            <div className='m-2'>
            <Row className='mt-5 mb-2'>
                <div className='headingStyleLine'>
                    <h3> <span className='headingStyle'>Endless Discovery, Infinite Thrills</span> </h3>
                </div>
                
            </Row>
                <Row className='mt-5'>
                    <Col sm className='d-flex  mt-3'>
                        <div style={{backgroundColor: "rgb(228,203,228)"}} className='m-.25 rounded'>
                            <a href='' className='text-black' >
                            
                                <div className='belowSliderInner'>
                                <h2>Get Styled Like a Celeb</h2><br></br>
                                <p>Karla took over our Thrift the Look tool, shop her spring outfit</p>
                                <h6 className='text-uppercase text-decoration-underline'><b >take me to the shop</b></h6></div>
                                <div ><img alt="Get Styled Like a Cele" className='imgcontain' src="https://cf-assets-clover-app.thredup.com/uploads/2022-03-22/EC-image_merchBlock%20%281%29-c4001b5a.png"  /></div>
                            
                            </a>
                        </div>
                    </Col >
                    <Col  sm  className='d-flex mt-3'>
                        <div style={{backgroundColor:"rgb(255, 197, 222)"}} className=' m-.25 rounded'>
                            <a href='' className='text-black'>
                            
                                <div className='belowSliderInner'>
                                <h2>Dream Jeans</h2><br></br>
                                <p>Bye-Bye soft pants. Comfy denim is back in season</p>
                                <h6 className='text-uppercase text-decoration-underline'><b >Shop denim</b></h6></div>
                                <div ><img style={{paddingTop: 38.5}} alt="Dream Jeans" className='imgcontain' src="https://cf-assets-clover-app.thredup.com/uploads/2022-03-29/merchBlock-jeans-6ee4f23a.png"  /></div>
                            
                            </a>
                        </div>
                    </Col>
                    <Col sm className='d-flex  mt-3'>
                        <div style={{backgroundColor:"rgb(255, 229, 177)"}} className='m-.25 rounded'>
                            <a href='' className='text-black'>
                            
                                <div className='belowSliderInner'>
                                <h2>New with Tags</h2><br></br>
                                <p>Brand new styles, secondhand prices</p>
                                <h6 className='text-uppercase text-decoration-underline'><b >Shop new</b></h6></div>
                                <div className='spacebet'><img  alt="New with Tags" className='imgcontain ' src="https://cf-assets-clover-app.thredup.com/uploads/2022-03-21/merchBlock-NWT-5a5010e1.png"  /></div>
                                
                            </a>
                        </div>
                    </Col>

                    
                </Row>
            </div>
        </Container>
        <Container className='my-5'>
                <Container fluid> 
                    <Row className='mb-2'>
                        <div className='headingStyleLine'>
                            <h3> <span className='headingStyle'>Curated Collection</span> </h3>
                        </div>
                    </Row>
                </Container>
            <Row className='mt-5'>
                <Col  className='curated'>
                    <a href=''><div><img className='imgcontain' src='https://www.kiabza.com/media/wysiwyg/mob/new-with-tags1.png.mst.webp' /></div> </a>
                </Col>
                <Col className='curated'>
                <a href=''><div><img className='imgcontain' src='https://www.kiabza.com/media/wysiwyg/mob/new-without-tags1.png.mst.webp' /></div></a>
                </Col>
                <Col className='curated'>
                <a href=''><div><img className='imgcontain' src='	https://www.kiabza.com/media/wysiwyg/mob/nearly-new1.png.mst.webp' /></div></a>
                </Col>
                <Col className='curated'>
                <a href=''><div><img className='imgcontain' src='https://www.kiabza.com/media/wysiwyg/mob/worn-a-few-times1.png.mst.webp' /></div></a>
                </Col>
            </Row>
        </Container>
           
           <Container fluid className='my-5'>
               <Container fluid> 
                    <Row className='mb-2'>
                        <div className='headingStyleLine'>
                            <h3> <span className='headingStyle'>Shop by Deals</span> </h3>
                        </div>
                    </Row>
                </Container>
           
               <Row className='mt-5'>
                   <Col sm className='text-center my-2 d-flex justify-content-center'>
                       <a href=''>
                           <div className="circle rounded-circle text-center text-white fs-5 ">
                              Under <p className='fw-bold' style={{fontSize: "50px"}} >₹199</p>
                            </div>
                       </a>
                   </Col>
                   <Col sm className='text-center my-2 d-flex justify-content-center'>
                       <a href=''>
                           <div className="circle rounded-circle text-center text-white fs-5 ">
                              Under <p className='fw-bold' style={{fontSize: "50px"}} >₹499</p>
                            </div>
                       </a>
                   </Col>
                   <Col sm className='text-center my-2 d-flex justify-content-center'>
                       <a href=''>
                           <div className="circle rounded-circle text-center text-white fs-5 ">
                              Under <p className='fw-bold' style={{fontSize: "50px"}} >₹799</p>
                            </div>
                       </a>
                   </Col>
                   <Col sm className='text-center my-2 d-flex justify-content-center' >
                       <a href=''>
                           <div className="circle rounded-circle text-center text-white fs-5 ">
                              Under <p className='fw-bold' style={{fontSize: "50px"}} >₹999</p>
                            </div>
                       </a>
                   </Col>
                   
               </Row>
           </Container>
           <Container fluid className='my-5 thrill'>
               <div>
                   <Row>
                       <div className='pt-5 pb-3 text-center'>
                            <h3>All Thrills, Zero Guilt</h3>   
                        </div>
                   </Row>
               </div>
               <div>
                   <Row>
                       <Col sm>
                            
                                <div className='thrillIcon d-flex justify-content-center'>
                                    <img className='imgcontain' src='https://cf-assets-clover-app.thredup.com/uploads/2021-09-16/returns-6f261e0b.png' alt='easy return' />
                                </div>
                                <div className='text-center mt-4'>
                                    <h3 style={{color:"#9c3444"}}>Easy Returns</h3>
                                    <p className='mt-2'>Thrift without the risk. Enjoy hassle-free returns with your order</p>
                                </div>
                            
                       </Col>
                       <Col sm >
                            
                                <div className='thrillIcon d-flex justify-content-center'>
                                    <img className='imgcontain' src='https://cf-assets-clover-app.thredup.com/uploads/2021-09-28/dress-9b253a2a.png' alt='Quality Finds' />
                                </div>
                                <div className='text-center mt-4'>
                                    <h3 style={{color:"#9c3444"}}>Quality Finds</h3>
                                    <p className='mt-2'>Each item undergoes a 12-point inspection to meet our high quality standards</p>
                                </div>
                            
                       </Col>
                       <Col sm>
                            
                                <div className='thrillIcon d-flex justify-content-center'>
                                    <img className='imgcontain ' src='https://cf-assets-clover-app.thredup.com/uploads/2021-09-28/sustainability%20triangle-823b3eae.png' alt='Shop Sustainably' />
                                </div>
                                <div className='text-center mt-4'>
                                    <h3 style={{color:"#9c3444"}}>Shop Sustainably </h3>
                                    <p className='mt-2'>Choosing a used item over new reduces your carbon footprint by 82%</p>
                                </div>
                            
                       </Col>
                       
                   </Row>
               </div>
           </Container>

           <Container>
                <Container fluid> 
                    <Row className='mb-2'>
                        <div className='headingStyleLine'>
                            <h3> <span className='headingStyle'>All Ready to Ship</span> </h3>
                        </div>
                    </Row>
                </Container>
                <Row className='mt-5  '>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Button className='text-black border border-dark rounded bg-transparent' size='lg' style={{width: "230px"}}>Shop Trending</Button>
                    </Col>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Button className='text-black border border-dark rounded bg-transparent ' size='lg' style={{width: "230px"}}>Shop Shoes</Button>
                    </Col>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Button className='text-black border border-dark rounded bg-transparent ' size='lg' style={{width: "230px"}}>Shop Brand</Button>
                    </Col>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Button className='text-black border border-dark rounded bg-transparent ' size='lg' style={{width: "230px"}}>Shop Sale</Button>
                    </Col>
                   
                </Row>

           </Container>
           
        </div>
       
    )
    
}

export default Home;
