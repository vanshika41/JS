import React from 'react'
import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item , setBodyPart, bodyPart}) => {
  return (
    <Stack
     type = "button"
     alignItems= "center"
     justifyContent= "center"
     className='bodyPart-card'
     sx = {
        bodyPart === item ?{
            borderTop : '4px solid #27374D',
            backgroundColor : '#fff',
            borderBottomLeftRadius : '20px',
            width : '270px',
            height : '280px',
            cursor : 'pointer',
            gap : '47px'
        } : {
            backgroundColor : '#fff',
            borderBottomLeftRadius : '20px',
            width : '270px',
            height : '280px',
            cursor : 'pointer',
            gap : '47px'
        }
     }
     onClick = {() =>{
        setBodyPart(item)
        window.scrollTo({top : 1800,
            left : 100,
            behavior : 'smooth'
        })
     }}
    >
        <img src = {Icon} alt = "dumbbell" className='body-part-icon'
        style = {{
            width : '60px'
            ,height :' 60px'
        }}
        
        />
        <Typography 
        fontSize='28px'
        fontWeight= "bold"
        color = "#3A1212"
        textTransform= "capitalize"
        >{item}</Typography>
    </Stack>
  )
}

export default BodyPart