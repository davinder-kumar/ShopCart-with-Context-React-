import React, { useContext} from 'react';

import ProductItem from '../components/Products/ProductItem';
import  productContext from '../context/products.context'
import './Products.css';

const Products = props => {
  console.log(useContext(productContext))
  const productList = useContext(productContext).products
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {productList.map(prod => (
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
