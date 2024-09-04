import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const ReactForm = () => {
    const [text,setText]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  return (
    <>
   <div> <h1>React Form</h1> 
    <input type='text' placeholder='Enter text' onChange={(event)=>{
        setText(event.target.value)
    }} />
<h1>inputdata:{text}</h1></div>
<div>
    <input type='email' placeholder='Enter mail' onChange={(event)=>{
        setEmail(event.target.value)
    }}/>
<h1>Input Mail:{email}</h1>
</div>
<div>
    <input type='password' placeholder='Enter your password' onChange={(event)=>{
        setPassword(event.target.value)
    }}/>
<h1>Input Password:{password}</h1>
</div>
    </>
  )
}

export default ReactForm;
