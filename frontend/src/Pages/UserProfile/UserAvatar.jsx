import React from "react";
import { Avatar, Container, Flex, Skeleton, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsCamera } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../Redux/User/action";

const UserAvatar = () => {
   
  const dispatch=useDispatch()
  
  const {isLoading,isError,user}=useSelector((store)=>store.AuthReducer)

  useEffect(()=>
  {
    dispatch(userInfo())
  },[])

  if(isLoading)
  {
    return (<Stack w={"90%"} m="auto" mt={"50px"}>
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
    </Stack>)
  }

  return (
    <Container
      maxW={"fit-content"}
      pos={"absolute"}
      top={"14%"}
      left={"40vw"}
      zIndex={100}
    >
      <Flex alignItems={"center"} gap={"1rem"}>
        <Tooltip label="Edit Profile" hasArrow>
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
        </Tooltip>
        <Text fontWeight={"bold"}>{user.email}</Text>
        <Icon as={MdModeEditOutline} />
      </Flex>
    </Container>
  );
};

export default UserAvatar;
