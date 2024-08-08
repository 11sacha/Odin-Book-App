import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import navBar from './navBar/navBar'
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  
  return (
    <Box>
      <navBar />
      <Box 
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >

      </Box>
    </Box>
  )
}

export default HomePage