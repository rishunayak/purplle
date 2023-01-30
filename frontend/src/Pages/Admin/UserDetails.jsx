import { Box, Heading, Skeleton, Stack, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserOrder } from '../../Redux/AdminOrderDetails/actions'
import { getUserCart } from '../../Redux/AdminUserDetails/actions'
import CartCard from './CartCard'

const UserDetails = () => {
    const dispatch=useDispatch()
    const {cart}=useSelector(store=>store.UserCartReducer)
    const {isError,isLoading,order}=useSelector(store=>store.UserOrderReducer)
    const toast = useToast()
    const {id}=useParams()
    useEffect(()=>
    {
        dispatch(getUserOrder(id))
       dispatch(getUserCart(id))
    },[id])

    if(isLoading)
    {
      return (<Stack w={"90%"} m="auto" mt={"50px"}>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>)
    }
     
   
  return (
    <>
        
        <Box>

        <Heading textAlign={"center"} m="30px 0px">User Ordered History</Heading>
         <Box display={"grid"} w={["95%","95%","95%","90%"]} m="auto" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap="30px 10px" >
        
        {
          order && order.products?.map((ele)=><CartCard item={ele}/>) 
        }
       
        </Box>
        {
             order.products?.length==0 ||  order.products==undefined ?<Heading color={"red"} textAlign="center">No order History</Heading>:""
        }

   

         <Heading textAlign={"center"} m="30px 0px">User Cart Data</Heading>
         <Box display={"grid"} w={["95%","95%","95%","90%"]} m="auto" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} gap="30px 10px" >
        
        {
          cart && cart.products?.map((ele)=><CartCard item={ele}/>) 
        }
       
        </Box>
        {
             cart.products?.length==0 ||  cart.products==undefined ?<Heading color={"red"} textAlign="center">No Data in Cart</Heading>:""
        }

         

        </Box>
    </>
  )
}

export default UserDetails