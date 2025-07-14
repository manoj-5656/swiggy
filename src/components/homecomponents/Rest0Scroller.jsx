import React from "react";
import { useState, useEffect } from "react";
import { Resto_url } from "../mockdata/constant";
// import Scroller1 from "../ShimmerComponents/Scroller1";
import Scroller2 from "../ShimmerComponents/Scroller2";
import { Link } from "react-router-dom";


function Restoimg(props) {
  return (
    <div>
      <div className="resto">
        <div className="Resto-img">
          <img src={Resto_url + props?.data?.info?.cloudinaryImageId} alt="" />
          <div className="text-con">
            <h3 className="restrant-name">{props.data.info.name}</h3>
            <p>
              <span>
                <i className="bi bi-star-fill"></i>
              </span>{" "}
              {props?.data?.info?.avgRating}.{" "}
              {props?.data?.info?.sla?.slaString}
            </p>
            <p className="paragraph">{props?.data?.info?.cuisines.join(",")}</p>
            <p>{props?.data?.info?.areaName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Rest0Scroller() {
  const [resto, setresto] = useState([]);
  const [head,sethead]=useState([])
  // console.log(head)
  // console.log("resto",resto)
  async function restoFetch() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    console.log("result",result)
    setresto(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    sethead(result?.data?.cards[1]?.card?.card);
  }
  useEffect(() => {
    restoFetch();
  }, [])
if(resto.length==0){
   return <Scroller2/>
}
else{
  return (
    <div>
      <h2 className="what">{head.header.title}</h2>
      <div className="img-resto">
        {resto.map((x, index) => {
          return <Link to={`/city/bangalore/${x.info.name}/${x.info.id}`}><Restoimg key={index} data={x} /></Link>;
        })}
      </div>
    </div>
  )
}

  
}

export default Rest0Scroller;
