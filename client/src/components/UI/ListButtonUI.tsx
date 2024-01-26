import { ListItem, 
         ListItemButton, 
         ListItemIcon, 
         ListItemText }   from "@mui/material"
import React, { ReactElement } from "react";

type ListProps = {
    icon        : ReactElement;
    label       : string;
    selnum      : number;
    evnum       : number;
    onItemClick : (index: number) => void;
}

const ListButtonUI:React.FC<ListProps> = ({icon , label, selnum, evnum, onItemClick}) => {
  

    const handleListItemClick = () => {
      onItemClick(evnum)
    };
  return (
    <>
    <ListItemButton
        selected={evnum === selnum}
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
