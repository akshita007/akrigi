import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {AiFillHome} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GiLaptop} from 'react-icons/gi';
import { ngoList } from '../services/api';

const ListofNGOs = () => {
    const [ngolst,setngolst]=useState([]);
    const fetchLst = async()=>{
        const data =await ngoList();
        const ngolst=data;
        setngolst(ngolst);
    };

    useEffect(()=>{
        fetchLst();
    },[])
  return (
    <div>
        <h1 className='text-center my-4 '>List of NGOs</h1>
        <Container>
            <Row xs={1} md={3}>
                {ngolst.map((ngo)=>(
                    <Col className="m-3">
                        <h4 style={{color:'#b95250'}}><b>{ngo.username}</b></h4>
                        <AiFillHome className='ngoicon'/>{ngo.email}<br/>
                        <BsFillTelephoneFill className='ngoicon'/>{ngo.mob}<br/>
                        <GiLaptop className='ngoicon'/><a href="/" className='text-lowercase'>{ngo.site}</a>
                    </Col>
                    ))}
            </Row>
        </Container>
    </div>
  )
}

export default ListofNGOs