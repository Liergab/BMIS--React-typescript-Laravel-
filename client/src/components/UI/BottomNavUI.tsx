import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type ListProps = {
    icon        : React.ReactElement;
    label       : string;
    selnum      :number;
    eventnum    : number;
    onItemClick : (index: number) => void;
}

const BottomNavUI:React.FC<ListProps> = ({icon , label ,selnum, eventnum, onItemClick}) => {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  const handleListItemClick = () => {
    onItemClick(eventnum)
  };

  return (
    <ToggleButtonGroup
      sx={{background: selnum === eventnum ? '#B7C1F5' : 'transparent'}}
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton 
        value={label} aria-label="left aligned"
         onClick={handleListItemClick}
          sx={{border:'none'}}
      >
        {icon}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default BottomNavUI
