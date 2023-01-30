import { Box, Button, Center, Flex, FormControl, FormLabel, GridItem, Heading, Image, Input, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { postFaceWashData } from '../../Redux/FaceWash/action'
import { postPrimerData } from '../../Redux/Primer/action'
import { postShampooData } from '../../Redux/Shampoo/action'
import SingleCard from './SingleCard'

const initalValue={
    product_name:"",
    image:"",
    d_price:"",
    price:"",
    offer:"",
    category:"",
    rating:"4",
    rating_count:"1",
    size:""
}
const AddProduct = () => {
    const toast = useToast()
    const dispatch=useDispatch()
   
    const [data,setData]=useState(initalValue)
   const handleAdd=()=>
   {
      if(data.category=="Shampoo")
      {
        dispatch(postShampooData(data)).then((r)=>{
          
            if(r.msg.msg)
            {
              toast({
                title: 'Product',
                description: r.msg.msg,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              setData(initalValue)
            
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
          })
      }
      else if(data.category=="Primer")
      {
        dispatch(postPrimerData(data)).then((r)=>{
          
            if(r.msg.msg)
            {
              toast({
                title: 'Product',
                description: r.msg.msg,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              setData(initalValue)
            
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
          })
      }
      else if(data.category=="Face Wash")
      {
        dispatch(postFaceWashData(data)).then((r)=>{
          
            if(r.msg.msg)
            {
              toast({
                title: 'Product',
                description: r.msg.msg,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              setData(initalValue)

            
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
          })
      }
   }
  return (
    <><Heading textAlign={"center"} m="40px 0px">Add Product</Heading>
    <Flex w={["90%","90%"]} m="auto" gap={"10px"} flexDirection={["column","column","column","row"]}>
      
      <FormControl boxShadow={"2xl"} p="20px" borderRadius={"16px"}>
       <FormLabel>Image Url</FormLabel>
       <Input placeholder='Image Url' value={data.image} onChange={(e)=>setData({...data,image:e.target.value})} />
       <FormLabel>Product Name</FormLabel>
       <Input placeholder='Enter Name' value={data.product_name} onChange={(e)=>setData({...data,product_name:e.target.value})}/>
       <FormLabel>Category</FormLabel>
       <Input placeholder='Enter Category' value={data.category} onChange={(e)=>setData({...data,category:e.target.value})} />
       <FormLabel>Actual Price</FormLabel>
       <Input type="number" placeholder='Enter Actual Price' value={data.d_price} onChange={(e)=>setData({...data,d_price:e.target.value})} />
       <FormLabel>Price</FormLabel>
       <Input type="number" placeholder='Enter Price' value={data.price} onChange={(e)=>setData({...data,price:e.target.value})} />
       <FormLabel>Offer Percentage</FormLabel>
       <Input placeholder='Enter Price' value={data.offer} onChange={(e)=>setData({...data,offer:e.target.value})} />
       <FormLabel>Size</FormLabel>
       <Input placeholder='Enter Price' value={data.size} onChange={(e)=>setData({...data,size:e.target.value})} />
       <Center><Button mt="20px" onClick={handleAdd}>Add Product</Button></Center> 
      </FormControl>

      





      <GridItem  w="full" justifyContent={"center"} display="flex" >
      <Box
        
        width="350px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        >
       

        <Image
          src={data.image}
          alt={`Picture of`}
          roundedTop="lg"
        />

        <Box p="6">
          
          
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.product_name}
            </Box>
            
          

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.rating_count} />
            <Box fontSize="2xl" >
              <Box as="span" color={'gray.600'} fontSize="lg">
               ₹
              </Box>
              {data.d_price}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" mt="15px">
            <Text textDecoration={"line-through"}>₹ {data.price}</Text>
            <Text>{data.offer}</Text>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" mt="15px">
            <Text >{data.category}</Text>
            <Text>{data.size}</Text>
          </Flex>
          
        </Box>
      </Box>
    </GridItem>




    </Flex>
    </>
  )
}

export default AddProduct


function Rating({ rating, numReviews }) {
    return (
      <Flex alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Flex>
    );
  }