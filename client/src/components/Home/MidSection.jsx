import React from 'react'
import { Grid, styled } from '@mui/material'
import { imageURL } from '../../constants/data'

const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`

function MidSection() {
  return (
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {
            imageURL.map(pic => {
                return(
                    <Grid item lg={4} sm={4} md={12} xs={12}>
                        <img src={pic} alt='subbannerpic' style={{ width: '100%' }}/>
                    </Grid> 
                )
            })
        }
    </Wrapper>
  )
}

export default MidSection