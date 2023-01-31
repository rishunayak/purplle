import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { patchShampooData } from '../../Redux/Shampoo/action'

const EditProduct = ({product,handleEdit}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [current,setCurrent]=useState(product)
    const disptach=useDispatch()
    useEffect(()=>
    {
       
    },[product])
  
 
  return (
    <>
    <Button onClick={onOpen}>EDIT</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"25px"}>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"grid"} gap="10px">
            <Input type={"text"} placeholder="Image Url" value={current.image} onChange={(e)=>setCurrent({...current,image:e.target.value})}/>
            <Input type={"text"} placeholder="Product Name" value={current.product_name} onChange={(e)=>setCurrent({...current,product_name:e.target.value})}/>
            <Input type={"text"} placeholder="Offer" value={current.category} onChange={(e)=>setCurrent({...current,category:e.target.value})}/>
            <Input type={"text"} placeholder="Offer" value={current.offer} onChange={(e)=>setCurrent({...current,offer:e.target.value})}/>
            <Input type={"number"} placeholder="Product Price" value={current.price} onChange={(e)=>setCurrent({...current,price:e.target.value})}/>
            <Input type={"number"} placeholder="Product Discount Price" value={current.d_price} onChange={(e)=>setCurrent({...current,d_price:e.target.value})}/>
            <Input type={"text"} placeholder="Offer" value={current.size} onChange={(e)=>setCurrent({...current,size:e.target.value})}/>

          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button  p="22px 40px" fontSize={"20px"} onClick={()=>handleEdit(current)}>
              Submit
            </Button>
            
          </ModalFooter>
         
        </ModalContent>
        
      </Modal>
    </>
  )
}

export default EditProduct