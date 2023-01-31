import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart/Cart'
import Login from './Login/Login'
import ProductDetails from './ProductDetails/ProductDetails'
import Payment from "../Pages/Checkout/payment";
import Pay from "../Pages/Payment/pay";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/prductDetails' element={<ProductDetails/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/payment" element={<Pay />} />
      <Route path="/shipping" element={<Payment />} />
      </Routes>
    </>
  )
}

export default AllRoutes