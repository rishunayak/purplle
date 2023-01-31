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
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { product } from "./DummyProduct";

export default function ProductDetails() {
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
            
            <Stack>
              <Text fontWeight="semibold" fontSize="2xl">
                ₹{product.d_price}
              </Text>
              <Box
                display="flex"
                gap="10px"
                justifyContent="flex-end"
                alignContent="flex-end"
              >
                <Text fontSize="14px" textDecorationLine="line-through">
                  ₹{product.price}
                </Text>
                <Text color="pink.500" fontSize="14px">
                  {product.offer}
                </Text>
              </Box>
            </Stack>
          </Box>

          <Button
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
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
