import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import React,{ useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
`
const LogOut = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`
const AccountName = styled(Typography)`
    margin-left: 40px;
    font-weight: 600; 
    font-size: 14px;
`

function Profile({account, setAccount}) {

    const [ open, setOpen ] = useState(false)
    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const Logout = () => {
        setAccount('');
    }

  return (
    <>
        <Box><AccountName onClick={handleClick} style={{ marginTop: 2, cursor: 'pointer'}}>{account}</AccountName></Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        >
        <MenuItem onClick={()=> {handleClose(); Logout();}}>
            <PowerSettingsNewIcon color='primary' fontSize='small'/>
            <LogOut> LogOut </LogOut>
        </MenuItem>
        </Component>
    </>
  )
}

export default Profile