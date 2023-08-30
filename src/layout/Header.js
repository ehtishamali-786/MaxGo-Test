import { Box ,ButtonGroup,Button} from '@mui/material'
import React from 'react'
import { useDataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'

export const Header = () => {

    const {  getProperty,
        handleActive,
        isActive}=useDataContext();



  return (
   <Box>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Link to={'/tableView'}>
     <button >Table View </button>
     </Link>
     <Link to={'/CardView'}>
     <button>Card View </button>
     </Link>
    </ButtonGroup>
   </Box>
  )
}
