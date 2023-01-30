import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillFacebook} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { userRegister } from '../../Redux/User/action'

const Register = () => {
    const initalValue={email:"",password:"",name:""}
    const [register,setRegister]=useState(initalValue)
    const {isError,isLoading,token,msg}=useSelector(store=>store.AuthReducer)
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const handleRegister=()=>
    {
        dispatch(userRegister(register)).then(r=>{ 
       
          if(r.payload.msg)
          {
            toast({
              title: 'Register',
              description: r.payload.msg,
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

          }})}

   


  return (
    <>
    <Button bg="none" border="0px" color={"#ec008c"} _hover={{bg:"none"}} onClick={onOpen}>Register</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"25px"}>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input type={"text"} placeholder="Enter your Name" value={register.register} onChange={(e)=>setRegister({...register,name:e.target.value})} isRequired/>
            <Input type={"email"} placeholder="Enter your Email" value={register.register} onChange={(e)=>setRegister({...register,email:e.target.value})} mt="5px" isRequired/>
            <Input type={"password"} placeholder="Enter your Password" mt="5px" register={register.password} onChange={(e)=>setRegister({...register,password:e.target.value})} isRequired/>
          </ModalBody>

         
          <ModalFooter justifyContent={"center"}>
            <Button onClick={handleRegister} p="22px 40px" fontSize={"20px"}>
            Register
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

export default Register