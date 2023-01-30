import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure
  } from '@chakra-ui/react'

  import React from 'react'

function Navbar2(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return(<div style={{marginTop:"80px",border:"3px solid black",paddingLeft:"10%"}}>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div>
        <img src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg" alt='logo' />
      </div>
    </div>)
}

export default Navbar2