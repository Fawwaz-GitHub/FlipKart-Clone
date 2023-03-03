import React,{ useState, useContext } from 'react'
import { Box, Button, Typography, styled, Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import LoginDialog from '../login/LoginDialog'
import { DataContext } from '../../context/DataProvider'
import Profile from './Profile'
import { useSelector } from 'react-redux'

const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
  gap: '40px',
  paddingLeft: '20px',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}))

const CartContainer = styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}))


const LoginButton = styled(Button)`
    background-color: #ffffff;
    color: #2874f0;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 30px;
`

function CustomButtons() {

  const [ open, setOpen ] = useState(false)
  const { account,setAccount } = useContext(DataContext)
  const { cartItems } = useSelector(state => state.cart)
  const openDialog = () => {
    setOpen(true)
  }

  return (
    <Wrapper>
      { account ? <Profile account={account} setAccount={setAccount} /> :
        <LoginButton variant='contained' onClick={()=> openDialog()}>Login</LoginButton>
      }
        <Typography style={{ fontWeight: 600, fontSize: 14 }}>Become a Seller</Typography>
        <Typography style={{ fontWeight: 600, fontSize: 14 }}>More</Typography>

        <CartContainer to='/cart'>
          <Badge badgeContent={cartItems?.length} color='secondary'>
            <ShoppingCart />
          </Badge>
            <Typography style={{ fontWeight: 600, fontSize: 14, marginLeft: 10 }}>Cart</Typography>
        </CartContainer>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons