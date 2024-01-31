import React       from 'react';
import TextFieldUI from './UI/TextFieldUI';
import { Link }    from 'react-router-dom';
import {useForm}   from 'react-hook-form';
import {z}       from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
      Box, 
      Button, 
      Typography }  from '@mui/material';


const schema = z.object({
      firstname : z.string().min(1,{message:'First Name required!'}),
      lastname : z.string().min(1,{message:'Last Name required!'}),
      email    : z.string().email(),
      password : z.string().min(8,{ message: 'Invalid Password'}).max(12),
      confirmPassword :z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type formFieldProps = z.infer<typeof schema>



const ResidentSigninComp:React.FC = () => {

  const {register, 
        handleSubmit,
        formState:{errors, isSubmitting}} = useForm<formFieldProps>({resolver:zodResolver(schema)})

  const onSubmit = (data:formFieldProps) => {
    console.log(data)
  }
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
          id='firstName' 
          size='small' 
          label='Resident First Name' 
          type='text'
          innerRef={register('firstname')}
        />
           {errors.firstname&&  <span className="text-sm   text-bg-button ">{errors.firstname.message}</span>}
        <TextFieldUI 
          id='lastName' 
          size='small' 
          label='Resident Last Name' 
          type='text'
          innerRef={register('lastname')}
        />
            {errors.lastname &&  <span className="text-sm   text-bg-button ">{errors.lastname.message}</span>}
        <TextFieldUI 
          id='email' 
          size='small' 
          label='Resident Email' 
          type='email'
          innerRef={register('email')}
        />
            {errors.email &&  <span className="text-sm   text-bg-button ">{errors.email.message}</span>}
        <TextFieldUI 
          id='password' 
          size='small' 
          label='Password' 
          type='password'
          innerRef={register('password')}
        />
           {errors.password &&  <span className="text-sm   text-bg-button ">{errors.password.message}</span>}
        <TextFieldUI 
          id='confirmPassword' 
          size='small' 
          label='Confirm Password' 
          type='password'
          innerRef={register('confirmPassword')}
        />
          {errors.confirmPassword &&  <span className="text-sm   text-bg-button ">{errors.confirmPassword.message}</span>}

        <Button
          // disabled={true}
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
            Register
        </Button>

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
                      <Link to='/login'><span className='text-primary text-[12px] md:text-[16px]'>sign in</span></Link>
                  </Typography>
      </form>
  </>
  )
}

export default ResidentSigninComp