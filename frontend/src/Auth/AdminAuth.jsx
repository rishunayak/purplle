import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUserInfo } from '../Redux/User/action'

const AdminAuth = ({children}) => {
    const {isError,isLoading,token,user}=useSelector(store=>store.AuthReducer)
    const dispatch=useDispatch()
    useEffect(()=>
    {
      dispatch(getUserInfo())
    },[])
    
    if(user?.isAdmin)
    {
        return children
    }
    else
    {
        return <Navigate to="/"/>
    }
  
}

export default AdminAuth