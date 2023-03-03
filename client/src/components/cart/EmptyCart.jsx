import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Component = styled(Box)`
    height: 60vh;
    width: 80%;
    background: #fff;
    margin: 80px 140px;
`

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`



const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

const EmptyCart = () => {
  return (
    <Component>
        <Container>
            <img src={imgurl} alt='empty' style={{ width: '15%'}}/>
            <Typography>Your Cart Is Empty</Typography>
            <Typography>Add Items To It Now</Typography>
        </Container>
    </Component>
  )
}

export default EmptyCart