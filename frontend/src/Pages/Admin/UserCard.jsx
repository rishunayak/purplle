import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';


const UserCard = ({data,updateAdmin}) => {
  
  return (
    <>
    <Center py={6} >
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Box  display="flex" justifyContent={"center"}><BsPerson size={"50px"} /></Box>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {data.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {data.email}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Registered On :- {data.date}
        </Text>

        

        <Stack mt={8} direction={'row'} spacing={4}>
        <Link to={`/admin/singleUser/${data._id}`}>  <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
            
            >
            View More
          </Button></Link>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={()=>updateAdmin(data)}
            >
            {data.isAdmin?"Remove Admin":"Add Admin"}
          </Button>
        </Stack>
      </Box>
    </Center>
    
    </>
  )
}

export default UserCard