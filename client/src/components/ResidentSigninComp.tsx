import React, { useEffect }       from 'react';
import TextFieldUI from './UI/TextFieldUI';
import {Link}      from 'react-router-dom';
import {useForm}   from 'react-hook-form';
import {z}         from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {Box, 
       Button, 
       CircularProgress, 
       Typography }  from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useResidentSignApi } from '../service/api/Auth';
import { AxiosError } from 'axios';
import { ResidentSigninSchema } from '../schemas/FormSchema';
import toast from 'react-hot-toast';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAxiosError(error: any): error is AxiosError {
  return (error as AxiosError)?.isAxiosError === true;
}

type formFieldProps = z.infer<typeof ResidentSigninSchema>



const ResidentSigninComp:React.FC = () => {

  // const navigate = useNavigate();
  const ResidentSignin = useMutation({
    mutationFn:useResidentSignApi,
  })

  const {register, 
        handleSubmit,
        reset,
        formState,
        formState:{errors, 
                  isSubmitting, 
                  isSubmitSuccessful}} = useForm<formFieldProps>({
                    resolver:zodResolver(ResidentSigninSchema)
                  });

  const onSubmit = async(data:formFieldProps) => {
    try {
      const res = await ResidentSignin.mutateAsync(data);
      toast.success('Successful register, please wait for the Approval of your Account.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      console.log(res)
    } catch (e) {
      if (isAxiosError(e)) {
        const errorMessage = (e.response?.data as { message?: string })?.message || 'An error occurred.';
       toast.error(errorMessage)
      } else {
        console.error('Unexpected error:', e);
    }
    }
  };

  useEffect(() => {
    if(formState.isSubmitSuccessful){
        reset();
        
    }
  },[formState, isSubmitSuccessful,reset]);

  useEffect(() => {
    if (errors.password) {
      toast.error(errors.password.message!);
    }
    if(errors.email){
        toast.error(errors.email.message!);
    }
    if(errors.first_name){
      toast.error(errors.first_name.message!);
    }
    if(errors.last_name){
    toast.error(errors.last_name.message!);
    }
    if(errors.password_confirmation){
    toast.error(errors.password_confirmation.message!);
    }
  }, [errors.password,
      errors.email, 
      errors.first_name,
      errors.last_name, 
      errors.password_confirmation]);

  return (
    <>
      <Box className="flex flex-col">
        <Typography variant='h5' fontWeight={'bold'} sx={{color:"#273444"}}>
          Welcome to <span className='logo'>Bmis</span>
        </Typography>
        <Typography 
          sx={{
            color:"#8492a6", 
            fontWeight:"600", 
            fontSize:'16px', 
            '@media (max-width: 600px)': {
                fontSize: '12px',
            },}}
        >
           Enter your details to register!
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-4'>
        <TextFieldUI 
          id='first_name' 
          size='small' 
          label='Resident First Name' 
          type='text'
          innerRef={register('first_name')}
          hasError={!!errors.first_name} 
        />
          
        <TextFieldUI 
          id='last_name'
          size='small' 
          label='Resident Last Name' 
          type='text'
          innerRef={register('last_name')}
          hasError={!!errors.last_name} 
        />
           
        <TextFieldUI 
          id='email' 
          size='small' 
          label='Resident Email' 
          type='email'
          innerRef={register('email')}
          hasError={!!errors.email} 
        />
           
        <TextFieldUI 
          id='password' 
          size='small' 
          label='Password' 
          type='password'
          innerRef={register('password')}
          hasError={!!errors.password} 
        />
          
        <TextFieldUI 
          id='password_confirmation' 
          size='small' 
          label='Confirm Password' 
          type='password'
          innerRef={register('password_confirmation')}
          hasError={!!errors.password_confirmation} 
        />
         

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
            : 'Register'}
        </Button>

        <Typography 
            sx={{
                fontWeight:'600',
                color:"#8492a6",
                fontSize:'16px',
                '@media (max-width: 600px)': {
                  fontSize: '12px',
                  },
              }}
          >
            Dont have an account? {" "}
            <Link to='/login'>
              <span className='text-primary text-[12px] md:text-[16px]'>sign in</span>
            </Link>
          </Typography>
      </form>
      
  </>
  )
}

export default ResidentSigninComp