import React       from 'react'
import TextFieldUI from './UI/TextFieldUI'
import { Link }    from 'react-router-dom'
import {useForm}   from 'react-hook-form'
import useToggle   from '../hooks/useToggle'
import ConfirmPassword from './ConfirmPassword'
import {
     Box,
     Button, 
     Typography }  from '@mui/material'


     
type formFields = {
    email:    string;
    password: string;
}

const ResidentLoginComp:React.FC = () => {
    const {state, setState ,toggleState} = useToggle({ initialValue: false })

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
        
            <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-6'>
                <TextFieldUI 
                    id='email' 
                    size='small' 
                    label='Resident Email' 
                    type='text'
                    innerRef={register('email')}
                />
                <TextFieldUI 
                    id='password' 
                    size='small' 
                    label='Resident password' 
                    type='password'
                    innerRef={register('password')} 
                />
                <div className='flex w-full justify-between'>
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

                    <Typography 
                    sx={{
                        fontSize:'14px',
                        color:"#508E9B",
                        '&:hover': {
                            cursor:'pointer',
                            textDecoration: 'underline' 
                        }
                    }}
                    onClick={toggleState}
                    >
                        Forget Password
                    </Typography>
                </div>

                <Typography 
                sx={{
                    fontWeight:'600',
                    color:"#8492a6"
                }}>
                    Dont have an account? {" "}
                    <Link to='/register'><span className='text-primary'>Sign_up</span></Link>
                </Typography>
            </form>

            {state && <ConfirmPassword setState={setState} state={state}/>}

    </>
  )
}

export default ResidentLoginComp