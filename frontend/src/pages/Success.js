import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { emptyCart } from "../Redux/CartRedux";
import { createOrder } from "../services/api";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.products;
  const [orderId, setOrderId] = useState(null);

//   console.log(data);
// console.log(data);
  const dispatch =useDispatch();
  
  useEffect(() => {
    const createOrders = async () => {
          const res = await createOrder({
            userId: localStorage.getItem("user"),
            products: cart.products.map((item) => ({
              productId: item._id,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          });
          setOrderId(res.data._id);
      };
 createOrders();
 dispatch(emptyCart())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, data]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to='/homepage'><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
    </div>
  );
};
 export default Success;