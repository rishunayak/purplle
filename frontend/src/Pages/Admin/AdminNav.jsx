import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
   
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';

import Login from '../Login/Login'
import Register from '../Register/Register'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../Redux/User/action';

function AdminNav() {
    const {isError,isLoading,token}=useSelector(store=>store.AuthReducer)
    const dispatch=useDispatch()
    const handleLogout=()=>
    {
      localStorage.removeItem("token")
      dispatch(userLogin())
    }

  return (
     <>
       <Box>
         <Flex justifyContent="space-between" p="20px 50px" boxShadow="2xl" alignItems={"center"}>
            <Flex fontSize="20px" gap="10px" fontWeight="bold" >
           <Link to="/admin"> <Box p={2}  fontWeight={500} _hover={{textDecoration: 'none',}} >
                Home
              </Box></Link>
            <Popover trigger={'hover'} placement={'bottom-start'}>
             <PopoverTrigger>
               <Box p={2}  fontWeight={500} _hover={{textDecoration: 'none',}}>
                Product
              </Box>
            </PopoverTrigger>

              <PopoverContent border={"1px solid black"} boxShadow={'xl'} p={4} rounded={'xl'} >
                <Stack>
                  <Link to="/admin/hairProduct"><Box role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }} >
                  <Stack direction={'row'} align={'center'}>
                   <Box>
                    <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}> Hair Product
                    </Text>
                   </Box>
                   <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                   </Flex>
                 </Stack>
                 </Box>
                 </Link>
                </Stack>

                <Stack>
                  <Link to="/admin/faceMakeup">
                 <Box role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }} >
                  <Stack direction={'row'} align={'center'}>
                   <Box>
                    <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}> Face Makeup
                    </Text>
                   </Box>
                   <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                   </Flex>
                 </Stack>
                 </Box></Link>
                </Stack>

                <Stack>
                  <Link to="/admin/faceWash">
                  <Box role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }} >
                  <Stack direction={'row'} align={'center'}>
                   <Box>
                    <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}> Face Wash
                    </Text>
                   </Box>
                   <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                   </Flex>
                 </Stack>
                 </Box></Link>
                </Stack>

              </PopoverContent>
            
            </Popover>

               
             <Link to={"/admin/allUser"}><Box p={2}  fontWeight={500} _hover={{textDecoration: 'none',}}>
                Users
              </Box></Link>
              <Link to="/admin/addProduct">
                <Box p={2}  fontWeight={500} _hover={{textDecoration: 'none'}}>Add Product</Box>
              </Link>
            </Flex>
            <Box>
              {token=="" || token==undefined?<><Login/> </>:<Button onClick={handleLogout}>Logout</Button>}
            </Box>
         </Flex>
       </Box>
     </>
  )
}


export default AdminNav







// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Button,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
//   } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
  
//   export default function WithSubnavigation() {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue('white', 'gray.800')}
//           color={useColorModeValue('gray.600', 'white')}
//           minH={'60px'}
//           py={{ base: 2 }}
//           px={{ base: 4 }}
//           borderBottom={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.900')}
//           align={'center'}>
//           <Flex
//             flex={{ base: 1, md: 'auto' }}
//             ml={{ base: -2 }}
//             display={{ base: 'flex', md: 'none' }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={'ghost'}
//               aria-label={'Toggle Navigation'}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//             <Text
//               textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//               fontFamily={'heading'}
//               color={useColorModeValue('gray.800', 'white')}>
//               Logo
//             </Text>
  
//             <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//               <DesktopNav />
//             </Flex>
//           </Flex>
  
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={'flex-end'}
//             direction={'row'}
//             spacing={6}>
//             <Button
//               as={'a'}
//               fontSize={'sm'}
//               fontWeight={400}
//               variant={'Button'}
//               href={'#'}>
//               Sign In
//             </Button>
//             <Button
//               display={{ base: 'none', md: 'inline-flex' }}
//               fontSize={'sm'}
//               fontWeight={600}
//               color={'white'}
//               bg={'pink.400'}
//               href={'#'}
//               _hover={{
//                 bg: 'pink.300',
//               }}>
//               Sign Up
//             </Button>
//           </Stack>
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </Box>
//     );
//   }
  
//   const DesktopNav = () => {
//     const ButtonColor = useColorModeValue('gray.600', 'gray.200');
//     const ButtonHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Button
//                   p={2}
//                   href={navItem.href ?? '#'}
//                   fontSize={'sm'}
//                   fontWeight={500}
//                   color={ButtonColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: ButtonHoverColor,
//                   }}>
//                   {navItem.label}
//                 </Button>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Button
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Button>
//     );
//   };
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         display={{ md: 'none' }}>
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Button}
//           href={href ?? '#'}
//           justify={'space-between'}
//           align={'center'}
//           _hover={{
//             textDecoration: 'none',
//           }}>
//           <Text
//             fontWeight={600}
//             color={useColorModeValue('gray.600', 'gray.200')}>
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={'solid'}
//             borderColor={useColorModeValue('gray.200', 'gray.700')}
//             align={'start'}>
//             {children &&
//               children.map((child) => (
//                 <Button key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Button>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  

  
//   const NAV_ITEMS = [
//     {
//       label: 'Inspiration',
//       children: [
//         {
//           label: 'Explore Design Work',
//           subLabel: 'Trending Design to inspire you',
//           href: '#',
//         },
//         {
//           label: 'New & Noteworthy',
//           subLabel: 'Up-and-coming Designers',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Find Work',
//       children: [
//         {
//           label: 'Job Board',
//           subLabel: 'Find your dream design job',
//           href: '#',
//         },
//         {
//           label: 'Freelance Projects',
//           subLabel: 'An exclusive list for contract work',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'Learn Design',
//       href: '#',
//     },
//     {
//       label: 'Hire Designers',
//       href: '#',
//     },
//   ];