import React, { useState } from 'react';

const Component1 = () => {
  const [isAdmin, setAdmin] = useState("user");

  const handleClick = () => {
    setAdmin(isAdmin === "user" ? "admin" : "user");
  };

  console.log(isAdmin);
  const par1=document.getElementsByClassName("par1");
  const para1 =()=>{
    para1,onclick(){
      
    }
  }


  return (
    <div>
      {isAdmin === "user" ? (
        <p className='par1'>You are a User</p> // Render this when isAdmin is "user"
      ) : (
        <p>You are an Admin</p> // Render this when isAdmin is "admin"
      )}
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Component1;
