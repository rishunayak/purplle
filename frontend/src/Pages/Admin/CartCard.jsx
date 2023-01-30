import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const CartCard = ({item}) => {
  
  return (
    <>
     <Box w={"350px"} boxShadow="2xl" borderRadius={"16px"} m="auto">
      <Image src={item.product.image} borderRadius={"10px 10px 0px 0px"}/>
       
        <Box p="10px">

            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {item.product.product_name}
            </Box>
            <Flex justifyContent={"space-between"} fontWeight="500" fontSize={"18px"} mt="5px">
              <Text>₹ {item.product.d_price}</Text>
              <Text textDecoration={"line-through"}>₹ {item.product.price}</Text>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center" mt="5px">
            <Rating rating={item.product.rating} numReviews={item.product.rating_count} />
            
          </Flex>
          
           <Flex justifyContent={"space-between"} fontWeight="500" fontSize={"18px"} mt="5px">
              <Text>Quantity {item.quantity}</Text>
              <Text>Total ₹{(item.product.d_price)*(item.quantity)}</Text>
            </Flex>
          { item.date?<Text>Purchased Date:- {item?.date}</Text>:""}
          </Box>

     </Box>
    </>
  )
}

export default CartCard



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