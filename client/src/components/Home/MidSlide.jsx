import React from 'react'
import { Box, styled } from '@mui/material'
import Slide from './slide'

const Components = styled(Box)`
    display: flex;
`
const LeftComponents = styled(Box)(({theme}) =>({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width: '100%',
    }
}))
    

const RightComponents = styled(Box)(({ theme })=> ({
    background: '#ffffff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '17%',
    textAlign: 'center',
    paddingTop: 20,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const adUrl = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70'

function MidSlide({ products, title, timer }) {
  return (
    <Components>
        <LeftComponents>
            <Slide products={products} title={title} timer={timer}/>
        </LeftComponents>
        <RightComponents>
            <img src={adUrl} alt='ad' style={{ width: 215 }} /> 
        </RightComponents>
    </Components>
  )
}

export default MidSlide
