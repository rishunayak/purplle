import React from "react";
import {
  Box,
  Center,
  Icon,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { BsWallet2, BsVectorPen } from "react-icons/bs";
import { TiStarburstOutline } from "react-icons/ti";
import { TbCreditCard } from "react-icons/tb";
import { VscGift } from "react-icons/vsc";
import UserAvatar from "./UserAvatar";

const UserProfile = () => {
  return (
    <Box>
      <Stack pos={"relative"}>
        <Box h="6em"></Box>
        <UserAvatar />
        <Box h="10em" bg={"#e40980"} pos={"relative"}>
          <Stack
            pos={"absolute"}
            top={"6em"}
            left={"1rem"}
            right={"1rem"}
            borderRadius={"0.5rem"}
            bg={"#fff"}
          >
            <Tabs align="center" isFitted={true}>
              <Box
                borderRadius={"0.5rem"}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              >
                <TabList maxH={"fit-content"} mx={"3em"} border={0}>
                  <SimpleGrid columns={{ base: 3, md: 6 }} spacing={"1rem"}>
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={BiSmile} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>My Profile</Text>
                    </Tab>
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={VscGift} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>My Orders</Text>
                    </Tab>
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={AiOutlineHeart} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>My Wishlist</Text>
                    </Tab>
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={TiStarburstOutline} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>My Coupons</Text>
                    </Tab>
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={BsWallet2} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>Purplle Credit</Text>
                    </Tab>
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={TbCreditCard} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>Payments</Text>
                    </Tab>
                  </SimpleGrid>
                </TabList>
                <Center display={"grid"} placeItems={"center"} py={"1rem"}>
                  <Icon as={BsVectorPen} boxSize={"4em"} />
                  <Text textTransform={"uppercase"}>Review & Ratings</Text>
                </Center>
              </Box>

              <Box border={"0px"}>
                <TabPanels>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Box>
            </Tabs>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserProfile;
