import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userLogin } from '../Redux/User/action'

const UserAuth = ({children}) => {
    const {isError,isLoading,token,user}=useSelector(store=>store.AuthReducer)
    const dispatch=useDispatch()
    useEffect(()=>
    {
      dispatch(userLogin())
    },[])
    
    if(token)
    {
        return children
    }
    else
    {
        return <Navigate to="/"/>
    }
}

export default UserAuth