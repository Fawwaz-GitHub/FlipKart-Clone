import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material';

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
`

const ColumnText = styled(TableRow)`
    font-size: 34px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({product}) => {
  return (
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{ margintop: 5, color: '#878787', fontSize: 14}}>
            8 Ratings & 2 Reviews
            <Box component="span"><img src={fassured} alt='fassured' style={{ width: 77, marginLeft: 20}}/></Box>
        </Typography>
        <Typography>
            <Box component='span' style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#878787'}}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: '#388e3c'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>10% off on Axis Bank Credit Card and Credit Card EMI Trxns, up to ₹1750.On orders of ₹5000 and above</Typography>
            <Typography><StyledBadge/>10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,750. On orders of ₹5,000 and above</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card</Typography>
            <Typography><StyledBadge/>Buy this product and get upto ₹500 off on Flipkart Furniture</Typography>
            <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹1000*</Typography>
            <Typography><StyledBadge/>Get extra 74% off (price inclusive of cashback/coupon)</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                    <TableCell >
                        <Box component='span' style={{ color: '#2874f0' }}>MaxMarts</Box>
                        <Typography>GST Invoice Available</Typography>
                        <Typography>View More Seller Starting From ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{width: 390}} alt='FlipKartPoints'/>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>
  )
}

export default ProductDetail