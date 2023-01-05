import React, { useState, useEffect } from "react";
import Header from "../Header";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";




function pay() {

  const[show, setshow] = useState(false) 
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(' ')
  const [orderId, setorderId] = useState(false)
  const createOrder=(data,actions)=> {
    return actions.order.create({
      purchase_units:[
        {
          descriptions:"Suscribtions",
          amount:{
            currency_code:"USD",
            value:2
          }
        }
      ],
      application_context:{
        shipping_preference:"NO_SHIPPING"
      }
    })
    .then((
      orderId=>{
        setorderId(orderId)
        return orderId
      }
    ))
  }
  const onApprove= (data, actions) =>{
    return actions.order.capture().then(function(details){
      const {payer}=details
      setSuccess(true)
    })
   }
  const onError=(data,actions)=>{
    setErrorMessage("An error occured ")
  }


  return (
    <div>
      <Header />
      <PayPalScriptProvider
          options={{
            "client-id": "AfOyAqxy3v77M6IR4lid44zAXxgcPSweF_d3f_i10bQmoqZPrmasQhNLemZkxXmgddGjJDkYDXhXPIQm",

          }}>
      <div className="body1" >
       

          <div className="info">
            <form className="form12">
              <h2 style={{ color: "blue" }}>Gold Member Paln</h2>
              <img src="https://purepng.com/public/uploads/large/purepng.com-gold-coinsgoldatomic-number-79chemical-elementgroup-11-elementaurumgold-dustprecious-metalgold-coins-1701528978267zsaly.png" width="150" height="150"></img>
              <h2>2$ Daily Subscribe Paln</h2>
              <ul>
                <li>Win Monthly Gift pack</li>
                <li>Win Monthly Travel Package</li>
                <li>Offers Quickly</li>
              </ul>
              
                <PayPalButtons style={{layout:'vertical'}} createOrder={createOrder} onApprove={onApprove} onError={onError}/>
              
              {/* <div id="smart-button-container">
                <div style={{ textAlign: "center" }}>
                  <div id="paypal-button-container"></div>
                </div>
              </div> */}
            </form>

          </div>
    
      </div>
      </PayPalScriptProvider>
    </div>




  )
}

export default pay;