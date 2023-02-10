import "./App.css";
import Text from "./components/Text";
import React from "react";
function App() {
  const [text, setText] =React.useState(0)
  const [color, setColor] =React.useState(0)
  const [size, setSize] =React.useState(0)
 
  const onClickText=()=>
  {
     if(text===3) setText(0)
     else setText(text+1)
  }
  const onClickColor=()=>
  {
     if(color===2) setColor(0)
     else setColor(color+1)
     
  }
  const onClickSize=()=>
  {
     if(size===3) setSize(0)
     else setSize(size+1)
  }
  return (
      <div className="text">
        <Text Text={text} Color={color} Size={size}/>
        <button onClick={onClickText}>Text</button>
        <button onClick={onClickColor}>Color</button>
        <button onClick={onClickSize}>Size</button>


    </div>

  );
}

export default App;
