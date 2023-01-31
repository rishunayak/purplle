import { Grid, Heading, Skeleton, Stack, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser, patchUserData } from '../../Redux/AllUser/action'
import UserCard from './UserCard'

const AllUser = () => {
 
    const dispatch=useDispatch()
    const {isError,isLoading,allUser}=useSelector(store=>store.AllUserReducer)
    const toast = useToast()
    useEffect(()=>
    {
       dispatch(getAllUser())
    },[])
 
   const updateAdmin=(data)=>
   {
    data.isAdmin=!data.isAdmin
     dispatch(patchUserData(data)).then((r)=>{
          
        if(r.msg.msg)
        {
          toast({
            title: 'Admin Role',
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

        console.log(r.msg)
       
      })
   }

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
        <Heading textAlign={"center"} m="50px 20px">All Users</Heading>
      <Grid  gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} maxW={["95%","95%","95%","90%"]}  m="auto" mb={"50px"} gap="30px 10px">
         {
           allUser?.map((ele)=>{
                
                return <UserCard data={ele} key={ele._id} updateAdmin={updateAdmin} />})
         }
      </Grid>
     </>
  )
}

export default AllUser