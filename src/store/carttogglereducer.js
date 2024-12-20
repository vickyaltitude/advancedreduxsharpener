import { createSlice } from "@reduxjs/toolkit";

const initialToggleState ={
    isToggle: true,
    notificationHandler:null
}

const toggleReducer = createSlice({
    name: 'cartToggle',
    initialState: initialToggleState,
    reducers:{
        setIsToggle(state){
            state.isToggle = !state.isToggle;
        },
        setNotificationHandler(state,action){
            state.notificationHandler = {
                status: action.payload.status,
                message: action.payload.message,
                title: action.payload.title
            }
        }
    }
})

export const toggleReducerAction = toggleReducer.actions;

export default toggleReducer.reducer;