import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const MyProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              onClick={onOpen}
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

      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform={"uppercase"}>Add Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"grid"} rowGap="1rem">
            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 100px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
              isRequired
            >
              <FormLabel>Name</FormLabel>
              <Select icon={<MdArrowDropDown />} variant={"flushed"}>
                <option value={"Mr"}>Mr.</option>
                <option value={"Ms"}>Ms.</option>
              </Select>
              <Input type="text" variant={"flushed"} />
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
              isRequired
            >
              <FormLabel>Pin Code</FormLabel>
              <Input type="text" variant={"flushed"} placeholder="Pin Code" />
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
              isRequired
            >
              <FormLabel>Address</FormLabel>
              <Textarea
                resize={"horizontal"}
                variant={"flushed"}
                placeholder="Address"
              ></Textarea>
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
            >
              <FormLabel>Landmark</FormLabel>
              <Input type="text" variant={"flushed"} placeholder="Landmark" />
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
            >
              <FormLabel>City</FormLabel>
              <Input type="text" variant={"flushed"} placeholder="City" />
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
            >
              <FormLabel>State</FormLabel>
              <Input type="text" variant={"flushed"} placeholder="State" />
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
            >
              <FormLabel>Country</FormLabel>
              <Select variant={"flushed"}>
                <option value="India">
                  INDIA (SERVIVE AVAILABLE ONLY IN INDIA)
                </option>
              </Select>
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 1fr"}
              columnGap={"0.5rem"}
              alignItems={"center"}
              isRequired
            >
              <FormLabel>Mobile No</FormLabel>
              <Input type="text" variant={"flushed"} placeholder="Mobile No" />
            </FormControl>

            <FormControl
              display={"grid"}
              gridTemplateColumns={"120px 100px"}
              columnGap={"0.5rem"}
              alignItems={"center"}
            >
              <FormLabel>Address Type</FormLabel>
              <Select variant={"flushed"}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Others">Others</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MyProfile;
