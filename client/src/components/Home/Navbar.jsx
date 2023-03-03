import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { navData } from '../../constants/data'

const Component = styled(Box)(({theme})=>({
  display: 'flex',
  margin: '55px 50px 0 50px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]:{
    margin: 0
  }
}))

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`

function Navbar() {
  return (
    <Box style={{ background: '#fff'}}>
    <Component>
       {
        navData.map(data => {
          return (
          <Container>
            <img src={data.url} alt="Nav" style={{ width: 64}} />
            <Text>{data.text}</Text>
          </Container>
          )
        })
       } 
    </Component>
    </Box>
  )
}

export default Navbar