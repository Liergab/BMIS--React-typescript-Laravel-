import React, { useEffect }       from 'react';
import TextFieldUI from './UI/TextFieldUI';
import { Link, useNavigate }    from 'react-router-dom';
import {useForm}   from 'react-hook-form';
import useToggle   from '../hooks/useToggle';
import ForgetPassword from './ForgetPassword';
import {z}          from 'zod';
import toast         from 'react-hot-toast'; 
import { zodResolver } from '@hookform/resolvers/zod';
import {
     Box,
     Button, 
     CircularProgress, 
     Typography }      from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useResidentLoginApi } from '../service/api/Auth';
import { AxiosError }   from 'axios';
import { useDispatch } from 'react-redux';
import { setResidentCredentials } from '../service/state/slice/authResidentSlice';
import { ResidentLoginSchema } from '../schemas/FormSchema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAxiosError(error: any): error is AxiosError {
    return (error as AxiosError)?.isAxiosError === true;
  }

 
type formFields = z.infer<typeof ResidentLoginSchema>

const ResidentLoginComp:React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const ResidentLogin = useMutation({
        mutationFn:useResidentLoginApi,
        onSuccess:() => {
            navigate('/resident/dashboard')
        }
    });



    const {state,
           setState,
           toggleState} = useToggle({ initialValue: false });

    const {register, 
          handleSubmit,
          formState,
          reset,
          formState:{
                errors, 
                isSubmitting,
                isSubmitSuccessful}} = useForm<formFields>({
                    resolver:zodResolver(ResidentLoginSchema)
                });

    const onSubmit = async(data:formFields) => {
        try {
            const res = await ResidentLogin.mutateAsync(data) 
            
            dispatch(setResidentCredentials(res))
        } catch (e) {
            if (isAxiosError(e)) {
                const errorMessage = (e.response?.data as { message?: string })?.message || 'An error occurred.';
                toast.error(errorMessage)
              } else {
                console.error('Unexpected error:', e);
            }
        }
    }

    useEffect(() => {
        if(formState.isSubmitSuccessful){
            return reset();
        }
    },[formState,reset,isSubmitSuccessful])

    useEffect(() => {
        if (errors.password) {
          toast.error(errors.password.message!);
        }
        if(errors.email){
            toast.error(errors.email.message!);
        }
      }, [errors.password, errors.email]);


  return (
        <>
            <Box className='flex flex-col '>
                <Typography variant='h5' fontWeight={'bold'} sx={{color:"#273444"}}>
                    Welcome back to <span className='logo'>Bmis</span>
                </Typography>
                <Typography 
                    sx={{
                        color:"#8492a6", 
                        fontWeight:"600", 
                        fontSize:'16px', 
                        '@media (max-width: 600px)': {
                            fontSize: '14px',
                        },}}
                >
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
                    hasError={!!errors.email} 
                />
                
                <TextFieldUI 
                    id='password' 
                    size='small' 
                    label='Resident password' 
                    type='password'
                    innerRef={register('password')} 
                    hasError={!!errors.password} 
                />
            
                <div className='flex w-full items-center justify-between'>
                    <Button
                    disabled={isSubmitting}
                    type='submit'
                    sx={{
                        backgroundColor: '#EF4040', 
                        color:'#E8F1F3',
                        fontSize:'16px',
                        padding:'4px 40px 4px 40px',
                        '&:hover':{
                            backgroundColor: '#EF4040', 
                            color:'#E8F1F3',
                        },
                        '@media (max-width: 600px)': {
                            fontSize: '12px',
                        },
                    }}>
                       {isSubmitting ?
                        <span className='flex items-center gap-2 text-text'>
                          <CircularProgress size={20}/> Loading...
                        </span> 
                         : "Login"}
                    </Button>

                    <Typography 
                        className='cursor-pointer hover:underline'
                        sx={{
                            fontWeight:'600',
                            color:"#8492a6",
                            fontSize:'16px',
                            '@media (max-width: 600px)': {
                                fontSize: '12px',
                            },
                        }}
                        onClick={toggleState}
                    >
                        Forget Password
                    </Typography>
                </div>

                <Typography 
                sx={{
                    fontWeight:'600',
                    color:"#8492a6",
                      fontSize:'16px',
                      '@media (max-width: 600px)': {
                        fontSize: '12px',
                    },
                }}>
                    Dont have an account? {" "}
                    <Link to='/register'><span className='text-primary text-[12px] md:text-[16px]'>Sign_up</span></Link>
                </Typography>
            </form>

            {state && <ForgetPassword setState={setState} state={state}/>}
       

    </>
  )
}

export default ResidentLoginComp