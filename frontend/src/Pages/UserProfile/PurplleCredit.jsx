import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import PurplleCreditLogo from "./purplle-credit-logo.webp";

const PurplleCredit = () => {
  return (
    <Box>
      <Box py={"5em"} bg={"linear-gradient(#6b3392, #f71cc9)"}>
        <Center maxW={"fit-content"}>
          <Image maxW={"50%"} src={PurplleCreditLogo} alt="credit-logo" />
        </Center>
        <Heading
          py={"2em"}
          color={"#fff"}
          fontWeight={"normal"}
          fontSize={"1rem"}
          textTransform={"uppercase"}
        >
          A Quick and Covenient way to pay and refund.
        </Heading>
      </Box>
    </Box>
  );
};

export default PurplleCredit;
