import React, { useEffect, useRef, useState } from "react";
import { online_img } from "../mockdata/constant";
import Scroller3 from "../ShimmerComponents/Scroller3";
import { Link } from "react-router-dom";
function ThreeScroller(props) {
  // console.log(props.data);
  return (
    <div>
      <div className="resto-online">
        <img src={online_img + props?.data?.info?.cloudinaryImageId} alt="" />
        <div className="text-online">
          <h3 className="restrant-name">{props?.data?.info?.name}</h3>
          <p>
            <span>
              <i className="bi bi-star-fill"></i>
            </span>{" "}
            {props?.data?.info?.avgRating} . {props?.data?.info?.sla?.slaString}
          </p>
          <p className="paragraph">{props?.data?.info?.cuisines.join(",")}</p>
          <p>{props?.data?.info?.areaName}</p>
        </div>
      </div>
    </div>
  );
}

function RestoOnline() {
  const [img, setimg] = useState([]);
  const search=useRef("")
  async function Onlineimg() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    setimg(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    Onlineimg();
  }, []);
  function handleFastDelivery(){
    const f=img.filter((x)=>{
      return x?.info?.sla?.deliveryTime<40
    })
    setimg(f)

  }
  function handleRatings(){
    const r=img.filter((x)=>{
        return x?.info?.avgRating>4.5
    })
    setimg(r)
  }
  function handlesearch(){
    const s=img.filter((x)=>{
return x.info.name.toLowerCase().includes(search.current.value.toLowerCase()) || x?.info?.cuisines?.includes(search.current.value)
    })
    setimg(s)
  }
if(img.length==0){
return <Scroller3/>
}
else{
  return (
    <>
      <h2 className="what">Restaurants with online food delivery in Bangalore</h2>
      <div className="filter">
        <div className="btn-flex">
          <button onClick={handleFastDelivery}>Fast Delivery</button>
          <button onClick={handleRatings}>Ratings 4.5+</button>
          <button>RS. Less Than 300</button>
        </div>
        <div className="search">
          <input type="text" ref={search} placeholder="enter the name of restaurants" />
          <button onClick={handlesearch}>search</button>

        </div>
      </div>

      <div className="img-online">
        {img.map((x, index) => {
          return <Link to={`/city/bangalore/${x.info.name}/${x.info.id}`}><ThreeScroller key={index} data={x} /></Link>;
        })}
      </div>
    </>
  );
}
 
}

export default RestoOnline;
