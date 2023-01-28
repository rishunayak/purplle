//Bhavik Dholu fw20_0582

// Admin sidebar is available only for large screen it will be hide when website open on small screeen 
import React from 'react';
import { 
    Box, 
    SimpleGrid } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const links_to_allRoutes = [
  {
    link : '/',
    title : 'Dashboard'
  },
  {
    link : '/addproduct',
    title : 'Add Product'
  },
  {
    link : '/manageproduct',
    title : 'Manage Product'
  },
  {
    link : '/manageorder',
    title : 'Manage Order'
  },
  {
    link : '/manageuser',
    title : 'Manage User'
  }
]

function AdminSidebar() {

  const activeStyle = {
    backgroundColor : "#FF147B",
    color : "white",
    padding : "10px",
    borderRadius : "10px"
  };

  const deActiveStyle = {
    border : "2px solid #FF147B",
    borderRadius : "10px",
    padding : "10px",
  }

  return (
    <Box bg="pink.200" color='black' w='100%' h='100%' p='20px' pt='40px'>
      <SimpleGrid spacing={5}>
        {
          links_to_allRoutes.map((link)=><NavLink key={link.link} to={link.link} style={({ isActive }) =>
          isActive ? activeStyle : deActiveStyle
        }>
        {link.title}
    </NavLink>)
        }
      </SimpleGrid>
    </Box>
  )
}

export default AdminSidebar