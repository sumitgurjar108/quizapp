import React from 'react';
import { useState } from 'react';
const ShowAndHide=()=>{
  const [color,setColor]=useState('black');
 const changeColor=()=>{
        setColor(color==="white"?"black":"white");
        document.body.style.backgroundColor=color;
        document.getElementById("btn").innerHTML=color;
    };
  return (
    <div>
      <h1>change theme</h1>
      <button id="btn" onClick={changeColor}>{color}</button>
    </div>
  )
}
export default ShowAndHide;

