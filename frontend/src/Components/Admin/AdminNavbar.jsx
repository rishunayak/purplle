// Bhavik Dholu fw20_0582
import {
    Box,
    Flex,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    AvatarBadge,
    Hide,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  
  function AdminNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const navigate = useNavigate();
    
    const navigation = (route)=>{
      //for navigate to all the pages
       navigate(route);
    }
  
    return (
      <Box bg="pink.200" p="5px" pl="10px" pr="20px">
        <Flex justifyContent={"space-between"} align="center">
          <Hide above="lg">
            {/* this drawer is only available when screen size is below larg screen */}
          <Box>
            <Button colorScheme="pink" ref={btnRef} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader >Admin panel</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                  {/* link provided to connect all the pages */}
                  <Button w="100%" mt="10px" onClick={()=>navigation("/")} colorScheme='pink' variant='outline'>Dashboard</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/addproduct")} colorScheme='pink' variant='outline'>Add Product</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/manageproduct")} colorScheme='pink' variant='outline'>Manage Product</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/manageorder")} colorScheme='pink' variant='outline'>Manage Order</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/manageuser")} colorScheme='pink' variant='outline'>Manage User</Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          </Hide>
          <Box>
            <Image src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt="logo" w={{base:"120px",sm:"140px"}} h={{base:"45px",sm:"50px"}}/>
          </Box>
          <Box>
            <Menu>
              <MenuButton>
                <Avatar>
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  export default AdminNavbar;
  