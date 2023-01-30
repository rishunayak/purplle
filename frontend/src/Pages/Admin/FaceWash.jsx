import { Grid, Heading, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFaceWashData, patchFaceWashData } from '../../Redux/FaceWash/action'
import SingleCard from './SingleCard'


const FaceWash = () => {

    const {isError,isLoading,faceWash}=useSelector((store)=>store.FaceWashReducer)
    const dispatch=useDispatch()
    useEffect(()=>
    {
        dispatch(getFaceWashData())
    },[])

    const handleEdit=(current)=>
    {
        
        dispatch(patchFaceWashData(current)).then((r)=>{
          
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
    <Heading textAlign={"center"} m={"50px 20px"}>Face Wash Products</Heading>
    <Grid  gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} maxW={["95%","95%","95%","90%"]}  m="auto" mb={"50px"} gap="30px 10px">
      
      {
        faceWash?.map((ele,i)=><SingleCard product={ele} key={i} handleEdit={handleEdit}/>)
      }
    
    </Grid>
    </>
  )
}

export default FaceWash