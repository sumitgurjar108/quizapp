// import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { ApiData } from './ApiData';

const Api = () => {
    const [users,setUsers]=useState([]);
    let url="https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        fetch(url).then((response)=>response.json().then((data)=>{
            setUsers(data);
        }));
    },[]);
    console.log(users);
    
    const user=users.map((user)=>{


    // axios.get(url).then((response)=>console.log(response.data));
  return (
    <div key={user.id}>
            <p>{user.email}</p>
            <p>{user.email}</p>
    </div>
  );
});
return <>{user}</>
};

export default Api;
