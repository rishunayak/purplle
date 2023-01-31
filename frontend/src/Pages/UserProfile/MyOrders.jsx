import { Box, Button, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../Redux/Order/action";
import CartCard from "../Admin/CartCard";
import noOrderPageLogo from "./no-orders-page.webp";

const MyOrders = () => {

  const dispatch=useDispatch()
  
  const {isLoading,isError,order}=useSelector((store)=>store.OrderReducer)

  useEffect(()=>
  {
    dispatch(getOrder())
  },[])

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
   console.log(order)
  return (
    <Box>
    { order?.length!=0?
     <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(3,1fr)"]} gap="40px 10px">
       { order?.map((ele)=><CartCard item={ele}/>)}
     </Box>
      
      :
      
      (
        <Box>
          <Image src={noOrderPageLogo} />
          <Text my={"0.8rem"} fontSize={"0.8rem"}>
            Currently there are no orders for the selected time frame
          </Text>
          <Button
            px={"2rem"}
            py={"1rem"}
            borderRadius={"0.2rem"}
            colorScheme={"purple"}
            textTransform={"uppercase"}
          >
            Continue Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MyOrders;
