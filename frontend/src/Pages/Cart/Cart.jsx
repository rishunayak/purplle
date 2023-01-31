import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from "@chakra-ui/react";
import { deleteCart, getCart, patchCart } from "../../Redux/Cart/action";
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { BsCartX } from "react-icons/bs";
import { cartData } from "./data";
import "./Cart.css";

const Cart = () => {

  const dispatch = useDispatch()
  const {isLoading,isError,cart} = useSelector((store)=>store.CartReducer)
  useEffect(()=>{
    dispatch(getCart())
  },[])
  const toast = useToast()
  const cartItemsNum = cart?.length;
  let cartTotal;
  // if (cartItemsNum) {
  //   cartTotal =
  //     cart?.reduce(
  //       (acc, item) => acc + +item.product.d_price * +item.quantity,
  //       0
  //     );
  // }





  const handleChange=(data)=>
  {
    console.log(data)
    dispatch(patchCart(data)).then(r=>
      {
        if(r.msg.msg)
        {
          toast({
            title: 'Cart',
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
        console.log(r)
      })
  }


  const handleDelete=(productId)=>
  {
      dispatch(deleteCart(productId)).then(r=>
        {
          if(r.msg)
          {
            toast({
              title: 'Cart',
              description: r.msg,
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
          console.log(r)
        })
  }

  return (
    <>
      {cartItemsNum == 0 ? (
        <Box className="emptyCart">
          <BsCartX />

          <Text>No Product in Your Cart</Text>
          <Link to="/products">View Products</Link>
        </Box>
      ) : (
        <Box
          maxW={{
            base: "3xl",
            lg: "6xl",
          }}
          mx="auto"
          px={{
            base: "4",
            md: "8",
            lg: "12",
          }}
          py={{
            base: "6",
            md: "8",
            lg: "12",
          }}
        >
          <Stack
            direction={{
              base: "column",
              lg: "row",
            }}
            align={{
              lg: "flex-start",
            }}
            spacing={{
              base: "8",
              md: "16",
            }}
          >
            <Stack
              spacing={{
                base: "8",
                md: "10",
              }}
              flex="2"
            >
              <Heading fontSize="2xl" fontWeight="extrabold">
                Cart ({cartItemsNum} items)
              </Heading>

              <Stack spacing="6">
                {cart?.map((item,i) => (
                    <CartItem
                      key={i}
                      item={item}
                      handleChange={handleChange}
                      handleDelete={handleDelete}
                    />
                  ))}
              </Stack>
            </Stack>

            <Flex direction="column" align="center" flex="1">
              <CartOrderSummary cartTotal={cartTotal} />
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link color={mode("#e30970", "#e30970")}>
                  Continue shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Cart;
