import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./carttogglereducer";

const store = configureStore({
    reducer: {cartToggle : toggleReducer}
})

export default store;