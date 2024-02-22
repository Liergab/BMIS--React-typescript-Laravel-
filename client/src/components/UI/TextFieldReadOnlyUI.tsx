import { TextField } from '@mui/material'
import React from 'react'

interface propsType {
    label : string;
    value : string;
}


const TextFieldReadOnlyUI:React.FC<propsType> = ({label, value}) => {
  return (
    <TextField
        label={label}
        defaultValue={value}
        InputProps={{
        readOnly: true,
        }}
        variant="standard"
    />
  )
}

export default TextFieldReadOnlyUI