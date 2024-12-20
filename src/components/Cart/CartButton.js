import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const prodQty = useSelector(state => state.cartReducer.quantity)

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{prodQty}</span>
    </button>
  );
};

export default CartButton;
