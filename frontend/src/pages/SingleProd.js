import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { productItem } from '../services/api';
import { addProduct } from "../Redux/CartRedux";
import { useDispatch } from "react-redux";

const SingleProd = () => {
    const [item , setItem] = useState({
        _id:'',
        name:'',
        category:'',
        desc:'',
        images:[],
        price:0,
        seller:'',
    });
    const fetchPost = async ()=>{
        let data = await productItem(id);
        console.log(data.seller);
        setItem(data);
    }

    const dispatch = useDispatch();

    const {id}=useParams();

    useEffect(()=>{ 
        fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const handleClick = () => {
        if(localStorage.getItem("token")!==null){
            dispatch(
              addProduct({...item})
            );
            alert("Product Added!");
            window.location.replace("/cart");
    }else{
        alert("Login First!");
    }
    };
  return (
    
    <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                        <Carousel>
                        {item.images.map((img)=>(
                            <Carousel.Item>
                                <div className = "slide" style={{backgroundColor:"#F2EFEA"}}>
                                    <img src ={`/productImages/${img.filename}`} alt="slide" width="650px" height="500px"/>
                                </div>      
                            </Carousel.Item>))}
                        </Carousel>
                    </div>
                    </div>
                    <div className="mt-5 col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{item.category}</span>
                                <h5 className="text-uppercase">{item.name}</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">Rs.{item.price}</span>
                                    <div className="ml-2"> <small className="dis-price">{item.price}</small> <span>40% OFF</span> </div>
                                </div>
                                <h5 className="text-uppercase mt-3">Product Description: </h5>
                                <p className="about">{item.desc}</p>
                            </div>
                            <div className='mt-4'>
                            <h5 className="text-uppercase">Seller Info:</h5>
                            <p className="about">Name: {item.seller.firstName} {item.seller.lastName}</p>
                            <p className="about text-lowercase">Email: {item.seller.email} </p>
                            <p className="about">Posted On: {new Date(item.seller.createdAt).getDate()+"/"+new Date(item.seller.createdAt).getMonth()+"/"+new Date(item.seller.createdAt).getFullYear()} </p>
                            </div>
                            <div className="cart mt-4 align-items-center">
                                <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={handleClick}>Add to cart</button>
                            <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default SingleProd;