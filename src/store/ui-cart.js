import { createSlice } from "@reduxjs/toolkit";

const initialCart ={
    cartItems:[],
    quantity: 0,
    totalPrice:0
}

const cartReducer = createSlice({
   name: 'cartreducer',
   initialState: initialCart,
   reducers:{
    addToCart(state,action){
        const newItem = action.payload
       const findItem = state.cartItems.find(item => item.itemId === newItem.id);
       state.quantity++
       if(!findItem){
           state.cartItems.push({
            itemId: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.title
           })
       }else{

           findItem.quantity++
           findItem.totalPrice = findItem.totalPrice + findItem.price;
          
       }
    },
    removeFromCart(state,action){
        let id = action.payload
       const item = state.cartItems.find(item => item.itemId === id);
       state.quantity--
        if(item.quantity === 1){
            state.cartItems = state.cartItems.filter(item => item.itemId !== id)
           
        }else{
            item.quantity--
            item.totalPrice = item.totalPrice - item.price
        
        }
    }
   }
})

export const cartReducerAction = cartReducer.actions;
export default cartReducer.reducer;