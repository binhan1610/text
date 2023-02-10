import React from 'react'
import './style.css'
const Shape = ({Shape,Size,Color}) => {
  
  return (
    <div className='shape'         style={
        {
            color: Color=== false ? "black":"red", 
            Size: Size===false ? "100px":"200px"
        }
    }>

        

    </div>
  )
}

export default Shape