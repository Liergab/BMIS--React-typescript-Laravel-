import React       from 'react';
import TextFieldUI from './UI/TextFieldUI';
import { Link }    from 'react-router-dom';
import {useForm}   from 'react-hook-form';
import useToggle   from '../hooks/useToggle';
import ForgetPassword from './ForgetPassword';
import {z}          from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
     Box,
     Button, 
     Typography }  from '@mui/material';

const residentSchema = z.object({
    email: z.string().email(),
    password: z
    .string()
    .min(8,{ message: 'Invalid Password' })
    .max(12)
})
     
type formFields = z.infer<typeof residentSchema>

const ResidentLoginComp:React.FC = () => {
    const {state, setState ,toggleState} = useToggle({ initialValue: false })

    

    const {register, 
          handleSubmit,
          setError, 
          formState:{errors, isSubmitting}} = useForm<formFields>({resolver:zodResolver(residentSchema)})

    const onSubmit = async(data:formFields) => {
        await new  Promise((resolve) => setTimeout(resolve, 1000));
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
                 {errors.email &&  <span className="text-sm   text-bg-button ">{errors.email.message}</span>}
                <TextFieldUI 
                    id='password' 
                    size='small' 
                    label='Resident password' 
                    type='password'
                    innerRef={register('password')} 
                />
                 {errors.password &&  <span className="text-sm text-bg-button ">{errors.password.message}</span>}
                <div className='flex w-full justify-between'>
                    <Button
                    disabled={isSubmitting}
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
                       {isSubmitting ? "Loading..." : "Login"}
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

            {state && <ForgetPassword setState={setState} state={state}/>}

    </>
  )
}

export default ResidentLoginComp