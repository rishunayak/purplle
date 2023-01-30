import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart/Cart'
import Login from './Login/Login'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes