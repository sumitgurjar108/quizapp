import React, { useState } from 'react'
import { Data } from './Data'; 
function New() {
  const [pdata,setData] = useState(0);
    const MovieData=()=>{
    setData(pdata+1);
    }
  const data=Data[pdata];
  return (
    <div>
<h1>{data.title}</h1>
<h2>{data.country}</h2>
<h2>{data.boxOffice}</h2>
<h2>{data.actors}</h2>
<h2>{data.rating}</h2>
<button onClick={()=>MovieData()}>Next</button>
    </div>
  );
};

export default New;
