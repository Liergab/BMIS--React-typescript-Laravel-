import React       from 'react'
import TextFieldUI from './UI/TextFieldUI'
import { Link }    from 'react-router-dom'
import {useForm}   from 'react-hook-form'
import {
      Box, 
      Button, 
      Typography }  from '@mui/material'

type formFieldProps = {
  firstname:       string;
  lastname:        string;
  email:           string;
  password:        string;
  confirmPassword: string;
}

const ResidentSigninComp:React.FC = () => {

  const {register, handleSubmit} = useForm<formFieldProps>({})

  const onSubmit = (data:formFieldProps) => {
    console.log(data)
  }
  return (
    <>
      <Box className="flex flex-col">
        <Typography variant='h5' fontWeight={'bold'} sx={{color:"#273444"}}>
          Welcome to <span className='logo'>Bmis</span>
        </Typography>
        <Typography sx={{color:"#8492a6", fontWeight:"600", fontSize:'14px'}}>
          Nice to meet you! Enter your details to register.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-4'>
        <TextFieldUI 
          id='firstName' 
          size='small' 
          label='Resident First Name' 
          type='text'
          innerRef={register('firstname')}
        />
        <TextFieldUI 
          id='lastName' 
          size='small' 
          label='Resident Last Name' 
          type='text'
          innerRef={register('lastname')}
        />
        <TextFieldUI 
          id='email' 
          size='small' 
          label='Resident Email' 
          type='email'
          innerRef={register('email')}
        />
        <TextFieldUI 
          id='password' 
          size='small' 
          label='Password' 
          type='password'
          innerRef={register('password')}
        />
        <TextFieldUI 
          id='confirmPassword' 
          size='small' 
          label='Confirm Password' 
          type='password'
          innerRef={register('confirmPassword')}
        />

        <Button
          // disabled={true}
          type='submit'
          sx={{
              backgroundColor: '#EF4040', 
              color:'#E8F1F3',
              padding:'4px 40px 4px 40px',
              '&:hover':{
                  backgroundColor: '#EF4040', 
                  color:'#E8F1F3',
              }
          }}>
            Register
        </Button>

        <Typography 
                  sx={{
                      fontWeight:'600',
                      color:"#8492a6"
                  }}>
                      Dont have an account? {" "}
                      <Link to='/login'><span className='text-primary'>sign in</span></Link>
                  </Typography>
      </form>
  </>
  )
}

export default ResidentSigninComp