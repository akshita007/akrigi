import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {Link} from "react-router-dom"

const Returnpolicy = () => {
  return (
    <div>
        <Container>
            <center><h1 className='my-5'>Cancellation, Exchange & Returns</h1></center>
            <div  className=' px-5 justifycontent textreponsive'>
                
                    <p>Cancellation until item shipment: You may cancel an order until the item has been shipped. To cancel your order click on the 'Contact Support' or 'Help' link on our website. Once you arrive at the page, choose the issue 'Cancellation & Refund' and fill in your reasons for your order cancellation. Thereafter, you shall get an email confirmation from our side of your order cancellation. If you have already made the payment, you shall receive your Refund within 10 working days of receiving the confirmation of cancellation from our side.</p>
                    <p>Cancellation & Refunds after the item has been shipped: Once an order has been shipped, cancellation will not be proceeded.</p>
                    <div>
                        <div>
                            <h5>Cancellation and Refund Policy:</h5>
                            <ol>
                                <li>You cannot cancel the order once the order has been shipped. </li>
                                <li>You may cancel an order until the item has been shipped.. You shall receive an email from our side either confirming or declining your request based on the reasons provided by you. The decision of Akrigi regarding the same would be final and non-negotiable.</li>
                                <li>If the item is already paid for by using our Payment gateway, the refund would be either processed in the same account from where the payment to us was originally made or we will request for your Bank details to process your refund or your GPay Number.</li>
                            </ol>
                        </div>
                        <div>
                            <h5>How does Cancellation policy work?</h5>
                            <ul>
                                <li>Once the shipment has been dispatched, we DO NOT accept cancellations.</li>
                                <li>The shipment will attempt delivery TWICE – That’s a fair deal! Should you refuse to accept delivery, remain unavailable/ unreachable during all two attempts or cancel the shipment with us, we will consider you to be a DEFAULTER.</li>
                                <li>A DEFAULTER cannot shop with us on the “cash on delivery” option in the future. Incase you prepaid on your cancelled order, we will refund 50% of the shipment value to you excluding delivery charges.</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Returns:</h5>
                            <ul>
                                <li>We DO NOT accept returns.</li>
                                <b>WHY?</b>
                                <li>The cost of free returns: Akrigi loses a third of their revenue to returns and thus donations to the charity organizations decreases.</li>
                                <li>Environmental Costs: As returns are not affordable to masses and cause losses to the business they are often end up in landfill resulting in carbon emissions. The returns culture and consumer behaviour of ‘buying more to return’ will have a significant and unnecessary carbon footprint.</li>
                                <li>Each returned package, regardless of which carrier picks it up leaves a trail of emissions from the various trains, planes, and giant trucks that carry it back to the seller. That pollution contributes to climate change and worsens air quality.</li>
                                <li>The amount of single-use packaging is then doubled if the customer exchanges an item.</li>
                                <li>Looking at the above pointers, if we allow free returns, the whole idea behind thrift shopping doesn’t make any sense.</li>
                            </ul>
                        </div>
                        <div className='my-3'>
                            <b><h4>EXCHANGE</h4></b>
                            <p>
                            If there is any issue with the product (wrong/defective piece), you can raise an Exchange request within 3 days of receiving the order.
                            <h6>Process:</h6>
                            Connect <Link to='/contactus'>here</Link> with Subject as Exchange Request and Context with order details, your query, and an image of the wrong/defective product within 3 days of product delivery. 
                            </p>
                            <p>(Note: Exchange Policy is only available for items from the 'Surplus' and 'Fashion Accessories' section. Exchange is not applicable for thrift items.)</p>
                        </div>
                        <div className='my-3'>
                            <b><h4>SHIPPING</h4></b>
                            <p>We strive to deliver products purchased from Akrigi in excellent condition and in the fastest time possible. For all the Orders of Rs. 2999/- or more, we will deliver the order to your doorstep free of cost. A platform handling fee of Rs. 99/- will be applicable to the orders under Rs. 2999/-.
                                <ol>
                                    <li><p> If the order is cancelled, lost or un - delivered to your preferred location, we will refund the complete order amount including any platform handling fee, if paid online.</p></li>
                                    <li><p>For accounts whose return behavior violates our fair usage policy, platform handling fee will be non - refundable irrespective of order value.</p></li>
                                </ol>
                            </p>
                        </div>

                    </div>
                
            </div>
        </Container>
    </div>
  )
}

export default Returnpolicy