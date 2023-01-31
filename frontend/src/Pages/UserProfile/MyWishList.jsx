import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import EmptyWishListLogo from "./wishlist-empty-page.webp";

const MyWishList = () => {
  return (
    <Box>
      {false || (
        <Box>
          <Image src={EmptyWishListLogo} />
          <Heading my={"1rem"} fontWeight={"normal"} fontSize={"1rem"}>
            Your Wishlist is empty!
          </Heading>
          <Text my={"0.8rem"} fontSize={"0.8rem"}>
            Explore more and shortlist some items
          </Text>
          <Button
            px={"2rem"}
            py={"1rem"}
            borderRadius={"0.2rem"}
            colorScheme={"purple"}
            textTransform={"uppercase"}
          >
            Continue Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MyWishList;
