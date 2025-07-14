import React from 'react'
function Shimmer(){
  return <><div className='resto'>
  <div className="Resto-img">
    <img src="" alt="" />
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

function Scroller2() {
  return (
    <>
      {/* <h2>Top restaurant chains in Bangalore</h2> */}

    <div className="img-resto">
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
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

export default Scroller2