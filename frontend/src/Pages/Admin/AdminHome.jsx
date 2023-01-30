import React, { useEffect } from 'react'
import {Heading,Avatar,Box, chakra,Center, SimpleGrid,Image,  Stat,Flex,StatLabel,Text, StatNumber,Stack,Button,useColorModeValue,useToast} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../Redux/AllUser/action';
import { getPrimerData } from '../../Redux/Primer/action';
import { getFaceWashData } from '../../Redux/FaceWash/action';
import { getShampooData } from '../../Redux/Shampoo/action';




const AdminHome = () => {

  const dispatch=useDispatch()
  const {allUser}=useSelector(store=>store.AllUserReducer)
  const {primer}=useSelector((store)=>store.PrimerReducer)
  const {faceWash}=useSelector((store)=>store.FaceWashReducer)
  const {shampoo}=useSelector((store)=>store.ShampooReducer)

  const toast = useToast()
  useEffect(()=>
  { 
     dispatch(getPrimerData())
     dispatch(getAllUser())
     dispatch(getFaceWashData())
     dispatch(getShampooData())
   
  },[])

  return (
    <>

<Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Website Details
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            Total Users
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
           {allUser?.length}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          <BsPerson size={"30px"}/>
        </Box>
      </Flex>
    </Stat>




    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            Products Category
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            3
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          <MdProductionQuantityLimits size={"30px"}/>
        </Box>
      </Flex>
    </Stat>


    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            Ordered Today
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            3
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          <BiPurchaseTag size={"30px"}/>
        </Box>
      </Flex>
    </Stat>
       

      </SimpleGrid>
    </Box>
     

     <Heading textAlign={"center"} mt="50px">All Products Details</Heading>
     <Center py={6} gap="20px" flexDirection={["column","column","row"]}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://cdn.shopify.com/s/files/1/0039/6073/3763/collections/Untitled-1.jpg?v=1671104245'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/295966/nyle-naturals-damage-repair-shampoo-with-goodness-of-shikakai-and-hibiscus-400-ml_1_display_1652686620_8e8d7b15.jpg'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Hair Care
            </Heading>
            <Text color={'gray.500'}>Shampoo</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
           
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{shampoo?.length}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Products
              </Text>
            </Stack>
          </Stack>

      <Link to="/admin/hairProduct">  <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            View
          </Button></Link>  
        </Box>
      </Box>





      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://cdn.discordapp.com/attachments/702481980025077853/1069136277443727390/image.png'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/271960/ny-bae-dewy-face-primer-for-dry-skin-13-gm_6_display_1674198279_202cde6a.jpg'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Face Makeup
            </Heading>
            <Text color={'gray.500'}>Primer</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
           
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{primer?.length}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Products
              </Text>
            </Stack>
          </Stack>

          <Link to="/admin/faceMakeup"> <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            View
          </Button></Link>
        </Box>
      </Box>




      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://cdn.discordapp.com/attachments/702481980025077853/1069137344097177621/image.png'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/317574/mamaearth-ubtan-natural-face-wash-for-dry-skin-with-turmeric-and-saffron-for-tan-removal-and-skin-brightning-100-ml_10_display_1581057835_f66663f0.jpg'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Skin Care
            </Heading>
            <Text color={'gray.500'}>Face Wash</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
           
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{faceWash?.length}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Products
              </Text>
            </Stack>
          </Stack>

         <Link to={"/admin/faceWash"}> <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            View
          </Button></Link>
        </Box>
      </Box>

    </Center>
    </>
  )
}

export default AdminHome