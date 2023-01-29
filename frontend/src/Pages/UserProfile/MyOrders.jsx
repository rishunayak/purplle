import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import noOrderPageLogo from "./no-orders-page.webp";

const MyOrders = () => {
  return (
    <Box>
      {false || (
        <Box>
          <Image src={noOrderPageLogo} />
          <Text my={"0.8rem"} fontSize={"0.8rem"}>
            Currently there are no orders for the selected time frame
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

export default MyOrders;
