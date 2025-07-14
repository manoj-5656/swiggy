import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const data=useSelector((state)=>state.cartinfo.items.length)
  console.log("navbar",data)
  return (
    <div className="navbar">
      <div className="img">
        <Link className="img1" to='/'><img
          src="data:image/png;base64,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"
          alt=""
        /></Link>
        
        <p>Other</p>
      </div>
      <ul>
    
     <Link to='/corporate' className="li"><li><i className="bi bi-box2"></i>Swiggy Corporate</li></Link>
     <Link to='/search' className="li"> <li><i className="bi bi-search"></i>Search</li></Link>
       <Link to="/offers" className="li"><li><i className="bi bi-flower1"></i>Offers</li></Link>
       <Link to='/Help' className="li"> <li><i className="bi bi-patch-question"></i>Help</li></Link>
        <Link to='/signin' className="li"><li><i className="bi bi-person"></i>Sign In</li></Link>
       <Link to='/cart'className="li"><li><i className="bi bi-cart-dash"></i>Cart {data}</li></Link> 
      </ul>
    </div>
  );
}

export default Navbar;
