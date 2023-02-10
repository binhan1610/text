import React from 'react'
import './style.css'

const Button = ({Text,Color}) => {
  return (
    <div style={
        {
            background:Color,
        }
    }>
        
            <h1>{Text}</h1>
        
    </div>
  )
}

export default Button