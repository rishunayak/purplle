import { Grid, Heading, Skeleton, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrimerData, patchPrimerData } from '../../Redux/Primer/action'
import SingleCard from './SingleCard'

const FaceMakeup = () => {
    const {isError,isLoading,primer}=useSelector((store)=>store.PrimerReducer)
    const dispatch=useDispatch()
    useEffect(()=>
    {
        dispatch(getPrimerData())
    },[])

    const handleEdit=(current)=>
    {
        
        dispatch(patchPrimerData(current)).then((r)=>{
          
          if(r.msg.msg)
          {
            toast({
              title: 'Product',
              description: r.msg.msg,
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          
          }
          else
          {
            toast({
              title: 'Error',
              description: r.msg,
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
        })}


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
    <Heading textAlign={"center"} m={"50px 20px"}>Face Makeup Products</Heading>
    <Grid  gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} maxW={["95%","95%","95%","90%"]}  m="auto" mb={"50px"} gap="30px 10px">
      
      {
        primer?.map((ele,i)=><SingleCard product={ele} key={i} handleEdit={handleEdit}/>)
      }
    
    </Grid>
    </>
  )
}

export default FaceMakeup