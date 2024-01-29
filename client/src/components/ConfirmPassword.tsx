import * as React from 'react';
import { 
     Backdrop, 
     Box, 
     Button, 
     Fade, 
     Modal, 
     Typography}  from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'20px'
};

type CPProps = {
  state : boolean;
  setState :React.Dispatch<React.SetStateAction<boolean>>; 
}
const ConfirmPassword:React.FC<CPProps> = ({state,setState}) => {

  const handleClose = () => setState(false);

  const confirmButton = () => {
    alert('reset password')
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
              Confirm Password Reset
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to reset your password? A confirmation email will be sent to your registered email address.
            </Typography>

            <Box className='flex flex-end mt-5 justify-between'>
              <Button onClick={confirmButton} variant="contained" color="success"> Confirm </Button>
              <Button onClick={handleClose} variant="contained" color="error">Close</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ConfirmPassword