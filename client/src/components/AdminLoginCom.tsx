import React       from 'react'
import TextFieldUI from './UI/TextFieldUI'
import {useForm}   from 'react-hook-form'
import {
    Box,
    Button,
    Typography }   from '@mui/material'

type formFields = {
    email:    string;
    password: string;
}


const AdminLoginCom:React.FC = () => {

    const {register, handleSubmit} = useForm<formFields>({})

    const onSubmit = (data:formFields) => {
        console.log(data)
    }

  return (
    <>
        <Box className='flex flex-col '>
            <Typography variant='h5' fontWeight={'bold'} sx={{color:"#273444"}}>
                Welcome back to <span className='logo'>Bmis</span>
            </Typography>
            <Typography sx={{color:"#8492a6", fontWeight:"600", fontSize:'14px'}}>
                Please Enter your credential to login!
            </Typography>
        </Box>
       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-6'>
            <TextFieldUI 
                id='email' 
                size='small' 
                label='Admin Email' 
                type='text'
                innerRef={register('email')}
            />
            <TextFieldUI 
                id='password' 
                size='small' 
                label='Admin password' 
                type='password'
                innerRef={register('password')}
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
                Login
            </Button>
       </form>
</>
  )
}

export default AdminLoginCom