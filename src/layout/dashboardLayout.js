import React from 'react'
import { Header } from './Header'
import { Box } from '@mui/material'

 const DashboardLayout = ({children}) => {
  return (
    <>
    <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: "10px",
        }}
      >
        <Box className="web-booking-home-main">
          <Header />
          <main>{children}</main>
        </Box>
      </Box>
    
    </>
  )
}
export default  DashboardLayout