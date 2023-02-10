import React from 'react'
import './style.css'
const Text = ({Text,Color,Size}) => {
  const data=["red","blue","yellow"]
  const data1=["100px",'200px','300px','400px']
  const data2=["an",'binhan','dangbinhan','binhanan']
  return (
<div className='text' style={
    {
        fontSize:data1[Size],
        color:data[Color],
        
    }
}>{data2[Text]}

        

    </div>
  )
}

export default Text