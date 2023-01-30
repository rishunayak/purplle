import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../Redux/User/action'
import {AiFillFacebook} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const initalValue={email:"",password:""}
    const [login,setLogin]=useState(initalValue)
    const {isError,isLoading,token}=useSelector(store=>store.AuthReducer)
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const handleLogin=()=>
    {
        dispatch(userLogin(login)).then(r=>{
          if(r.payload.token)
          {
            toast({
              title: 'Login',
              description: "Login Successfull",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            onClose()
          
          }
          else
          {
            toast({
              title: 'Register',
              description: r.payload,
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            
          }
        })
    }

    useEffect(()=>
    {
      
    },[token])
  return (
    <>
    <Button bg="#60f" p="0px 40px"  color={"white"} _hover={{bg:"#60f"}} onClick={onOpen}>Login</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"25px"}>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type={"email"} placeholder="Enter your Email" value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})} isRequired/>
            <Input type={"password"} placeholder="Enter your Password" mt="5px" value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} isRequired/>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button onClick={handleLogin} p="22px 40px" fontSize={"20px"}>
              Login
            </Button>
            
          </ModalFooter>
           <Text textAlign={"center"} fontSize="20px" mb="10px" color={"#9ea7ad"}>or connect with</Text>
          <Flex justifyContent={"center"} gap="10px" pb={"20px"}> 
            <Button p={"22px 40px"}><AiFillFacebook color='#3b5998' size={"20px"}/>FACEBOOK</Button> 
            <Button p={"22px 40px"}> <FcGoogle size={"20px"}/>GOOGLE</Button>
          </Flex>
        </ModalContent>
        
      </Modal>
    </>
  )
}

export default Login