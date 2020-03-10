import React, { useContext } from 'react';
import productContext from '../../context/products.context'
import Card from '../UI/Card';
import {useStore} from '../../custom-store/store'
import './ProductItem.css';

const ProductItem = React.memo(props => {
  const [state,dispatch] = useStore(true)
  console.log("RENDERED",state)
  // const toggleFav = useContext(productContext).toggleFav

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV",props.id)
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
});

export default ProductItem;
