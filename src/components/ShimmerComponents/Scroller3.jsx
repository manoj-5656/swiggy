import React from 'react'
function Shimmer(){
  return <><div className='resto-online'>
  <div className="text-online">
    <img className='menuimg' src="" alt="" />
    <div className="text-con">
      <h3 className='name'></h3>
      <p className='rating'></p>
      <p className='items'></p>
      <p className='loc'></p>
    </div>
  </div>
</div>
</>
}

function Scroller3() {
  return (
    <>
      {/* <h2>Restaurants with online food delivery in Bangalore</h2> */}

    <div className="img-online">
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      
      

    </div>
    </>
  )
}

export default Scroller3