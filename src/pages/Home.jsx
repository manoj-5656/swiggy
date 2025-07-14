import React from 'react'
import Scroller from '../components/homecomponents/Scroller'
import Rest0Scroller from '../components/homecomponents/Rest0Scroller'
import RestoOnline from '../components/homecomponents/RestoOnline'
function Home() {
  return (
    <div className='homecon'>
      <Scroller/>
      <Rest0Scroller/>
      <RestoOnline/>

    </div>
  )
}

export default Home