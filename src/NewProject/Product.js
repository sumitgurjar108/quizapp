import React from 'react';
import { ProductData } from './NewProject/ProductData';


const Product = (props) => {

    //  const ProductData=props.ProductData;
    const Products=props.data;

  return (
    <div id='container'>
  {
    Products.map((product)=>{
      return <div key={Products.id}id='productContainer'>
    <h2 id='productTitle'>{product.title}</h2>

      </div>
    })
  }
    </div>
  )
}

export default Product;