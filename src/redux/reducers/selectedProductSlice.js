import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectedProductSlice = createSlice({
    name : "selectedProduct",
    initialState : initialState,
    reducers : {
        selectedProduct : (state, action) =>{
            return {...state, ...action.payload};
        },
        removeSelectedProduct : (state,action) =>{
            return {};
        }
    }
});

export default selectedProductSlice.reducer;
export const {selectedProduct, removeSelectedProduct} = selectedProductSlice.actions;