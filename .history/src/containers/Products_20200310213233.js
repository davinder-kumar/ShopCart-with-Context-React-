import React, { useContext} from 'react';
import {useStore} from '../custom-store/store'
import ProductItem from '../components/Products/ProductItem';
// import  productContext from '../context/products.context'
import './Products.css';

const Products = props => {
  const [state] =  useStore()
  console.log(state)
  // const productList = useContext(productContext).products
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
