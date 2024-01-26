import { ListItem, 
         ListItemButton, 
         ListItemIcon, 
         ListItemText }   from "@mui/material"
import React, { ReactElement } from "react";

type ListProps = {
    icon        : ReactElement;
    label       : string;
    selnum      : number;
    eventnum       : number;
    onItemClick : (index: number) => void;
}

const ListButtonUI:React.FC<ListProps> = ({icon , label, selnum, eventnum, onItemClick}) => {
  

    const handleListItemClick = () => {
      onItemClick(eventnum)
    };
  return (
    <>
    <ListItemButton
        selected={eventnum === selnum}
        onClick={handleListItemClick}
    >
        <ListItem>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label}  />
        </ListItem>                   
    </ListItemButton>
    </>
  )
}

export default ListButtonUI
