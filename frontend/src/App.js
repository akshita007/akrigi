import {BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom";
import './App.css';
import Navbartask from "./components/Navbar.js";
import Footer from "./components/footer.js";
import Home from './pages/Home';

import { Animation } from './pages/Animation';
import LandingPage from "./pages/landingPage";
import Register from "./pages/Register";
import {useEffect} from "react";
import {logoutUser, verifyToken} from "./services/api";
import SellingForm from "./pages/SellForm";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import DonationForm from "./pages/DonationForm";
import NGORegisterationForm from "./pages/NGORegistrationForm";
import Donate from "./pages/DonateCover";
import MainContent from "./pages/MainContent";
import TC from "./pages/TC";
import Returnpolicy from "./pages/Returnpolicy";
import FAQs from "./pages/FAQs"
import ListofNGOs from './pages/ListofNGOs';
import SingleProd from "./pages/SingleProd";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Orders from "./pages/Orders";

function App() {
  
  useEffect(()=>{
    const checkToken = async()=>{
      if(localStorage.getItem("token")!==null){
        let data = await verifyToken();
        if(!data.success){
          await logoutUser();
          window.location.reload();
        }
      }
    }
    checkToken()
  },[])
  return (
  <Router>
    <Navbartask/>
      <Routes>
        <Route exact path="/" element = {<Animation/>}></Route>
        <Route path="/landingPage" element = {<LandingPage/>}></Route>
        <Route path="/homepage" element = {<Home/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
        <Route path="/aboutus" element = {<Aboutus/>}></Route>
        <Route path="/contactus" element = {<Contactus/>}></Route>
        <Route path="/sellForm" element={(localStorage.getItem("token")!==null)?(<SellingForm/>):(<Navigate reload to="/register"/>)}></Route>
        <Route path="/donate" element = {<Donate/>}></Route>
        <Route path="/donateForm" element = {localStorage.getItem("token")!==null?<DonationForm/>:(<Navigate reload to="/register"/>)}></Route>
        <Route path="/registerngo" element = {<NGORegisterationForm/>}></Route>
        <Route path="/termsandcondition" element = {<TC/>}></Route>
        <Route path="/listofNGOs" element={<ListofNGOs/>}></Route>
        <Route path="/returnpolicy" element={<Returnpolicy/>}></Route>
        <Route path="/success" element= {(localStorage.getItem("token")!==null)?<Success/>:(<Navigate reload to="/homepage"/>)}></Route>
        <Route path="/MainContent/:category" element= {<MainContent/>}></Route>
        <Route path="/MainContent/:price" element= {<MainContent/>}></Route>
        <Route path="/product/:id" element={<SingleProd/>}></Route>        
        <Route path="/faqs" element={<FAQs/>}></Route>
        <Route path="/cart" element={(localStorage.getItem("token")!==null)?<Cart/>:(<Navigate reload to="/homepage"/>)}></Route>
        <Route path="/myOrder" element={(localStorage.getItem("token")!==null)?<Orders/>:(<Navigate reload to="/homepage"/>)}></Route>
      </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
