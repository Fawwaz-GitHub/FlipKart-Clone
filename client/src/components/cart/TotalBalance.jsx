import React,{ useState, useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'

const Heading = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`

const Header = styled(Typography)`
  color: #878787;
`

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`

const Price = styled(Box)`
  float: right;
`

const Discount = styled(Typography)`
  color: green;
  font-weight: 600;
`

const TotalBalance = ({cartItems}) => {

  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    totalAmount();
  }, [cartItems])
  

  const totalAmount = () => {
    let price = 0
    let discount = 0
    cartItems.map(item => {
      return price += item.price.mrp
    })
    cartItems.map(item => {
      return discount += ( item.price.mrp - item.price.cost )
    })
    setPrice(price)
    setDiscount(discount)
  }

  return (
    <Box>
      <Heading>
        <Header>PRICE DETAILS</Header>
      </Heading>
      <Container>
        <Typography>Price ({cartItems?.length} Items)
          <Price component='span'>₹{price}</Price>
        </Typography>
        <Typography>Discount
          <Price component='span'>-₹{discount}</Price>
        </Typography>
        <Typography>Delivery Charges
          <Price component='span'>₹40</Price>
        </Typography>
        <Typography variant='h6'>Total Amount
          <Price component='span'>₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You Will Save ₹{discount - 40} On This Order</Discount>
      </Container>
    </Box>
  )
}

export default TotalBalance