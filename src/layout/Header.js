import { Box ,ButtonGroup,Button} from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
   <Box>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <button>Table View </button>
     <button>Card View </button>
    </ButtonGroup>
   </Box>
  )
}
