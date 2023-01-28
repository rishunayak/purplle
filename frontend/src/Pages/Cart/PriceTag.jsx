import { HStack, Text, useColorModeValue as mode } from "@chakra-ui/react";

export const PriceTag = (props) => {
  const { price, salePrice } = props;
  return (
    <HStack spacing="1">
      <Text>{price}</Text>
      {salePrice && <Text>{salePrice}</Text>}
    </HStack>
  );
};
