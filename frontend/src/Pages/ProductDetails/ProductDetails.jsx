import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Select,
} from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { MdLocalShipping } from "react-icons/md";
import { product } from "./DummyProduct";

import React from "react";
import { BsStar } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { SlStar } from "react-icons/sl";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoReturnDownBack } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { useDispatch } from "react-redux";

const StarRating = (props) => {
  const rating = props.rating;
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} role="img" aria-label="star">
          ⭐
        </span>
      );
    } else {
      stars.push(
        <span key={i} role="img" aria-label="star">
          <SlStar />
        </span>
      );
    }
  }
  return (
    <Flex textAlign="center" alignItems="center" mr="10px">
      {stars}
    </Flex>
  );
};

export default function ProductDetails() {
  const dispatch = useDispatch()
  const handleCartButton=()=>{
    
  }
  const handleChange = () => {};
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "20px", sm: "20px", lg: "20px" }}
            >
              {product.product_name}
            </Heading>
            <Flex>
              <StarRating rating={product.rating} />
              <Text>{product.rating}stars</Text> |
              <Text>{product.rating_count}</Text>
            </Flex>

            <Stack>
              <Text mt="10px" fontWeight="semibold" fontSize="2xl">
                ₹{product.d_price}
              </Text>
              <Box
                display="flex"
                gap="10px"
                justifyContent="flex-start"
                alignContent="flex-start"
              >
                <Text fontSize="14px" textDecorationLine="line-through">
                  ₹{product.price}
                </Text>
                <Text color="pink.500" fontSize="14px">
                  {product.offer}
                </Text>
              </Box>
              <Select
                maxW="64px"
                aria-label="Select quantity"
                focusBorderColor={useColorModeValue("pink.500", "pink.200")}
                // onChange={(e) =>
                //   handleChange({
                //     productId: item._id,
                //     quantity: +e.target.value,
                //   })
                // }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </Stack>
          </Box>

          <Button
          onClick={handleCartButton}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("pink.500", "pink.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <IoShieldCheckmarkSharp />
            <Text>100% Genuine Products</Text>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <IoReturnDownBack />
            <Text>Return in 15 days</Text>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <FaWallet />
            <Text>Free COD above 499</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
