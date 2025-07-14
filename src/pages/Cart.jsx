import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Cart() {
  const navigate=useNavigate()
  const data=useSelector((state)=>state.cartinfo.items)
  const [finalcost,setfinalcost]=useState(0)
  useEffect(()=>{
    const rupees=data.reduce((prev,curr)=>{
      return prev=prev+curr.cost
    },0)
    setfinalcost(rupees)
  },[data])
  function handlePayment(){

    // if (window.Razorpay) {
    //   resolve();
    //   return;
    // }
        const options = {
          key:`${import.meta.env.VITE_RAZORPAY_KEY}`, 
          amount: finalcost*100, 
          handler: (response) => {
            // Callback function when payment is successful
            alert("Payment Successful!");
            console.log("Payment Response:", response);
            navigate('/payment-success')
            // You can call your backend here to verify the payment
          },
          prefill: {
            name: "manoj", // Customer name
            email: "manoj@example.com", // Customer email
            contact: "6304282469", // Customer phone number
          },
          theme: {
            color: "#3399cc", // Theme color for the payment modal
          },
        };
  
        // Initialize and open the Razorpay payment modal
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      }
  if(data.length==0){
    return (<>
    <h1 className='empty'>cart is empty </h1>
   <Link to='/'>
   <button className='empty'>Browse</button></Link>
    </>
    )
    
  }
  else{
    return (
      <div className='cart-items'>
        {
         data.map((x,index)=>{
          return <div className='final-cart' key={index}>
           <h4>{x.name}</h4> 
           <h5>{x.cost}</h5>
          </div>
          
         }) 
         
        }
        <div className="final-cart cart-btn">
          <button onClick={handlePayment}>click to payment {finalcost} </button>
         </div>
        
      </div>
    )
  }
 
  
  
}

export default Cart