import * as React from 'react';
import { 
     Backdrop, 
     Box, 
     Button, 
     Fade, 
     Modal, 
     Typography}  from '@mui/material'; 
import TextFieldUI from './UI/TextFieldUI';
import {useForm}   from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',  // Set the maximum height of the modal
  overflowY: 'auto',  // Add a scrollbar when content exceeds the height
  backgroundColor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  padding: '40px',
  borderRadius: '20px',

  '@media (max-width: 800px)': {
    width: '90%',
    padding: '36px 26px'
  },
};

type CPProps = {
  state : boolean;
  setState :React.Dispatch<React.SetStateAction<boolean>>; 
}

type formfield = {
  email:string;
}

const ForgetPassword:React.FC<CPProps> = ({state,setState}) => {

  const handleClose = () => setState(false);

  const {register, handleSubmit} = useForm<formfield>({})

  const onSubmit = (data:formfield) => {
    console.log(data)
    setState(false)
  }


  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={state}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Forget Password
            </Typography>
            <Typography 
           
              id="transition-modal-description" 
              sx={{ 
                mt: 2, 
                fontSize:'16px',
                '@media (max-width: 600px)': {
                    fontSize: '12px',
              },}}
            >
              Are you sure you want to reset your password? A confirmation email will be sent to your registered email address.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 items-start justify-center mt-6 md:mt-0'>
              <TextFieldUI 
                id="email"
                label="Email"
                type="email"
                size="small"
                innerRef={register('email')}
              />
              <div className='flex justify-between w-full'>
              <Button  variant="contained" color="success" type="submit"> Confirm </Button>
              <Button onClick={handleClose} variant="contained" color="error">Close</Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ForgetPassword