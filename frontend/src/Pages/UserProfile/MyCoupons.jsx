import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import NoCoupons from "./no-coupons-page.webp";

const MyCoupons = () => {
  return (
    <Box>
      <Image src={NoCoupons} alt="no-coupons" />
      <Text py={"1rem"} fontSize={"0.9rem"}>
        Sorry Currently there are no Coupons Codes.
      </Text>
    </Box>
  );
};

export default MyCoupons;
