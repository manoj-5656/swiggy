import React from 'react'
import AppLayout from './components/AppLayout'
import Search from './pages/Search'
import Home from './pages/Home'
import Corporate from './pages/Corporate'
import Offers from './pages/Offers'
import Help from './pages/Help'
import Signin from './Signin'
import Cart from './pages/Cart'
import Restoitems from './components/homecomponents/Restoitems'
import store from './redux/CreateStore'
import PaymentDone from './pages/PaymentDone'
import { Provider } from 'react-redux'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
     <div>
      <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/corporate' element={<Corporate/>}></Route>
      <Route path='/offers' element={<Offers/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/city/bangalore/:name/:id' element={<Restoitems/>}></Route>
      <Route path='/payment-success' element={<PaymentDone/>}></Route>

      </Route>
      
    </Routes>
    {/* <AppLayout/> */}

    </BrowserRouter>
      </Provider>
     
    
    {/* <Navbar/> */}
    </div>
    
    
  )
}


export default App