import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import selectedProductSlice from "./reducers/selectedProductSlice";

const store = configureStore({
    reducer : {
        allProducts : productSlice,
        product : selectedProductSlice
    }
});

export default store;