import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Typography>
        
      </Typography>
    </Box>
  )
}

export default LoginPage