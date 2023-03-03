import React,{ useState, useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { authenticateSignup, authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider' 
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`

const Image = styled(Box)`
  background-color: #2874f0;
  height: 89.3%;
  width: 30%;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  gap: 170px;
  color: white;
`

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
  flex: 1;
  & > div, & > button, & > p {
    margin-top: 15px;
  }
`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: #fb641b;
  }
`

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  cursor: pointer;
`

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subheading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started"
  }
}

const inputInitialValue = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}

const loginInitialValue = {
  username: '',
  password: ''
}

function LoginDialog({open, setOpen}) {

  const [signup, setSignup] = useState(inputInitialValue)

  const [account, toggleAccount] = useState(accountInitialValues.login)

  const [login, setLogin] = useState(loginInitialValue)

  const [error, setError] = useState(false)

  const { setAccount } = useContext(DataContext)

  const handleClose = () => {
    setOpen(false)
    toggleAccount(accountInitialValues.login)
    setError(false)
  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup)
  }

  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name] : e.target.value})
  }

  const signupUser = async () => {
    await authenticateSignup(signup);
    handleClose();
    setAccount(signup.username)
  }

  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response)
    if (response.status === 200 ) {
      handleClose();
      setAccount(response.data.data.username);
    } else {
      setError(true)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
      <Component>
        <Image>
          <Box>
          <Typography variant='h5'>{account.heading}</Typography><br/>
          <Typography style={{ color: '#d3d3d3'}}>{account.subheading}</Typography>
          </Box>
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="loginimage" />
        </Image>
        { account.view ==='login' ?
        <Wrapper>
          <TextField variant='standard' onChange={(e)=> onValueChange(e)} name='username' label='Enter Username'/>
              { error && <Error>Please Enter A Valid Username Or Password</Error> }
          <TextField variant='standard' onChange={(e)=> onValueChange(e)} name='password' label='Enter Password'/>
          <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
          <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
          <Typography style={{ textAlign: 'center'}}>OR</Typography>
          <RequestOTP>Request OTP</RequestOTP>
          <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
        </Wrapper> :
          <Wrapper>
          <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='firstname' label='Enter First Name'/>
          <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='lastname' label='Enter Last Name'/>
          <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='username' label='Enter Username'/>
          <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='email' label='Enter Email'/>
          <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='password' label='Enter Password'/>
          <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='phone' label='Enter Phone Number'/>
          <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
        </Wrapper>
          }
      </Component>
    </Dialog>
  )
}

export default LoginDialog