import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleReducerAction } from './store/carttogglereducer';
import Notification from './components/UI/Notification';
import { cartReducerAction } from './store/ui-cart';

let isInitial = true;

function App() {

  const dispatch =  useDispatch();

  const isToggle = useSelector(state => state.cartToggle.isToggle)
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const notification = useSelector(state => state.cartToggle.notificationHandler)

  useEffect(()=>{

    const fetchData = async () =>{

      dispatch(toggleReducerAction.setNotificationHandler({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data...'
      }))

     const sendData = await fetch('https://reactsampleapi-1d96c-default-rtdb.firebaseio.com/cart.json')

     const parsedData = await sendData.json()

      if(!sendData.ok){
        throw new Error('Sending cart data failed..!')
      }

      console.log(parsedData)

       dispatch(cartReducerAction.replaceCartItems(parsedData))

      dispatch(toggleReducerAction.setNotificationHandler({
        status: 'success',
        title: 'Success',
        message: 'Sending cart data was successfull'
      }))

    }


    fetchData().catch(err  =>{
     
      dispatch(toggleReducerAction.setNotificationHandler({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data was failure'
      }))

    })

    
  },[dispatch])

  useEffect(()=>{

    const apiHandler = async () =>{

      dispatch(toggleReducerAction.setNotificationHandler({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data...'
      }))

     const sendData = await fetch('https://reactsampleapi-1d96c-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cartItems)
      })

      if(!sendData.ok){
        throw new Error('Sending cart data failed..!')
      }

      dispatch(toggleReducerAction.setNotificationHandler({
        status: 'success',
        title: 'Success',
        message: 'Sending cart data was successfull'
      }))

    }

    if(isInitial){
      isInitial = false;
      return
    }

    apiHandler().catch(err  =>{
     
      dispatch(toggleReducerAction.setNotificationHandler({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data was failure'
      }))

    })
   
  },[cartItems,dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {isToggle &&  <Cart />}
     
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
