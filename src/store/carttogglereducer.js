import { createSlice } from "@reduxjs/toolkit";

const initialToggleState ={
    isToggle: true
}

const toggleReducer = createSlice({
    name: 'cartToggle',
    initialState: initialToggleState,
    reducers:{
        setIsToggle(state){
            state.isToggle = !state.isToggle;
        }
    }
})

export const toggleReducerAction = toggleReducer.actions;

export default toggleReducer.reducer;