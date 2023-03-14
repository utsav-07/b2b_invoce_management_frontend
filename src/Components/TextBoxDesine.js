import {  TextField } from '@mui/material';

import React from 'react'

export default function TextBoxDesine(props) {
    return (

      
    <TextField  sx={{
       input: { backgroundColor: 'white' , borderRadius : '12px' },
     
    }} className='rounded-lg ' style={{width : props.width}}  type={props.type} 
    InputLabelProps={{shrink : props.shrink }} 
    onChange={props.handleChange} name={props.name} label={props.label} value={props.value}  variant="filled" />
    
    );
  }


    
