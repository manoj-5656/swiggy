import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { dealsdata } from "../mockdata/constant";
import { producturl } from "../mockdata/constant";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cartcreateSlice";

function Products(props) {
  const dispatch=useDispatch()

  
  function handleAddItems(){
    const carddata={
      name:props?.data?.card?.info?.name,
      cost:props.data.card.info.price/100 || props.data.card.info.defaultPrice/100
      
    }
    dispatch(addItems(carddata))
    
  }
  return (<>
    <div className="product-box">
      <div className="product-text">
        <p></p>
        <h2 className="restrant-name non">{props?.data?.card?.info?.name}</h2>
        <p>
          <span>
            <i className="bi bi-currency-rupee"></i>
          </span>
          {((props.data?.card?.info?.price) || (props?.data?.card?.info?.defaultPrice))/100}
        </p>
        
        
        <p>
          <span>
            <i className="bi bi-star-fill"></i>
          </span>
          {props?.data?.card?.info?.ratings?.aggregatedRating?.rating}(
          {props?.data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
        </p>
        <p className="desc">
          {props?.data?.card?.info?.description}
          more
        </p>
      </div>
      <div className="product-img">
        <img src={producturl + props?.data?.card?.info?.imageId} alt="" />
        <button onClick={handleAddItems} className="product-btn">ADD</button>
      </div>
    </div>
    <hr />
    </>
    
  );
}
function Deals(props) {
  return (
    <>
      <div className="you">
        <div className="coupons">
          <img src={dealsdata + props.data.info.offerLogo} alt="" />

          <div className="use">
            <h3>
              <b>{props?.data?.info?.header}</b>
            </h3>
            <p>{props?.data?.info?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Restoitems() {
  const [items, setitems] = useState([]);
  const [deals, setdeals] = useState([]);
  const [product, setproduct] = useState([]);
  const [pizza, setpizza] = useState([]);
  // const [combo, setcombo] = useState([]);
  const [recom,setrecom]=useState([])
  // console.log("recom",recom)

  const {name , id } = useParams();
  const location = window.location.pathname;
  // console.log(location);
  console.log(name, id);
  async function RestoitemsFetch() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const result = await response.json();
    // console.log("result",result)
    setitems(result?.data?.cards[2]);
    setdeals(
      result?.data?.cards[3]?.card.card.gridElements.infoWithStyle.offers
    );
    setproduct(
      result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards || result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.carousel

    );
    setrecom( result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)
    console.log(result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card)
    if(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories!=undefined){
    setpizza(
      result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories[0]?.itemCards
    );
  }
  else{
    setpizza(
      result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
    // console.log("pizza",pizza)

    // setcombo(
    //   result?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.categories[1]?.itemCards 
    //         );
  }
  useEffect(() => {
    RestoitemsFetch();
  }, []);

  return (
    <div>
      <div className="itemsmenu">
        <p>{location.replace(/[0-9%]/g, " ")}</p>
        <div className="carditems">
          <h1>
            <b>{items?.card?.card?.info?.name}</b>
          </h1>
          {/* <div className="src">
            
          </div> */}
          <div className="boxmenu">
            <p>
              <b>
                <span>
                  <i className="bi bi-star-fill"></i>
                </span>
                {items?.card?.card?.info?.avgRating}(
                {items?.card?.card?.info?.totalRatingsString + " "})•{"  "}
                {items?.card?.card?.info?.costForTwoMessage}
              </b>
            </p>
           <h2><u> {items?.card?.card?.info?.cuisines.join(",")}</u></h2>
            <div className="location">
              <h3>Outlet {items?.card?.card?.info?.locality}</h3>
              <h3>{items?.card?.card?.info?.sla?.slaString}</h3>
            </div>
          </div>
          <h2 className="de">
            <b>Deals for you</b>
          </h2>
          <div className="com">
            {deals.map((x, index) => {
              return <Deals key={index} data={x} />;
            })}
          </div>
          <div className="input">
            <button className="in"><span>Search for dishes</span><span><i class="bi bi-search"></i></span></button>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {product.map((x, index) => {
                    return <Products key={index} data={x} />;
                  })}
                </div>
              </div>
            </div>
            {recom[3]?.card?.card?.title}
            <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        {/* { recom[2]?.card?.card?.title}({pizza.length}) */}
      </button>
    </h2>
    
  </div>
            

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restoitems;
