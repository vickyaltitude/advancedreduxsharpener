import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {toggleReducerAction} from '../../store/carttogglereducer';
import { useDispatch } from 'react-redux';

const MainHeader = (props) => {
     
  const dispatch = useDispatch();
  
  function handleCartToggle(){
    dispatch(toggleReducerAction.setIsToggle());
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleCartToggle} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
