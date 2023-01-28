import React from "react";
import { Avatar, Container, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsCamera } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

const UserAvatar = () => {
  return (
    <Container
      maxW={"fit-content"}
      pos={"absolute"}
      top={"14%"}
      left={"40%"}
      zIndex={100}
    >
      <Flex alignItems={"center"} gap={"1rem"}>
        <Avatar
          pos={"relative"}
          src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1493299751_female.png"
          padding={"5px"}
          border={"2px solid black"}
          bg={"#fff"}
          size={"xl"}
        >
          <Icon
            as={BsCamera}
            padding={"0.5"}
            rounded={"full"}
            pos={"absolute"}
            bottom={0}
            right={0}
            boxSize="0.8em"
            bg={"#fff"}
            color={"#2c414c"}
          />
        </Avatar>
        <Text fontWeight={"bold"}>User email</Text>
        <Icon as={MdModeEditOutline} />
      </Flex>
    </Container>
  );
};

export default UserAvatar;
