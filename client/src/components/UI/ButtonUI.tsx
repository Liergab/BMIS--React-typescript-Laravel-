import React      from 'react';
import { Link }   from 'react-router-dom';
import { Button } from '@mui/material';

interface ButtonUIProps {
    buttonName : string;
    textColor? : string;
    link?      : string;
  }

const ButtonUI:React.FC<ButtonUIProps> = ({buttonName, textColor = '#EF4040', link}) => {
  return (
    <div>
    <Link to={`/${link}`}>
      <Button variant="contained"  style={{ background: textColor }}>
        {buttonName}
    </Button>
    </Link>
    </div>
  )
}

export default ButtonUI
