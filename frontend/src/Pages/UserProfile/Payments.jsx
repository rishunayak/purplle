import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import EmptyPaymentLogo from "./empty-payments_page.webp";
const Payments = () => {
  return (
    <Box>
      <Image src={EmptyPaymentLogo} alt="logo" />
      <Text py={"1rem"} fontSize={"0.95rem"}>
        You haven't set up any payments methods yet.
      </Text>
    </Box>
  );
};

export default Payments;
