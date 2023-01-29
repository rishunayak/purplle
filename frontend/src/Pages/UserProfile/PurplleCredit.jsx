import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import PurplleCreditLogo from "./purplle-credit-logo.webp";
import MoneyCardLogo from "./consolidated-money-card.webp";
import RefundCardLogo from "./faster-refund-card.webp";
import CheckOutCardLogo from "./instant-checkout-card.webp";
import SecurePaymentLogo from "./secure-payment-card.webp";
import HelpCenterLogo from "./help-center-card.webp";
import BeautyAssistantLogo from "./beauty-assistant-card.webp";

const PurplleCredit = () => {
  return (
    <Box pos={"relative"}>
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

      <Box pos={"absolute"} top={"70%"} left={0} right={0}>
        <Container>
          <SimpleGrid columns={{ base: 1, lg: 3, md: 3 }}>
            <Image src={MoneyCardLogo} alt="logo1" />
            <Image src={RefundCardLogo} alt="logo2" />
            <Image src={CheckOutCardLogo} alt="logo2" />
          </SimpleGrid>
        </Container>

        <Stack>
          <Text
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            Total Available Balance
          </Text>
          <Heading fontSize={"5xl"}>&#8377; 0.00</Heading>
          <Text
            color={"#e40980"}
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            View Credit Details
          </Text>
        </Stack>

        <Stack my={"2em"}>
          <Container
            maxW={"3xl"}
            py={"1rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
          >
            <Heading
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
              textAlign={"left"}
              textTransform={"uppercase"}
            >
              Transaction Log
            </Heading>
            <Text py={"1rem"} fontSize={"0.8rem"} textAlign={"left"}>
              No transactions.
            </Text>
          </Container>
        </Stack>

        <Stack>
          <Container
            maxW={"3xl"}
            py={"1rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
          >
            <Heading
              fontSize={"1.2rem"}
              fontWeight={"semibold"}
              textAlign={"left"}
              textTransform={"uppercase"}
            >
              Please Note
            </Heading>
            <UnorderedList py={"1rem"} fontSize={"0.8rem"} textAlign={"left"}>
              <ListItem>
                Purplle Credits can't be cancelled or transferred to another
                account.
              </ListItem>
              <ListItem>
                It can't be withdrawn as cash or transferred to another banking
                account.
              </ListItem>
              <ListItem>
                Credits have an expiry, check FAQs for more details.
              </ListItem>
            </UnorderedList>
            <ButtonGroup w={"100%"}>
              <Button
                w={"100%"}
                color={"#e40980"}
                bg={"#fff"}
                textTransform={"uppercase"}
              >
                View T&C
              </Button>
              <Button
                w={"100%"}
                color={"#e40980"}
                bg={"#fff"}
                textTransform={"uppercase"}
              >
                FAQs
              </Button>
            </ButtonGroup>
          </Container>
        </Stack>

        <Stack my={"5em"}>
          <Container maxW={"7xl"}>
            <SimpleGrid
              columns={{ base: 1, lg: 3, md: 3, sm: 1 }}
              spacing={"2em"}
            >
              <Box
                px={"1rem"}
                py={"4em"}
                borderRight={"1px"}
                borderRightColor={"gray.100"}
              >
                <Image src={SecurePaymentLogo} alt={"icon"} />
                <Heading py={"1rem"} fontSize={"2xl"} fontWeight={"semibold"}>
                  100% Secure Payment
                </Heading>
                <Text fontSize={"0.8rem"}>
                  All major credit or debit cards accepted.
                </Text>
              </Box>
              <Box px={"1rem"} py={"4em"}>
                <Image src={BeautyAssistantLogo} alt={"icon"} />
                <Heading py={"1rem"} fontSize={"2xl"} fontWeight={"semibold"}>
                  Beauty Assistant
                </Heading>
                <Text fontSize={"0.8rem"}>
                  Tell me what you are looking for and I will work my magic to
                  help you find your perfect match.
                </Text>
              </Box>
              <Box
                px={"1rem"}
                py={"4em"}
                borderLeft={"1px"}
                borderLeftColor={"gray.100"}
              >
                <Image src={HelpCenterLogo} alt={"icon"} />
                <Heading py={"1rem"} fontSize={"2xl"} fontWeight={"semibold"}>
                  Help Center
                </Heading>
                <Text fontSize={"0.8rem"}>
                  Got a question? Look no further. Browse FAQs or submit your
                  query.
                </Text>
              </Box>
            </SimpleGrid>
            `
          </Container>
        </Stack>
      </Box>
    </Box>
  );
};

export default PurplleCredit;
