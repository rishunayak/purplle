import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import {deleteCart, patchCart} from "../../Redux/Cart/action"
export const CartItem = (props) => {
  const {
    _id,
    product_name,
    d_price,
    image,
    price,
    offer,
    quantity,
    onChangeQuantity,
    onClickDelete,
    productId
  } = props;
  const dispatch=useDispatch()
  const toast = useToast()
  const handleChange=(quantity)=>
  {
    dispatch(patchCart({productId:productId,quantity:+quantity})).then(r=>
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
      })
  }


  const handleDelete=()=>
  {
      dispatch(deleteCart(productId)).then(r=>
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
        })
  }

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={product_name} image={image} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Select
          defaultValue={quantity}
          maxW="64px"
          aria-label="Select quantity"
          focusBorderColor={useColorModeValue("pink.500", "pink.200")}
          onChange={(e)=>handleChange(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
        <PriceTag
          quantity={quantity}
          offer={offer}
          price={price}
          d_price={d_price}
        />
        <CloseButton
          aria-label={`Delete ${product_name} from cart`}
          onClick={handleDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Select
          value={quantity}
          maxW="64px"
          aria-label="Select quantity"
          focusBorderColor={useColorModeValue("pink.500", "pink.200")}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>

        <PriceTag
          quantity={quantity}
          offer={offer}
          price={price}
          d_price={d_price}
        />
      </Flex>
    </Flex>
  );
};
