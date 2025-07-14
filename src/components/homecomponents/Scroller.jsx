import React from "react";
import { useState } from "react";
import { Image_url } from "../mockdata/constant";
import { useEffect } from "react";
import Scroller1 from "../shimmerComponents/Scroller1";
function Image(props) {
  // console.log(Image_url+props?.data?.imageId)
  return <img className="scroll-img" src={Image_url+props?.data?.imageId} alt="" />;
}
function Scroller() {
const [images,setImages]=useState([])
async function swiggyscroller() {
 const response=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')   
 const imagesdata=await response.json()


 
 setImages(imagesdata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)

}
  

useEffect(()=>{
  swiggyscroller()
 },[])
 if(images.length==0){
 return <Scroller1/>
 }
 else{
  return (
    <div>
      <h2 className="what">What's On Your Mind?</h2>
      <div className="img-scrooler">

        {
        images.map((x,index) => {
          return <Image key={index} data={x} />;
        })
        }
      </div>
    </div>
  );
 }
 
  
}

export default Scroller;
