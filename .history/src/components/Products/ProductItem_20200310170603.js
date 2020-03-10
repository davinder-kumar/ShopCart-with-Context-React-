import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
import productContext from '../../context/products.context'
import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = props => {
  // const dispatch = useDispatch();
  const toggleFav = useContext(productContext).toggleFav

  const toggleFavHandler = () => {
    toggleFav();
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
