import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
<Stack direction={'row'}justifyContent={'space-around'}>
   <Link to={'/'}> home</Link>
   <Link to={'/about'}> about</Link >
  <Link to={'/contact'}> <Typography>contact</Typography></Link> 

</Stack>

    </div>
  )
}
