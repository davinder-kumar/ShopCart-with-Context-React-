import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import  productContext from '../context/products.context'
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import {useStore} from '../custom-store/store'
const Favorites = props => {
  const favoriteProducts = 
  
  
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
