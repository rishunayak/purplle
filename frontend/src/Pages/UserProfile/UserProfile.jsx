import React from "react";
import {
  Box,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import { TiStarburstOutline } from "react-icons/ti";
import { VscGift } from "react-icons/vsc";
import UserAvatar from "./Pages/UserProfile/Avatar";

const UserProfile = () => {
  return (
    <Box>
      <Stack pos={"relative"}>
        <Box h="6em"></Box>
        <UserAvatar />
        <Box h="10em" bg={"#e40980"}></Box>
      </Stack>
      <Stack mx={"3"} border={"2px"}>
        <Tabs>
          <Box h={"100px"}>
            <TabList>
              <Tab borderColor={"#e40980"}>
                <Icon as={BiSmile} size={"2xl"} />
              </Tab>
              <Tab>
                <Icon as={VscGift} />
              </Tab>
              <Tab>
                <Icon as={AiOutlineHeart} />
              </Tab>
              <Tab>
                <Icon as={TiStarburstOutline} />
              </Tab>
              <Tab>
                <Icon as={BsWallet2} />
              </Tab>
            </TabList>
          </Box>

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
        </Tabs>
      </Stack>
    </Box>
  );
};

export default UserProfile;
