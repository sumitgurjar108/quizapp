import react, { useState } from 'react';
import React from 'react';

function Myapp(){
    const[like,setLike]=useState(10);
    const Practise=()=>{
        setLike(like-1);
    }
    return(
    <>
            <h1>{like}</h1>
            <button onClick={Practise}>click</button>
    </>
    )
}
export default Myapp;
