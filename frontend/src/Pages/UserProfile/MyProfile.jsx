import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MyProfile = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gridGap={"2em"}>
        <Stack
          px={"2em"}
          py={"2em"}
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          }
        >
          <Heading textAlign={"left"} fontWeight={"normal"} fontSize={"1rem"}>
            Personal Information
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 2 }} gridGap={"2rem"}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
          </SimpleGrid>
          <RadioGroup textAlign={"left"} name="gender">
            <Radio>Male</Radio>
            <Radio>Female</Radio>
          </RadioGroup>
          <Flex>
            <Button
              px={"2rem"}
              py={"1.3rem"}
              borderRadius={"0.2rem"}
              colorScheme={"purple"}
              textTransform={"uppercase"}
            >
              Update Profile
            </Button>
          </Flex>
        </Stack>

        <Stack
          px={"2em"}
          py={"2em"}
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          }
        >
          <Heading textAlign={"left"} fontWeight={"normal"} fontSize={"1rem"}>
            Addresses
          </Heading>
          <Flex>
            <Button
              px={"2rem"}
              py={"1.3rem"}
              borderRadius={"0.2rem"}
              colorScheme={"purple"}
              textTransform={"uppercase"}
            >
              Add Address
            </Button>
          </Flex>
        </Stack>

        <Box
          px={"2em"}
          py={"2em"}
          boxShadow={
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          }
        >
          <Heading textAlign={"left"} fontWeight={"normal"} fontSize={"1rem"}>
            Change Password
          </Heading>
          <VStack>
            <FormControl>
              <FormLabel>Current Password</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>New Password</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm New Password</FormLabel>
              <Input type="text" />
            </FormControl>
          </VStack>
          <Flex>
            <Button
              px={"2rem"}
              py={"1.3rem"}
              borderRadius={"0.2rem"}
              colorScheme={"purple"}
              textTransform={"uppercase"}
            >
              Save
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default MyProfile;
