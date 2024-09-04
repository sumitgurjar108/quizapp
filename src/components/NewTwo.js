import React from 'react'
import { TwoData } from './TwoData';

const NewTwo = () => {
  return (
    <div>
      {
        TwoData.map((data)=>(
      <>
      <h1>{data.image_id}</h1>
      <h2>{data.upload_date}</h2>
      <img src={data.image_url} alt="img" />
      <p>{data.comments_count}</p>
      <p>{data.uploader_username}</p>
      <p>{data.image_category}</p>
      </>
        ))
      }
    </div>
  );
}

export default NewTwo;
