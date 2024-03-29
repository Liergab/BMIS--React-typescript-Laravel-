import React                     from 'react'
import {TextField}               from '@mui/material'
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextFieldUIProps  {
  id       : string;
  label    : string;
  type?    : string;
  size?    : 'small' | 'medium';
  innerRef : UseFormRegisterReturn;
  hasError?: boolean;
}

const TextFieldUI: React.FC<TextFieldUIProps> = ({id, label, type, size,innerRef, hasError}) => {
  const style = {
    borderRadius: "8px",
    background: "#E7E8E9",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    border: hasError ? '1px solid red' : 'none',
    "& fieldset": { border: 'none' }
}
  return (
    <>
         <TextField  
             {...innerRef} 
            id={id} 
            placeholder={label} 
            variant="outlined" 
            sx={style} type={type} 
            size={size} fullWidth
          />
    </> 
  )
}

export default TextFieldUI