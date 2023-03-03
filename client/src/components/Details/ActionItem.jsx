import React,{ useState } from 'react'
import { Box, Button, styled } from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payusingPaytm } from '../../service/api';
import { post } from '../../utiles/paytm';

const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
      padding: '20px 40px'
    }
}))

const Image = styled('img')({
  padding: '15px 20px',
  border: '1px solid #f0f0f0',
  width: '90%'
});

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
      width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '48%'
    },
}))

const ActionItem = ({product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const { id } = product;
  const { price } = product

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate('/cart');
  }

  const buyNow = async () => {
    let response = await payusingPaytm({ amount: price.cost, email: 'mbfawwaz@gmail.com'})
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response.data
    }
    // console.log(response.data);
    post(information)
  }

  return (
    <LeftContainer>
        <Image src={product.detailUrl} alt='product'/>
        <StyledButton variant='contained' onClick={()=> addItemToCart()} style={{ marginRight: 10, background: '#ff9700'}}><ShoppingCartIcon />Add to Cart</StyledButton>
        <StyledButton variant='contained' onClick={()=> buyNow()} style={{ background: '#fb541b'}}><FlashOnIcon />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem