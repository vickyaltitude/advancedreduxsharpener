import classes from './CartItem.module.css';
import { cartReducerAction } from '../../store/ui-cart';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {

  const dispatch = useDispatch()
  const {title, quantity, total, price } = props.item;

  function handleItemReduce(){
     dispatch(cartReducerAction.removeFromCart(props.id));
  }

  function handleItemIncrease(){
    
    dispatch(cartReducerAction.addToCart({
        id: props.id,
        title,
        price
    }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleItemReduce}>-</button>
          <button onClick={handleItemIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
