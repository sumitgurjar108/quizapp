import React from "react";

const New = (props) => {
  const NewData = props.NewData;

  return (
    <div id="mainContainer">
      {NewData.map((productsa) => (
        <div key={productsa.id}>
          <h2>{productsa.id}</h2>
          <h2>{productsa.food_name}</h2>
          <p>${productsa.price}</p>
        </div>
      ))}
    </div>
  );
};
export  default New;
