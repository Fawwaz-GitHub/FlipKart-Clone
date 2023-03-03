import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import Slide from './slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`

function Home() {

  const { products } = useSelector(state => state.getProducts)
  //this get products in that we are getting from redux state [after] 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProducts())
    // whereas this is calling a function [before redux state]
  },[dispatch])

  return (
    <>
    <Navbar />
    <Component>
      <Banner />
      <MidSlide products={products} title="Deal Of The Day" timer={true}/>
      <MidSection />
      <Slide products={products} title="Trending Now" timer={false}/>
      <Slide products={products} title="Recommended Items" timer={false}/>
      <Slide products={products} title="Top Selection" timer={false}/>
    </Component>
    </>
  )
}

export default Home