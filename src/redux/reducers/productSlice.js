import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

const productSlice = createSlice({
    name : "products",
    initialState : initialState,
    reducers : {
        setProducts : (state, action) => {
            state.products = [...state.products , ...action.payload];
        }
    }
})

export default productSlice.reducer;
export const {setProducts} = productSlice.actions;







// export const productReducer = (state= initialState,action) => {
//     switch (action.type) {
//         case ActionTypes.SET_PRODUCTS:
//             return state;    
//         default:
//             return state;
//     }
// }