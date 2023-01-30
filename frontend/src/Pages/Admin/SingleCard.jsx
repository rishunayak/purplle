import React from 'react'
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    GridItem,
    Button,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import EditProduct from './EditProduct';

const SingleCard = ({product,handleEdit,handleDelete}) => {
  return (
    <GridItem  w="full" justifyContent={"center"} display="flex" >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        width="350px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        >
       

        <Image
          src={product.image}
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
              {product.product_name}
            </Box>
            
          

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={product.rating} numReviews={product.rating_count} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
               ₹
              </Box>
              {product.d_price}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" mt="15px">
            <EditProduct product={product} handleEdit={handleEdit} />
            <Button onClick={()=>handleDelete(product._id)}>Delete</Button>
          </Flex>
          
        </Box>
      </Box>
    </GridItem>
  )
}

export default SingleCard



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