import React      from 'react'
import { Button } from '@mui/material'

interface TogglePorps{
    handleToggle: (toggle: string) => void;
    activeToggle: string;
}
const ToggleLoginComp:React.FC<TogglePorps> = ({handleToggle, activeToggle}) => {

    const toggle_button = [
        {
            label:'Resident',
            toggle:'resident'
        },
        {
            label:'Admin',
            toggle:'admin'
        },
    ]
  return (
    <>
    {toggle_button.map((tb, index) => (
        <React.Fragment key={index}>
             <Button
                onClick={() =>handleToggle(tb.toggle)}
                sx={{ 
                    borderRadius: '20px', 
                    backgroundColor: activeToggle === tb.toggle ? '#EF4040':'#d3dce6', 
                    color: activeToggle === tb.toggle? '#E8F1F3' :'#508E9B',
                    '&:hover':{
                        color: activeToggle === tb.toggle? '#E8F1F3' :'#508E9B',
                        backgroundColor: activeToggle === tb.toggle ? '#EF4040':'#d3dce6', 
                    },
                    padding:'4px 30px',
                    fontWeight:'bold'
                }}>
                    {tb.label}
            </Button>
        </React.Fragment>

    ))}
    </>
  )
}

export default ToggleLoginComp