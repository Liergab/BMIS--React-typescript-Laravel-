import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type ToggleIconUI = {
    icon : React.ReactNode
}

const  ToggleIconUI:React.FC<ToggleIconUI> = ({icon}) => {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned" sx={{border:'none'}}>
       {icon}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleIconUI