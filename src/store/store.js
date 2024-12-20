import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./carttogglereducer";
import cartReducer from './ui-cart.js'

const store = configureStore({
    reducer: {cartToggle : toggleReducer,cartReducer:cartReducer}
})

export default store;