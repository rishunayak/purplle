import {
  Box,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const PriceTag = (props) => {
  const { quantity, offer, price, d_price } = props;
  return (
    <Stack>
      <Text
        fontWeight="semibold"
        fontSize="2xl"
        color={mode("gray.800", "gray.100")}
      >
        ₹{quantity * d_price}
      </Text>
      <Box
        display="flex"
        gap="10px"
        justifyContent="flex-end"
        alignContent="flex-end"
      >
        <Text fontSize="14px" textDecorationLine="line-through">₹{quantity * price}</Text>
        <Text color="pink.500" fontSize="14px">{offer}</Text>
      </Box>
    </Stack>
  );
};
