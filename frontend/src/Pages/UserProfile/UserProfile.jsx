import React from "react";
import {
  Avatar,
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
import beauty_logo from "./beauty-face-icon.png";
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import BeautyProfile from "./BeautyProfile";
import MyWishList from "./MyWishList";
import MyCoupons from "./MyCoupons";
import PurplleCredit from "./PurplleCredit";
import Payments from "./Payments";
import ReviewRatings from "./ReviewRatings";

const UserProfile = () => {
  return (
    <Box>
      <Stack pos={"relative"}>
        <Box h="6em"></Box>
        <Center>
          <UserAvatar />
        </Center>
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
                  <SimpleGrid
                    columns={{ base: 3, md: 4, lg: 8 }}
                    spacing={"1rem"}
                  >
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
                      <Avatar src={beauty_logo} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>Beauty Profile</Text>
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
                    <Tab
                      display={"grid"}
                      placeItems={"center"}
                      _selected={{
                        borderColor: "#e40980",
                        borderBottomWidth: "0.3rem",
                      }}
                    >
                      <Icon as={BsVectorPen} boxSize={"4em"} />
                      <Text textTransform={"uppercase"}>Review & Ratings</Text>
                    </Tab>
                  </SimpleGrid>
                </TabList>
              </Box>

              <Box>
                <TabPanels>
                  <TabPanel px={0} py={"2em"}>
                    <MyProfile />
                  </TabPanel>
                  <TabPanel px={0} py={"2em"}>
                    <MyOrders />
                  </TabPanel>
                  <TabPanel px={0} py={"2em"}>
                    <BeautyProfile />
                  </TabPanel>
                  <TabPanel px={0} py={"2em"}>
                    <MyWishList />
                  </TabPanel>
                  <TabPanel px={0} py={"2em"}>
                    <MyCoupons />
                  </TabPanel>
                  <TabPanel px={0} py={0}>
                    <PurplleCredit />
                  </TabPanel>
                  <TabPanel px={0} py={"2em"}>
                    <Payments />
                  </TabPanel>
                  <TabPanel px={0} py={"2em"}>
                    <ReviewRatings />
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
