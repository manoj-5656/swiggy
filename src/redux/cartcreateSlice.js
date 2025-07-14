import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice(
    {
        name:"cartinfo",
        initialState:{
            items:[]
        },
        reducers:{
            addItems:(state,action)=>{
                state.items.push(action.payload)
            },
            clearcard:(state)=>{
                state.items=[]
            }
        }

}
)
export const {addItems,clearcard}=cartslice.actions
export default cartslice.reducer