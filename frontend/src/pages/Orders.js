import { useEffect, useState } from "react";
import { getOrder, productItem} from "../services/api";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
 
const Info = styled.div`
`;

const OrderContainer = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const OrderId = styled.span``;

const OrderStatus = styled.span``;

const ProductInfo = styled.div`
  flex:3;
`;

const Product = styled.div`
  display: flex;
  margin:16px;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 3;
  display: flex;
`;


const Image = styled.img`
  width: 180px;
`; 
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductCategory = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const OrderTotal = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Orders=()=>{
    const [order,orderList]=useState([]);
    const [products,setList]=useState([]);

    const fetchOrders=async()=>{
        const data =await getOrder();
        for(var d of data) {
        const orderdItem=d.products;
        for(var o of orderdItem){
             const data=await fetchProducts(o.productId);
             setList(old=>[...old,data]);
        }
    }
    orderList(data);
};
      console.log(...products);
      const fetchProducts=async(id)=>{
            const data =await productItem(id);
            return data;
      };
      useEffect(()=>{
        fetchOrders();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
    
    return(
    <Container>
      <Wrapper>
        <Title>YOUR ORDERS</Title>
        <Info>
          {order.map((order)=>(
            <OrderContainer>
              <Top>
                <OrderId><b>Order Id:</b> {order._id}</OrderId>
                <OrderStatus><b>Order Status:</b> {order.status}</OrderStatus>
              </Top>
              <ProductInfo>
                {products.map((product)=>(
                <Product key={product._id}>
                  <ProductDetails>
                    <Image src={`/productImages/${product.images[0].filename}`} />
                      <Details>
                        <ProductName><b>Product Name:</b> {product.name}</ProductName> 
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductCategory>
                          <b>category:</b> {product.category}
                        </ProductCategory>
                      </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <Price>
                      <b>Rs. {product.price}</b>
                    </Price>
                  </PriceDetails>
                </Product>))}
              </ProductInfo>
              <Bottom>
                <OrderTotal>
                  <b>Total Amount: </b>
                </OrderTotal>
                <OrderTotal>
                  <b> Rs.{order.amount}</b>
                </OrderTotal>
              </Bottom> 
            </OrderContainer>
          ))}
        </Info>
      </Wrapper>
    </Container>
    )
}

export default Orders