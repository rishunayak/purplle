import {Box,Button, Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerHeader, DrawerOverlay,Flex,Image,Input,InputGroup,InputRightElement,Text,useDisclosure,useToast,Link} from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"
//import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";

//import { userLogin, userLogout } from '../Redux/auth/auth.actions'
const isAuth=false
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const dispatch = useDispatch()
  //const cartItems = useSelector((state) => state.cartManager.products);
  //const username = useSelector((state) => state.authManager.userdata.username);
  //const isAuth = useSelector((state) => state.authManager.isAuth)
 //const btnRef = React.useRef();
  //const toast = useToast();
  /*
  const handleLogOut = () => {
    if (!isAuth) {
        toast({
            position: 'top-left',

            duration: 1200,

            render: () => (
                <Flex color='white' border="4px solid white" p={"10px"} bgColor='red' >

                    <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">You have not Signed in yet!!!</Text>
                </Flex >
            ),
        })

    } else {

        toast({
            position: 'top-left',
            duration: 1200,
            render: () => (
                <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">You have not Signed Out Successfully!!!</Text>
                </Flex >
            ),
        })
        dispatch(userLogout())
    }



}
*/
  return (
    <div>


      <Box position={'fixed'} top='50px' zIndex={100} bgColor='white' w='100%'>
        <Box id="after-top"  >
          <Box>
            <Link to='/'>
              <Image className="logo" src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt="logo"/>
            </Link>
          </Box>

          <div id="search-bar">
            <InputGroup>
              <Input placeholder="Search for a Product or a Brand" />
              <InputRightElement  />
            </InputGroup>
          </div>

          <div style={{ display: "flex", gap: "50px" }}>
            <div id="dropdown-account">
              <div >
                <Link to="/login" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <VscAccount color="#6b3293" size="1.6em" />
                  <Text>{isAuth ? "username" : "Account"}</Text>
                </Link>
              </div>
              <div id="dropdown-account-content">
              {isAuth?<Button colorScheme="none" w="full" bgColor="black" borderRadius={0}>
                  LOGOUT
                </Button>:<Link to="/login"><Button
                colorScheme="none"
                w="full"
                bgColor="black"
                borderRadius={0}
              >
                LOGIN
              </Button></Link>
              }
                <Link to="/signup">
                  <Button colorScheme="none"  mt={4}  borderRadius={0}  color="black"  w="full"  variant="outline"  >
                    REGISTER
                  </Button>
                </Link>

                <div  style={{  textAlign: "left",  display: "flex",  flexDirection: "column",  gap: "15px",  marginTop: "20px",  fontSize: "16px",}}>
                  <p>Wishlist</p>
                  <p>Your Orders</p>
                  <p>Your Referrels</p>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <Link to="/cart"><div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <div id="cart-icon">
                  <FaShoppingCart color="#6b3293" size="1.6em" />
                  <p className="cartValue">{"cartItems.length"}</p>
                </div>

                <Text>Cart</Text>
              </div></Link>
              <div class="dropdown-content">
                <p>{`There are currently ${"cartItems.length"} items in your cart.`}</p>
              </div>
            </div>
          </div>
        </Box>

        <Box id="menu_nav" style={{ borderTop: "1px solid gainsboro" }} borderBottom='1px solid gainsboro'>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-evenly"
            width="84%"
            margin="auto"
            id="hover-black"
          >
            
            <div id="menu-dropdown">
              <Link to='/holiday'><div id="menu-title">Makeup</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Face Makeup
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Primer</p></Link>
                      <Link to=''><p>Concealer</p></Link>
                      <Link to=''><p>BB & CC Cream</p></Link>
                      <Link to=''><p>Foundation</p></Link>
                      <Link to=''><p>ompact</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Lip Makeup
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''> <p>Lipstick</p></Link>
                      <Link to=''> <p>Liquid Lipstick</p></Link>
                      <Link to=''> <p>Lip Crayon</p></Link>
                      <Link to=''> <p>Luxury Holiday Gifts</p></Link>
                      <Link to=''> <p>Lip Liner</p></Link>
                      <Link to=''> <p>Lip Gloss</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Brushes & Tools
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Face Brushes</p></Link>
                      <Link to=''><p>Eye Brushes</p></Link>
                      <Link to=''><p>Lip Brushes</p></Link>
                      <Link to=''><p>Brush Sets</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p
                      style={{
                        paddingTop: "15px",
                        textAlign: "left",
                        borderTop: "1px solid gray",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Eye Makeup
                    </p>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Link to=''><p>Eyeliner</p></Link>
                      <Link to=''><p>Under eye Concealers</p></Link>
                      <Link to=''><p>Eyeshadow</p></Link>
                      <Link to=''><p>Kajal</p></Link>
                      <Link to=''><p>Mascara</p></Link>
                      <Link to=''><p>False Eyelashes</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
           
            <div id="menu-dropdown">
              <Link to="/skincare"><div id="menu-title">Skin Care</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p style={{  paddingTop: "15px",  textAlign: "left",  borderTop: "1px solid gray", fontWeight: "bold",  marginBottom: "20px", }}>
                      Face Makeup
                    </p>
                    <div style={{  textAlign: "left",  display: "flex",  flexDirection: "column",  gap: "10px",}}>
                      <Link to=''><p>Primer</p></Link>
                      <Link to=''><p>Concealer</p></Link>
                      <Link to=''><p>BB & CC Cream</p></Link>
                      <Link to=''><p>Foundation</p></Link>
                      <Link to=''><p>ompact</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p style={{   paddingTop: "15px",   textAlign: "left",   borderTop: "1px solid gray",   fontWeight: "bold",   marginBottom: "20px", }}>
                      Lip Makeup
                    </p>
                    <div style={{  textAlign: "left",  display: "flex",  flexDirection: "column",  gap: "10px",}}>
                      <Link to=''> <p>Lipstick</p></Link>
                      <Link to=''> <p>Liquid Lipstick</p></Link>
                      <Link to=''> <p>Lip Crayon</p></Link>
                      <Link to=''> <p>Luxury Holiday Gifts</p></Link>
                      <Link to=''> <p>Lip Liner</p></Link>
                      <Link to=''> <p>Lip Gloss</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p style={{  paddingTop: "15px",  textAlign: "left",  borderTop: "1px solid gray",  fontWeight: "bold",  marginBottom: "20px",}}>
                      Brushes & Tools
                    </p>
                    <div style={{  textAlign: "left",  display: "flex",  flexDirection: "column",  gap: "10px",}}>
                      <Link to=''><p>Face Brushes</p></Link>
                      <Link to=''><p>Eye Brushes</p></Link>
                      <Link to=''><p>Lip Brushes</p></Link>
                      <Link to=''><p>Brush Sets</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p style={{  paddingTop: "15px",  textAlign: "left",  borderTop: "1px solid gray",  fontWeight: "bold",  marginBottom: "20px",}}>
                      Eye Makeup
                    </p>
                    <div  style={{    textAlign: "left",    display: "flex",    flexDirection: "column",    gap: "10px",  }}>
                      <Link to=''><p>Eyeliner</p></Link>
                      <Link to=''><p>Under eye Concealers</p></Link>
                      <Link to=''><p>Eyeshadow</p></Link>
                      <Link to=''><p>Kajal</p></Link>
                      <Link to=''><p>Mascara</p></Link>
                      <Link to=''><p>False Eyelashes</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to='/hair'><div id="menu-title">Hair Care</div></Link>
              <div className="menu-dropdown-content">
                <Box display="flex" gap="50px" pt={5} padding="20px">
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p  style={{paddingTop: "15px",textAlign: "left",borderTop: "1px solid gray",fontWeight: "bold",    marginBottom: "20px",  }}>
                      Face Makeup
                    </p>
                    <div style={{    textAlign: "left",    display: "flex",    flexDirection: "column",    gap: "10px",  }}>
                      <Link to=''><p>Primer</p></Link>
                      <Link to=''><p>Concealer</p></Link>
                      <Link to=''><p>BB & CC Cream</p></Link>
                      <Link to=''><p>Foundation</p></Link>
                      <Link to=''><p>ompact</p></Link>
                    </div>
                  </div>
                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p  style={{    paddingTop: "15px",    textAlign: "left",    borderTop: "1px solid gray",    fontWeight: "bold",    marginBottom: "20px",  }}>
                      Lip Makeup
                    </p>
                    <div  style={{    textAlign: "left",    display: "flex",    flexDirection: "column",    gap: "10px",  }}>
                      <Link to=''> <p>Lipstick</p></Link>
                      <Link to=''> <p>Liquid Lipstick</p></Link>
                      <Link to=''> <p>Lip Crayon</p></Link>
                      <Link to=''> <p>Luxury Holiday Gifts</p></Link>
                      <Link to=''> <p>Lip Liner</p></Link>
                      <Link to=''> <p>Lip Gloss</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p  style={{    paddingTop: "15px",    textAlign: "left",    borderTop: "1px solid gray",    fontWeight: "bold",    marginBottom: "20px",  }}>
                      Brushes & Tools
                    </p>
                    <div  style={{    textAlign: "left",    display: "flex",    flexDirection: "column",    gap: "10px",  }}>
                      <Link to=''><p>Face Brushes</p></Link>
                      <Link to=''><p>Eye Brushes</p></Link>
                      <Link to=''><p>Lip Brushes</p></Link>
                      <Link to=''><p>Brush Sets</p></Link>
                    </div>
                  </div>

                  <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                    <p  style={{    paddingTop: "15px",    textAlign: "left",    borderTop: "1px solid gray",    fontWeight: "bold",    marginBottom: "20px",  }}>
                      Eye Makeup
                    </p>
                    <div  style={{    textAlign: "left",    display: "flex",    flexDirection: "column",    gap: "10px",  }}>
                      <Link to=''><p>Eyeliner</p></Link>
                      <Link to=''><p>Under eye Concealers</p></Link>
                      <Link to=''><p>Eyeshadow</p></Link>
                      <Link to=''><p>Kajal</p></Link>
                      <Link to=''><p>Mascara</p></Link>
                      <Link to=''><p>False Eyelashes</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div>
              <Link to=''><div id="menu-title">Applicances</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Personal Care</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Men</div></Link>
            </div>
            <div>
              <Link to=""><div id="menu-title">Fragance</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Health & Wellness</div></Link>
            </div>
            <div>
              <Link to=''><div id="menu-title">Mom & Baby</div></Link>
            </div>
          </Box>
        </Box>
      </Box>


      <div id="mobile_bar">
        <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
        <div style={{ marginLeft: "10px" }}>
          <Link to="/">
            <img style={{ width: "100px", height: "25px" }} src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt="logo" />
          </Link>
        </div>
          <div style={{ marginLeft: "10px" }}>
            <HiMenu  colorScheme="teal" onClick={onOpen} size="1.6em" />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
             
              height="100vh"
              size="xs"
              
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                {
                  isAuth? <DrawerHeader mt={12} onClick = {onClose} display="flex" gap={12}>
                    <Text > {isAuth ? "Hii " + "username" : "Account"}</Text>
                    <Button bgColor="black" color="white" colorScheme="none" >Logout</Button>
                 
                </DrawerHeader> : <DrawerHeader mt={12}>
                <Link to="/login" onClick={onClose}>
                  <Button bgColor="black" color="white" colorScheme="none">Login</Button>
                </Link>
                <Link to="/signup" onClick={onClose}>
                  <Button variant="outline" border=" 1px solid black" ml={4} colorScheme="none">Register</Button>
                </Link>
              </DrawerHeader>
                }

                <DrawerBody>
                  <Box display="flex" flexDirection="column" gap="20px">
                    <Link to="" onClick={onClose}>Makeup</Link>
                    <Link to="" onClick={onClose}>Skin Care</Link>
                    <Link to="" onClick={onClose}>Hair Care</Link>
                    <Link to="" onClick={onClose}>Applicances</Link>
                    <Link to="" onClick={onClose}>Personal Care</Link>
                    <Link to="" onClick={onClose}>Men</Link>
                    <Link to="" onClick={onClose}>Fregance</Link>
                    <Link to="" onClick={onClose}>Health & Wellness</Link>
                    <Link to="" onClick={onClose}>Mon & Baby</Link>
                  </Box>
                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div style={{ marginLeft: "10px" ,marginRight:"10px"}}>
            <InputGroup>
              <Input placeholder="Search Product" />
              <InputRightElement  />
            </InputGroup>
          </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Link to="/login">
            <VscAccount color="#6b3293" size="1.2em" />
          </Link>
          <div class="dropdown" style={{ paddingRight: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <Link to="/cart">
                  <FaShoppingCart color="#6b3293" size="1.2em" />
                  <p className="cartValue">{'cartItems.length'}</p>
                </Link>

              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Navbar;        
