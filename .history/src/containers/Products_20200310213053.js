import React, { useContext} from 'react';
import {useStore} from '../custom-store/store'
import ProductItem from '../components/Products/ProductItem';
// import  productContext from '../context/products.context'
import './Products.css';

const Products = props => {
  const [state,dispatch] =  useStore()
  console.log(state,"SDASS")
  // const productList = useContext(productContext).products
  return (
    <p></p>
  );
};

export default Products;
