import {Link} from "react-router-dom";
import "../App.css";

const LandingPage = ()=>{
    return(
        <div className = "containerlandingPage">
          <Link to = "/sellForm" className = "links">
            <div className = "box">
              <img src = "/images/boxImageSell.jpg" alt = "Sell" className = "boxImage"/>
                <span className="boxText">Sell</span>
            </div>
          </Link>
          <Link to = "/homepage" className = "links">
            <div className = "box">
              <img src="/images/boxImagePurchase.jpg" alt = "Purchase" className = "boxImage"/>
              <span className="boxText">Purchase</span>
            </div>
          </Link>
          <Link to = "/donate" className = "links">
            <div className = "box">
              <img src="/images/boxImageDonate.jpg" alt = "Donate" className = "boxImage"/>
              <span className="boxText">Donate</span>
            </div>
          </Link>
        </div>
        
    )
}

export default LandingPage;